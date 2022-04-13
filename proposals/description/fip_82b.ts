import { ProposalDescription } from '@custom-types/types';

const fip_82b: ProposalDescription = {
  title: 'FIP-82b: Authorise the TribalCouncil with necessary roles',
  commands: [
    /////// Transfer all non-major role admins to the ROLE_ADMIN, to allow TribalCouncil to manage ////////
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0xf0b50f04623eeaacfa1f202e062a3001c925a35c6b75d6903e67b43f44bbf152', // PARAMETER_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer PARAMETER_ADMIN role admin to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0xc7be67d109cc181c862ac2eaed91ab54817910d73264a8ad5d87592516929a15', // MINOR_ROLE_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer MINOR_ROLE_ADMIN role admin to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x498a9dae57f391d8efcc7bb3e7440ad6a25b1261044ef1b555c5484cb9f67659', // MINTER_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer MINTER_ADMIN role admin to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x6cad5c16d973906992d8e1412f4aefeca4ae44220c203bbcd6e8e66e7c717be0', // OPTIMISTIC_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer OPTIMISTIC_ADMIN role admin to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0xc307c44629779eb8fc0b85f224c3d22f5876a6c84de0ee42d481eb7814f0d3a8', // ORACLE_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer ORACLE_ADMIN role admin from GOVERNOR to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x23970cab3799b6876df4319661e6c03cc45bd59628799d92e988dd8cbdc90e31', // TRIBAL_CHIEF_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer TRIBAL_CHIEF_ADMIN role admin from GOVERNOR to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0xdf6ce05acd28d71e96472375ef55c4a692f167af3ccda9500570f7373c1ba22c', // PCV_GUARDIAN_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer PCV_GUARDIAN_ADMIN role admin from GOVERNOR to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0xb02f76effb323167cad756bb4f3edbfb9d9291f9bfcdc72c9ceea005562f32eb', // METAGOVERNANCE_VOTE_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer METAGOVERNANCE_VOTE_ADMIN role admin from GOVERNOR to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0xa100760f521bbb2848bef0b72ea29301f6a6b0605d004243f0eea2b1c359f7c7', // METAGOVERNANCE_TOKEN_STAKING
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer METAGOVERNANCE_TOKEN_STAKING role admin from GOVERNOR to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x3bee38c33241595abfefa470fd75bfa1cc9cb01eff02cf6732fd2baea4ea4241', // METAGOVERNANCE_GAUGE_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer METAGOVERNANCE_GAUGE_ADMIN role admin from GOVERNOR to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x471cfe1a44bf1b786db7d7104d51e6728ed7b90a35394ad7cc424adf8ed16816', // LBP_SWAP_ROLE
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer LBP_SWAP_ROLE role admin from GOVERNOR to ROLE_ADMIN'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x2d46c62aa6fbc9b550f22e00476aebb90f4ea69cd492a68db4d444217763330d', // VOTIUM_ROLE
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Transfer VOTIUM_ROLE role admin from GOVERNOR to ROLE_ADMIN'
    },
    //////// Create new roles for the Tribal Council to manage /////////
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x7f85477db6c0857f19179a2b3846a7ddbc64caeeb3a02ef34771b82f5ab926e4', // FUSE_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Create FUSE_ADMIN role, assigning ROLE_ADMIN as the role admin'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x4a4f013dcba6b46103e81e286782135c0dda175e82564e878ae500734753e55e', // FEI_MINT_ADMIN
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Create FEI_MINT_ADMIN role, assigning ROLE_ADMIN as the role admin'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed', // PCV_MINOR_PARAM_ROLE
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Create PCV_MINOR_PARAM_ROLE role, assigning ROLE_ADMIN as the role admin'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x1749ca1ca3564d20da6efea465c2a5ae869a9e4b006da7035e688beb14d704e0', // PSM_ADMIN_ROLE
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Create PSM_ADMIN_ROLE role, assigning ROLE_ADMIN as the role admin'
    },
    {
      target: 'core',
      values: '0',
      method: 'createRole(bytes32,bytes32)',
      arguments: [
        '0x64bdfa4de883e5fe4519e80a554fbf0d63c0f6271ac8b89b18edcc9ef151ad60', // MINOR_PARAM_ROLE
        '0x2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096' // ROLE_ADMIN
      ],
      description: 'Create MINOR_PARAM_ROLE role, assigning ROLE_ADMIN as the role admin'
    },
    ///////   Set the relevant contract admins to the newly created roles //////////
    // FUSE_ADMIN
    {
      target: 'fuseGuardian',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x7f85477db6c0857f19179a2b3846a7ddbc64caeeb3a02ef34771b82f5ab926e4' // FUSE_ADMIN
      ],
      description: 'Set the contract admin of the FuseGuardian to be the FUSE_ADMIN'
    },
    // FEI_MINT_ADMIN
    {
      target: 'optimisticMinter',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x4a4f013dcba6b46103e81e286782135c0dda175e82564e878ae500734753e55e' // FEI_MINT_ADMIN
      ],
      description: 'Set the contract admin of the FeiTimedMinter to be the FEI_MINT_ADMIN'
    },
    {
      target: 'pcvEquityMinter',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x4a4f013dcba6b46103e81e286782135c0dda175e82564e878ae500734753e55e' // FEI_MINT_ADMIN
      ],
      description: 'Set the contract admin of the PCV Equity Minter to be the FEI_MINT_ADMIN'
    },
    {
      target: 'indexDelegator', // this is SnapshotDelegatorPCVDeposit
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the indexDelegator to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'ethTokemakPCVDeposit', // TokemakPCVDepositBase
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the ethTokemarkPCVdeposit to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'uniswapPCVDeposit',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the uniswapPCVDeposit to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'daiPSMFeiSkimmer',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the DAI PSM Fei Skimmer to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'lusdPSMFeiSkimmer',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the LUSD PSM Fei Skimmer to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'ethPSMFeiSkimmer',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the ETH PSM Fei Skimmer to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'aaveEthPCVDripController',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the Aave Eth PCV Drip Controller to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'daiPCVDripController',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the DAI PCV Drip Controller to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'lusdPCVDripController',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the LUSDC PCV Drip Controller to be the PCV_MINOR_PARAM_ROLE'
    },
    {
      target: 'compoundEthPCVDripController',
      values: '0',
      method: 'setContractAdminRole(bytes32)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed' // PCV_MINOR_PARAM_ROLE
      ],
      description: 'Set the contract admin of the Compound ETH PCV Drip Controller to be the PCV_MINOR_PARAM_ROLE'
    },
    //////////  Grant the Tribal Council timelock the relevant roles //////////
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x7f85477db6c0857f19179a2b3846a7ddbc64caeeb3a02ef34771b82f5ab926e4', // FUSE_ADMIN
        '{tribalCouncilTimelock}'
      ],
      description: 'Grant TribalCouncil timelock the FUSE_ADMIN role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x4a4f013dcba6b46103e81e286782135c0dda175e82564e878ae500734753e55e', // FEI_MINT_ADMIN
        '{tribalCouncilTimelock}'
      ],
      description: 'Grant TribalCouncil timelock the FEI_MINT_ADMIN role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed', // PCV_MINOR_PARAM_ROLE
        '{tribalCouncilTimelock}'
      ],
      description: 'Grant TribalCouncil timelock the PCV_MINOR_PARAM_ROLE role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0xdf6ce05acd28d71e96472375ef55c4a692f167af3ccda9500570f7373c1ba22c', // PCV_GUARDIAN_ADMIN_ROLE
        '{tribalCouncilTimelock}'
      ],
      description: 'Grant TribalCouncil timelock the PCV_GUARDIAN_ADMIN_ROLE role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0xc307c44629779eb8fc0b85f224c3d22f5876a6c84de0ee42d481eb7814f0d3a8', // ORACLE_ADMIN_ROLE
        '{tribalCouncilTimelock}'
      ],
      description: 'Grant TribalCouncil timelock the ORACLE_ADMIN_ROLE'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x1749ca1ca3564d20da6efea465c2a5ae869a9e4b006da7035e688beb14d704e0', // PSM_ADMIN_ROLE
        '{tribalCouncilTimelock}'
      ],
      description: 'Grant TribalCouncil timelock the PSM_ADMIN_ROLE'
    },
    ////////  Grant contract admin calling contracts the new roles /////////
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed', // PCV_MINOR_PARAM_ROLE
        '{core}'
      ],
      description: 'Grant core the PCV_MINOR_PARAM_ROLE role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed', // PCV_MINOR_PARAM_ROLE
        '{feiDAOTimelock}'
      ],
      description: 'Grant feiDAOtimelock the PCV_MINOR_PARAM_ROLE role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed', // PCV_MINOR_PARAM_ROLE
        '{roleBastion}'
      ],
      description: 'Grant roleBastion the PCV_MINOR_PARAM_ROLE role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed', // PCV_MINOR_PARAM_ROLE
        '{opsOptimisticTimelock}'
      ],
      description: 'Grant opsOptimisticTimelock the PCV_MINOR_PARAM_ROLE role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x46797b318ce8c2d83979760ef100a5c0fdb980de4b574d6142ce4d0afce307ed', // PCV_MINOR_PARAM_ROLE
        '{optimisticTimelock}'
      ],
      description: 'Grant optimisticTimelock the PCV_MINOR_PARAM_ROLE role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x7f85477db6c0857f19179a2b3846a7ddbc64caeeb3a02ef34771b82f5ab926e4', // FUSE_ADMIN
        '{optimisticTimelock}'
      ],
      description: 'Grant optimistic timelock the FUSE_ADMIN role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x7f85477db6c0857f19179a2b3846a7ddbc64caeeb3a02ef34771b82f5ab926e4', // FUSE_ADMIN
        '{tribalChiefSyncV2}'
      ],
      description: 'Grant tribalChiefSyncV2 the FUSE_ADMIN role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x4a4f013dcba6b46103e81e286782135c0dda175e82564e878ae500734753e55e', // FEI_MINT_ADMIN
        '{core}'
      ],
      description: 'Grant core the FEI_MINT_ADMIN role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x4a4f013dcba6b46103e81e286782135c0dda175e82564e878ae500734753e55e', // FEI_MINT_ADMIN
        '{feiDAOTimelock}'
      ],
      description: 'Grant feiDAOTimelock the FEI_MINT_ADMIN role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x4a4f013dcba6b46103e81e286782135c0dda175e82564e878ae500734753e55e', // FEI_MINT_ADMIN
        '{roleBastion}'
      ],
      description: 'Grant roleBastion the FEI_MINT_ADMIN role'
    },
    {
      target: 'core',
      values: '0',
      method: 'grantRole(bytes32,address)',
      arguments: [
        '0x6c9ecf07a5886fd74a8d32f4d3c317a7d5e5b5c7a073a3ab06c217e9ce5288e3', // TOKEMAK_DEPOSIT_ADMIN_ROLE
        '{optimisticTimelock}'
      ],
      description: 'Grant optimisticTimelock the TOKEMAK_DEPOSIT_ADMIN_ROLE role'
    }
  ],
  description: `
    FIP_82b: Create, grant and make the TribalCouncil admin of various access control roles to allow
    it to manage the protocol.

    These roles allow the TribalCouncil to authorise pods with the necessary access control to operate 
    distinct parts of the protocol.
  `
};

export default fip_82b;
