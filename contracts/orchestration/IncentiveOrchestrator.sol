pragma solidity ^0.6.0;

import "../token/UniswapIncentive.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@uniswap/v2-periphery/contracts/libraries/UniswapV2Library.sol";

contract IncentiveOrchestrator is Ownable {

	UniswapIncentive public uniswapIncentive;

	address public constant WETH = address(0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2);
	address public constant UNISWAP_FACTORY = address(0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f);

	bool public deployed;

	function init(
		address core,
		address bondingCurveOracle, 
		address fei, 
		address router
	) public onlyOwner {
		address pair = UniswapV2Library.pairFor(UNISWAP_FACTORY, fei, WETH);

		if (!deployed) {
			uniswapIncentive = new UniswapIncentive(core, bondingCurveOracle, pair, router);
			deployed = true;	
		}
	}
}