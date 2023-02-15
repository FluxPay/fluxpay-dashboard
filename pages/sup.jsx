import { ethers } from 'ethers';
import { address, ABI } from '../constant/index.js';
import { useAccount, useSigner, useProvider } from 'wagmi';

function sup () {
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();

  const { data: signer } = useSigner();
  const provider = useProvider();

  const mint = async () => {
    console.log(signer);
    console.log(provider);
    
    const contract = new ethers.Contract(address, ABI, signer || provider || undefined);

    console.log(contract);
    const tx = await contract.createERC20Wrapper(
      ethers.utils.getAddress('0x1BE3c6c0a4102041f829925cd9cDE156F9Bc7499'),
      1,
      'Super minddao',
      'minddaox'
    );
    await tx.wait();
    console.log(tx);
  };
  // (async () => {
  //   try {
  //     const provider = new ethers.providers.JsonRpcProvider(
  //       'https://capable-special-panorama.ethereum-goerli.discover.quiknode.pro/59592b280a3921431b27c2f89a895ca8b6aa5886/'
  //     );
  //     // const provider = new ethers.providers.JsonRpcProvider(
  //     //   'https://winter-chaotic-layer.ethereum-goerli.discover.quiknode.pro/b0e4d61932defea61575e81f4a8fcce1d2f1c322/'
  //     // );
  //     // provider.connection.headers = { 'x-qn-api-version': 1 };
  //     const heads = await provider.send('qn_getTokenMetadataByContractAddress', {
  //       contract: '0x1BE3c6c0a4102041f829925cd9cDE156F9Bc7499',
  //     });
  //     console.log(heads);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })();
  return (
    <div>
      <button onClick={mint}>Super</button>
    </div>
  );
};

export default sup;