// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import {TribeRoles} from "../core/TribeRoles.sol";
import {OptimisticTimelock} from "../dao/timelock/OptimisticTimelock.sol";

import {IControllerV1} from "../pods/interfaces/IControllerV1.sol";
import {IMemberToken} from "../pods/interfaces/IMemberToken.sol";
import "hardhat/console.sol";

/// @notice Contract used by an Admin pod to manage child pods.

/// @dev This contract is primarily a factory contract which an admin
/// can use to deploy more optimistic governance pods. It will create an
/// Orca pod and deploy an optimistic timelock alongside it.
///
/// The timelock and Orca pod are then linked up so that the Orca pod is
/// the only proposer and executor.
contract PodManager {
    /// @notice Address from which the admin pod transactions will be sent. Likely a timelock
    address private immutable podAdmin;

    /// @notice Orca controller for Pod
    IControllerV1 private immutable podController;

    /// @notice Membership token for the pod
    IMemberToken private immutable memberToken;

    /// @notice Core address
    address private immutable core;

    event CreatePod(uint256 podId, address safeAddress);

    modifier onlyAdmin() {
        require(msg.sender == podAdmin, "UNAUTHORISED");
        _;
    }

    constructor(
        address _core,
        address _podAdmin,
        address _podController,
        address _memberToken
    ) {
        require(_core != address(0), "CORE_ADDRESS_NOT_SET");
        require(_podAdmin != address(0x0), "Zero address");
        require(_podController != address(0x0), "Zero address");

        core = _core;
        podAdmin = _podAdmin;
        podController = IControllerV1(_podController);
        memberToken = IMemberToken(_memberToken);
    }

    ///////////////////// GETTERS ///////////////////////

    /// @notice Get the address of the Gnosis safe that represents a pod
    /// @param podId Unique id for the orca pod
    function getPodSafe(uint256 podId) external view returns (address) {
        return podController.podIdToSafe(podId);
    }

    //////////////////// STATE-CHANGING API ////////////////////

    /// @notice Create a child Orca pod. Callable by the DAO and the Tribal Council
    /// @param _members List of members to be added to the pod
    /// @param _threshold Number of members that need to approve a transaction on the Gnosis safe
    /// @param _podLabel Metadata, Human readable label for the pod
    /// @param _ensString Metadata, ENS name of the pod
    /// @param _imageUrl Metadata, URL to a image to represent the pod in frontends
    /// @param minDelay Delay on the timelock
    function createChildOptimisticPod(
        address[] memory _members,
        uint256 _threshold,
        bytes32 _podLabel,
        string memory _ensString,
        string memory _imageUrl,
        uint256 minDelay
    ) public onlyAdmin returns (uint256, address) {
        uint256 podId = memberToken.getNextAvailablePodId();

        podController.createPod(
            _members,
            _threshold,
            podAdmin,
            _podLabel,
            _ensString,
            podId,
            _imageUrl
        );
        address safeAddress = podController.podIdToSafe(podId);
        address timelock = createOptimisticTimelock(
            core,
            safeAddress,
            safeAddress,
            minDelay
        );
        emit CreatePod(podId, safeAddress);
        return (podId, timelock);
    }

    /// @notice Create an Optimistic timelock, with a proposer and executor
    /// @param _core Fei core address
    /// @param proposer Timelock proposer address
    /// @param executor Timelock executor address
    /// @param minDelay Delay on the timelock before execution
    function createOptimisticTimelock(
        address _core,
        address proposer,
        address executor,
        uint256 minDelay
    ) internal returns (address) {
        address[] memory proposers = new address[](1);
        proposers[0] = proposer;

        address[] memory executors = new address[](1);
        executors[0] = executor;

        OptimisticTimelock timelock = new OptimisticTimelock(
            _core,
            minDelay,
            proposers,
            executors
        );
        return address(timelock);
    }
}
