import { Framework } from '@superfluid-finance/sdk-core';
import { ethers } from 'ethers';
// require('dotenv').config({ path: '.env' });

const GetSF = async () => {
  console.log('process.env.mumbai_rpc_url', process.env.NEXT_PUBLIC_MUMBAI);
  let rpc = process.env.NEXT_PUBLIC_MUMBAI;
  rpc.toString();
  // const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_MUMBAI);
  const provider = new ethers.providers.JsonRpcProvider(rpc);
  const network = await provider.getNetwork();

  const sf = await Framework.create({
    chainId: network?.chainId,
    provider: provider,
  });

  return sf;
};

export default GetSF;
