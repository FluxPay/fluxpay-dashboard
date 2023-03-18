export const PoolABI = [
  {
    "type": "error",
    "name": "BulkClaimsPaused",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "HolderStreamsNotFound",
    "inputs": [
      {
        "type": "address",
        "name": "holder",
        "internalType": "address"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "IneligibleClaim",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NoEmergency",
    "inputs": [
      {
        "type": "address",
        "name": "terminator",
        "internalType": "address"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotHost",
    "inputs": [
      {
        "type": "address",
        "name": "terminator",
        "internalType": "address"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotOwnerOfNFT",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "NotPoolCreator",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "PoolActive",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "PoolBalanceInsufficient",
    "inputs": [
      {
        "type": "uint256",
        "name": "currPoolBalance",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "reqPoolBalance",
        "internalType": "uint256"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "PoolExists",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "PoolInactive",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "PoolMinAmountLimit",
    "inputs": [
      {
        "type": "uint256",
        "name": "remainingAmount",
        "internalType": "uint256"
      },
      {
        "type": "uint256",
        "name": "minAmountRequried",
        "internalType": "uint256"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "PoolNotFound",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "SameClaimRate",
    "inputs": [
      {
        "type": "int96",
        "name": "ratePerNFT",
        "internalType": "int96"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "SamePoolRate",
    "inputs": [
      {
        "type": "int96",
        "name": "ratePerNFT",
        "internalType": "int96"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "StreamAdjustmentFailedInReinstate",
    "inputs": [
      {
        "type": "address",
        "name": "prevHolder",
        "internalType": "address"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "StreamAlreadyClaimed",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "StreamNotFound",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "StreamsAdjustmentsFailed",
    "inputs": [
      {
        "type": "address",
        "name": "prevHolder",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "currHolder",
        "internalType": "address"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "StreamsAlreadyReinstated",
    "inputs": [
      {
        "type": "address",
        "name": "prevHolder",
        "internalType": "address"
      }
    ],
    "outputs": []
  },
  {
    "type": "error",
    "name": "TransferFailed",
    "inputs": [],
    "outputs": []
  },
  {
    "type": "error",
    "name": "WrongStreamCloseAttempt",
    "inputs": [
      {
        "type": "uint256",
        "name": "tokenId",
        "internalType": "uint256"
      },
      {
        "type": "address",
        "name": "terminator",
        "internalType": "address"
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
    "name": "EmergencyCloseInitiated",
    "inputs": [
      {
        "type": "address",
        "name": "holder",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Initialized",
    "inputs": [
      {
        "type": "uint8",
        "name": "version",
        "indexed": false,
        "internalType": "uint8"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolActivated",
    "inputs": [],
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
        "name": "nft",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "superToken",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint96",
        "name": "ratePerNFT",
        "indexed": false,
        "internalType": "uint96"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolDeactivated",
    "inputs": [],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolDrained",
    "inputs": [
      {
        "type": "address",
        "name": "streamToken",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "drainAmount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolRateChanged",
    "inputs": [
      {
        "type": "int96",
        "name": "oldRatePerNFT",
        "indexed": false,
        "internalType": "int96"
      },
      {
        "type": "int96",
        "name": "newRatePerNFT",
        "indexed": false,
        "internalType": "int96"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolToppedUp",
    "inputs": [
      {
        "type": "address",
        "name": "superToken",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "StreamClaimedById",
    "inputs": [
      {
        "type": "address",
        "name": "claimant",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "uint256",
        "name": "tokenId",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "StreamsAdjusted",
    "inputs": [
      {
        "type": "address",
        "name": "holder",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "int96",
        "name": "oldRatePerNFT",
        "indexed": false,
        "internalType": "int96"
      },
      {
        "type": "int96",
        "name": "newRatePerNFT",
        "indexed": false,
        "internalType": "int96"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "StreamsClaimed",
    "inputs": [
      {
        "type": "address",
        "name": "claimant",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "int96",
        "name": "oldStreamRate",
        "indexed": false,
        "internalType": "int96"
      },
      {
        "type": "int96",
        "name": "newStreamRate",
        "indexed": false,
        "internalType": "int96"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "StreamsReinstated",
    "inputs": [
      {
        "type": "address",
        "name": "holder",
        "indexed": true,
        "internalType": "address"
      },
      {
        "type": "int96",
        "name": "numStreams",
        "indexed": false,
        "internalType": "int96"
      },
      {
        "type": "int96",
        "name": "newOutStreamRate",
        "indexed": false,
        "internalType": "int96"
      },
      {
        "type": "int96",
        "name": "ratePerNFT",
        "indexed": false,
        "internalType": "int96"
      }
    ],
    "outputs": [],
    "anonymous": false
  },
  {
    "type": "function",
    "name": "CREATOR",
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
    "name": "HOST",
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
    "name": "NFT",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract IERC721"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "STREAM_TOKEN",
    "inputs": [],
    "outputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ISuperToken"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "activatePool",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "active",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "adjustCurrentStreams",
    "inputs": [
      {
        "type": "address",
        "name": "_holder",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "afterAgreementCreated",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ISuperToken"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "afterAgreementTerminated",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ISuperToken"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      },
      {
        "type": "bytes",
        "name": "_agreementData",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "_ctx",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "_newCtx",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "afterAgreementUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ISuperToken"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "beforeAgreementCreated",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ISuperToken"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "beforeAgreementTerminated",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ISuperToken"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "beforeAgreementUpdated",
    "inputs": [
      {
        "type": "address",
        "name": "",
        "internalType": "contract ISuperToken"
      },
      {
        "type": "address",
        "name": "",
        "internalType": "address"
      },
      {
        "type": "bytes32",
        "name": "",
        "internalType": "bytes32"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      },
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "outputs": [
      {
        "type": "bytes",
        "name": "",
        "internalType": "bytes"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "changeRate",
    "inputs": [
      {
        "type": "uint96",
        "name": "_newRatePerNFT",
        "internalType": "uint96"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "claimStream",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "closeStream",
    "inputs": [
      {
        "type": "uint256",
        "name": "_tokenId",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deactivatePool",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "drainPool",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "emergencyCloseStreams",
    "inputs": [
      {
        "type": "address",
        "name": "_holder",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      {
        "type": "string",
        "name": "_name",
        "internalType": "string"
      },
      {
        "type": "address",
        "name": "_host",
        "internalType": "address"
      },
      {
        "type": "address",
        "name": "_creator",
        "internalType": "address"
      },
      {
        "type": "uint96",
        "name": "_ratePerNFT",
        "internalType": "uint96"
      },
      {
        "type": "address",
        "name": "_cfaV1Forwarder",
        "internalType": "contract IcfaV1Forwarder"
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
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isCritical",
    "inputs": [],
    "outputs": [
      {
        "type": "bool",
        "name": "_status",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "type": "string",
        "name": "",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "ratePerNFT",
    "inputs": [],
    "outputs": [
      {
        "type": "int96",
        "name": "",
        "internalType": "int96"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "reinstateStreams",
    "inputs": [
      {
        "type": "address",
        "name": "_prevHolder",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "tokenIdHolders",
    "inputs": [
      {
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
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
    "name": "topUpPool",
    "inputs": [
      {
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  }
];