export const PoolMasterABI = [{"inputs":[{"internalType":"contract IcfaV1Forwarder","name":"_cfaV1Forwarder","type":"address"},{"internalType":"contract ISuperfluid","name":"_host","type":"address"},{"internalType":"address","name":"_implementation","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"SameImplementationAddress","type":"error"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"TapExists","type":"error"},{"inputs":[{"internalType":"address","name":"superToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TransferFailed","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldImplementation","type":"address"},{"indexed":false,"internalType":"address","name":"newImplementation","type":"address"}],"name":"ImplementationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"address","name":"tap","type":"address"},{"indexed":true,"internalType":"address","name":"nft","type":"address"},{"indexed":true,"internalType":"address","name":"superToken","type":"address"}],"name":"TapCreated","type":"event"},{"inputs":[],"name":"CFA_V1_FORWARDER","outputs":[{"internalType":"contract IcfaV1Forwarder","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HOST","outputs":[{"internalType":"contract ISuperfluid","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"Taps","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint96","name":"_ratePerNFT","type":"uint96"},{"internalType":"contract IERC721","name":"_nft","type":"address"},{"internalType":"contract ISuperToken","name":"_streamToken","type":"address"}],"name":"createTap","outputs":[{"internalType":"address","name":"_newTap","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newImplementation","type":"address"}],"name":"setImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]