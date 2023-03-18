export const PoolMasterABI = [
  {
    "type": "constructor",
    "name": "",
    "inputs": [
      {
        "type": "address",
        "name": "_cfaV1Forwarder",
        "internalType": "contract IcfaV1Forwarder"
      },
      {
        "type": "address",
        "name": "_host",
        "internalType": "contract ISuperfluid"
      },
      {
        "type": "address",
        "name": "_implementation",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "error",
    "name": "PoolExists",
    "inputs": [
      {
        "type": "string",
        "name": "name",
        "internalType": "string"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "SameImplementationAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferFailed",
    "inputs": [
      {
        "type": "address",
        "name": "superToken",
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "ZeroAddress",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "event",
    "name": "ImplementationChanged",
    "inputs": [
      {
        "type": "address",
        "name": "oldImplementation",
        "indexed": false,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newImplementation",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [
      {
        "type": "address",
        "name": "previousOwner",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "newOwner",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolCreated",
    "inputs": [
      {
        "type": "string",
        "name": "name",
        "indexed": false,
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "creator",
        "indexed": false,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "pool",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "nft",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "superToken",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "CFA_V1_FORWARDER",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract IcfaV1Forwarder"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "HOST",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ISuperfluid"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "Pools",
    "inputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "createPool",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "uint96",
        "name": "_ratePerNFT",
        "internalType": "uint96"
      },
      {
        "type": "address",
        "name": "_nft",
        "internalType": "contract IERC721"
      },
      {
        "type": "address",
        "name": "_streamToken",
        "internalType": "contract ISuperToken"
      }
    ],
    "outputs": [
      {
        "type": "address",
        "name": "_newPool",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "implementation",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "renounceOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setImplementation",
    "inputs": [
      {
        "type": "address",
        "name": "_newImplementation",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferOwnership",
    "inputs": [
      {
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
];