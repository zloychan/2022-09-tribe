pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import "@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IWETH.sol";
import "@openzeppelin/contracts/math/Math.sol";
import "./IUniswapPCVController.sol";
import "../refs/UniRef.sol";
import "../external/Decimal.sol";
import "../external/SafeMathCopy.sol";

/// @title a IUniswapPCVController implementation for ETH
/// @author Fei Protocol
contract EthUniswapPCVController is IUniswapPCVController, UniRef {
    using Decimal for Decimal.D256;
    using SafeMathCopy for uint256;

    uint256 internal constant WITHDRAW_AMOUNT_BPS = 9000;

    uint256 internal constant BASIS_POINTS_GRANULARITY = 10000;

    IPCVDeposit public override pcvDeposit;
    IUniswapIncentive public override incentiveContract;

    uint256 public override reweightIncentiveAmount;
    Decimal.D256 internal _minDistanceForReweight;

    /// @notice EthUniswapPCVController constructor
    /// @param _core Fei Core for reference
    /// @param _pcvDeposit PCV Deposit to reweight
    /// @param _oracle oracle for reference
    /// @param _incentiveContract incentive contract for reference
    /// @param _incentiveAmount amount of FEI for triggering a reweight
    /// @param _minDistanceForReweightBPs minimum distance from peg to reweight in basis points
    /// @param _pair Uniswap pair contract to reweight
    /// @param _router Uniswap Router
    constructor(
        address _core,
        address _pcvDeposit,
        address _oracle,
        address _incentiveContract,
        uint256 _incentiveAmount,
        uint256 _minDistanceForReweightBPs,
        address _pair,
        address _router
    ) public UniRef(_core, _pair, _router, _oracle) {
        pcvDeposit = IPCVDeposit(_pcvDeposit);
        incentiveContract = IUniswapIncentive(_incentiveContract);

        reweightIncentiveAmount = _incentiveAmount;
        _minDistanceForReweight = Decimal.ratio(
            _minDistanceForReweightBPs,
            BASIS_POINTS_GRANULARITY
        );
    }

    receive() external payable {}

    function reweight() external override postGenesis {
        updateOracle();
        require(
            reweightEligible(),
            "EthUniswapPCVController: Not at incentive parity or not at min distance"
        );
        _reweight();
        _incentivize();
    }

    function forceReweight() external override onlyGovernor {
        _reweight();
    }

    function setPCVDeposit(address _pcvDeposit) external override onlyGovernor {
        pcvDeposit = IPCVDeposit(_pcvDeposit);
        emit PCVDepositUpdate(_pcvDeposit);
    }

    function setReweightIncentive(uint256 amount)
        external
        override
        onlyGovernor
    {
        reweightIncentiveAmount = amount;
        emit ReweightIncentiveUpdate(amount);
    }

    function setReweightMinDistance(uint256 basisPoints)
        external
        override
        onlyGovernor
    {
        _minDistanceForReweight = Decimal.ratio(
            basisPoints,
            BASIS_POINTS_GRANULARITY
        );
        emit ReweightMinDistanceUpdate(basisPoints);
    }

    function reweightEligible() public view override returns (bool) {
        bool magnitude =
            _getDistanceToPeg().greaterThan(_minDistanceForReweight);
        bool time = incentiveContract.isIncentiveParity();
        return magnitude && time;
    }

    function minDistanceForReweight()
        external
        view
        override
        returns (Decimal.D256 memory)
    {
        return _minDistanceForReweight;
    }

    function _incentivize() internal ifMinterSelf {
        fei().mint(msg.sender, reweightIncentiveAmount);
    }

    function _reweight() internal {
        _withdraw();
        _returnToPeg();

        uint256 balance = address(this).balance;
        pcvDeposit.deposit{value: balance}(balance);

        _burnFeiHeld();

        emit Reweight(msg.sender);
    }

    function _returnToPeg() internal {
        (uint256 feiReserves, uint256 ethReserves) = getReserves();
        if (feiReserves == 0 || ethReserves == 0) {
            return;
        }

        updateOracle();

        require(
            _isBelowPeg(peg()),
            "EthUniswapPCVController: already at or above peg"
        );

        uint256 amountEth = _getAmountToPegOther();
        _swapEth(amountEth, ethReserves, feiReserves);
    }

    function _swapEth(
        uint256 amountEth,
        uint256 ethReserves,
        uint256 feiReserves
    ) internal {
        uint256 balance = address(this).balance;
        uint256 amount = Math.min(amountEth, balance);

        uint256 amountOut =
            UniswapV2Library.getAmountOut(amount, ethReserves, feiReserves);

        IWETH weth = IWETH(router.WETH());
        weth.deposit{value: amount}();
        assert(weth.transfer(address(pair), amount));

        (uint256 amount0Out, uint256 amount1Out) =
            pair.token0() == address(weth)
                ? (uint256(0), amountOut)
                : (amountOut, uint256(0));
        pair.swap(amount0Out, amount1Out, address(this), new bytes(0));
    }

    function _withdraw() internal {
        // Only withdraw a portion to prevent rounding errors on Uni LP dust
        uint256 value =
            pcvDeposit.totalValue().mul(WITHDRAW_AMOUNT_BPS) /
                BASIS_POINTS_GRANULARITY;
        pcvDeposit.withdraw(address(this), value);
    }
}
