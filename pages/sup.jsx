import { ethers } from 'ethers';
import { super_address } from '../Addresses/index.js';
import { SuperTokenWrapperABI } from '../ABIs/SuperTokenWrapper.js';
import { useAccount, useSigner, useProvider } from 'wagmi';

function sup() {
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();

  const { data: signer } = useSigner();
  const provider = useProvider();

  const mint = async () => {
    console.log(signer);
    console.log(provider);

    const contract = new ethers.Contract(super_address, SuperTokenWrapperABI, signer || provider || undefined);

    console.log(contract);
    const tx = await contract.createERC20Wrapper(
      '0xa177753Ad7b2847142631e76C65888c5a1390D17',
      1,
      'Super fluxpay',
      'FXPx'
    );
    await tx.wait();
    console.log(tx);
  };

  return (
    <div>
      <button onClick={mint}>Super</button>
    </div>
  );
}

export default sup;
