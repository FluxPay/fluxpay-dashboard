import { ethers } from 'ethers';
import { super_address } from '../Addresses/index.js';
import { SuperTokenWrapperABI } from '../ABIs/SuperTokenWrapper.js';
import { useAccount, useSigner, useProvider } from 'wagmi';
import { ERC20ABI } from '../ABIs/ERC20ABI1.js';

function sup() {
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();

  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();

  const mint = async () => {
    console.log(signer);
    console.log(provider);

    const SuperTokenFactoryABI = [
      'function createERC20Wrapper(address underlyingToken, uint8 upgradability, string calldata name, string calldata symbol) external override returns (address superToken)',
    ];
    const SuperTokenFactoryAddr = '0x200657E2f123761662567A1744f9ACAe50dF47E6'; // NOTE: this is the address of the proxy for polygon mainnet - get your addr from here https://docs.superfluid.finance/superfluid/developers/super-tokens/deployment#using-a-block-explorer-to-deploy-your-wrapper
    const stfInstance = new ethers.Contract(SuperTokenFactoryAddr, SuperTokenFactoryABI, signer);

    const superTokenSymbol = 'FXPx';
    const superTokenName = 'Super Fluxpay Token';
    const underlyingTokenAddr = '0xa177753Ad7b2847142631e76C65888c5a1390D17'; // NOTE: change this to your underlying token's addr

    console.log('Creating the wrapper...');
    let tx = await stfInstance.createERC20Wrapper(underlyingTokenAddr, 1, superTokenName, superTokenSymbol);
    let rx = await tx.wait();
    console.log(rx);
    console.log(rx.events[2].address);
  };

  return (
    <div>
      <button onClick={mint} className="my-24">
        Super
      </button>
    </div>
  );
}

export default sup;
