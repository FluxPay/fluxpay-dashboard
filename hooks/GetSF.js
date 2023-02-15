import { Framework } from '@superfluid-finance/sdk-core';
import { ethers } from 'ethers';

const GetSF = async () => {
  let rpc = process.env.NEXT_PUBLIC_MUMBAI;
  rpc.toString();

  const provider = new ethers.providers.JsonRpcProvider(rpc);
  const network = await provider.getNetwork();

  const sf = await Framework.create({
    chainId: network?.chainId,
    provider: provider,
  });

  return sf;
};

export default GetSF;
