export const PoolABI = [{"inputs":[],"name":"BulkClaimsPaused","type":"error"},{"inputs":[{"internalType":"address","name":"holder","type":"address"}],"name":"HolderStreamsNotFound","type":"error"},{"inputs":[],"name":"IneligibleClaim","type":"error"},{"inputs":[{"internalType":"address","name":"terminator","type":"address"}],"name":"NoEmergency","type":"error"},{"inputs":[{"internalType":"address","name":"terminator","type":"address"}],"name":"NotHost","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NotOwnerOfNFT","type":"error"},{"inputs":[],"name":"NotTapCreator","type":"error"},{"inputs":[{"internalType":"int96","name":"ratePerNFT","type":"int96"}],"name":"SameClaimRate","type":"error"},{"inputs":[{"internalType":"int96","name":"ratePerNFT","type":"int96"}],"name":"SameTapRate","type":"error"},{"inputs":[{"internalType":"address","name":"prevHolder","type":"address"}],"name":"StreamAdjustmentFailedInReinstate","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"StreamAlreadyClaimed","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"StreamNotFound","type":"error"},{"inputs":[{"internalType":"address","name":"prevHolder","type":"address"},{"internalType":"address","name":"currHolder","type":"address"}],"name":"StreamsAdjustmentsFailed","type":"error"},{"inputs":[{"internalType":"address","name":"prevHolder","type":"address"}],"name":"StreamsAlreadyReinstated","type":"error"},{"inputs":[],"name":"TapActive","type":"error"},{"inputs":[{"internalType":"uint256","name":"currTapBalance","type":"uint256"},{"internalType":"uint256","name":"reqTapBalance","type":"uint256"}],"name":"TapBalanceInsufficient","type":"error"},{"inputs":[],"name":"TapExists","type":"error"},{"inputs":[],"name":"TapInactive","type":"error"},{"inputs":[{"internalType":"uint256","name":"remainingAmount","type":"uint256"},{"internalType":"uint256","name":"minAmountRequried","type":"uint256"}],"name":"TapMinAmountLimit","type":"error"},{"inputs":[],"name":"TapNotFound","type":"error"},{"inputs":[],"name":"TransferFailed","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"terminator","type":"address"}],"name":"WrongStreamCloseAttempt","type":"error"},{"inputs":[],"name":"ZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"}],"name":"EmergencyCloseInitiated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"StreamClaimedById","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"int96","name":"oldRatePerNFT","type":"int96"},{"indexed":false,"internalType":"int96","name":"newRatePerNFT","type":"int96"}],"name":"StreamsAdjusted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimant","type":"address"},{"indexed":false,"internalType":"int96","name":"oldStreamRate","type":"int96"},{"indexed":false,"internalType":"int96","name":"newStreamRate","type":"int96"}],"name":"StreamsClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"int96","name":"numStreams","type":"int96"},{"indexed":false,"internalType":"int96","name":"newOutStreamRate","type":"int96"},{"indexed":false,"internalType":"int96","name":"ratePerNFT","type":"int96"}],"name":"StreamsReinstated","type":"event"},{"anonymous":false,"inputs":[],"name":"TapActivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":true,"internalType":"address","name":"nft","type":"address"},{"indexed":true,"internalType":"address","name":"superToken","type":"address"},{"indexed":false,"internalType":"uint96","name":"ratePerNFT","type":"uint96"}],"name":"TapCreated","type":"event"},{"anonymous":false,"inputs":[],"name":"TapDeactivated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"streamToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"drainAmount","type":"uint256"}],"name":"TapDrained","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int96","name":"oldRatePerNFT","type":"int96"},{"indexed":false,"internalType":"int96","name":"newRatePerNFT","type":"int96"}],"name":"TapRateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"superToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TapToppedUp","type":"event"},{"inputs":[],"name":"CREATOR","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"HOST","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STREAM_TOKEN","outputs":[{"internalType":"contract ISuperToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"activateTap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"active","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"adjustCurrentStreams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"afterAgreementCreated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"_agreementData","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"_ctx","type":"bytes"}],"name":"afterAgreementTerminated","outputs":[{"internalType":"bytes","name":"_newCtx","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"afterAgreementUpdated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeAgreementCreated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeAgreementTerminated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract ISuperToken","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeAgreementUpdated","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint96","name":"_newRatePerNFT","type":"uint96"}],"name":"changeRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimStream","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"closeStream","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deactivateTap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"drainTap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"emergencyCloseStreams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"address","name":"_host","type":"address"},{"internalType":"address","name":"_creator","type":"address"},{"internalType":"uint96","name":"_ratePerNFT","type":"uint96"},{"internalType":"contract IcfaV1Forwarder","name":"_cfaV1Forwarder","type":"address"},{"internalType":"contract IERC721","name":"_nft","type":"address"},{"internalType":"contract ISuperToken","name":"_streamToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isCritical","outputs":[{"internalType":"bool","name":"_status","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ratePerNFT","outputs":[{"internalType":"int96","name":"","type":"int96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_prevHolder","type":"address"}],"name":"reinstateStreams","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdHolders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"topUpTap","outputs":[],"stateMutability":"nonpayable","type":"function"}];