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

    const super_contract = new ethers.Contract(super_address, SuperTokenWrapperABI, signer);

    console.log(super_contract);
    const tx = await super_contract.createERC20Wrapper(
      '0xa177753Ad7b2847142631e76C65888c5a1390D17',
      1,
      'Super fluxpay',
      'FXPx'
    );

    // const cont = new ethers.Contract('0x88271d333C72e51516B67f5567c728E702b3eeE8', ERC20ABI, signer);

    // console.log(cont);
    // await cont.mint(ethers.utils.getAddress(address || '0x0'), ethers.utils.parseEther('20' || '0'));

    // await tx.wait();
    // console.log(tx);
  };

  return (
    <div>
      <button onClick={mint}>Super</button>
    </div>
  );
}

export default sup;
