import { useRouter } from "next/router"
import { useSigner, useProvider, useAccount } from 'wagmi'
import { FluxPayABI } from '../ABIs/Fluxpay';
import { fluxpay_address, Pool_address, PoolMaster_address } from '../Addresses';
import { ethers } from 'ethers';
import { useState, useEffect } from "react";
import { PoolABI } from "../ABIs/PoolABI";
import { PoolMasterABI } from "../ABIs/PoolMasterABI";
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import { Framework } from "@superfluid-finance/sdk-core";

export default function Dao() {
  const router = useRouter()
  const { dao: daoslug } = router.query

  const { data: signer } = useSigner();
  const provider = useProvider();
  const [daos, setDaos] = useState([]);
  const [curDao, setCurDao] = useState(null)
const [curDaoIndex, setCurDaoIndex] = useState(0)
  const { address } = useAccount();
  const [isAdmin, setIsAdmin] = useState(false)

  const [flow, setFlow] = useState('')
  const [nftAddress, setNftAddress] = useState('')

  const checkAdmin = (tempdao) => {
    if (tempdao.owner === address) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }

  const fluxpayContract = new ethers.Contract(fluxpay_address, FluxPayABI, signer || provider);
  const poolMasterContract = new ethers.Contract(PoolMaster_address, PoolMasterABI, signer || provider);
  
  const getRegisteredDaos = async () => {
    let registeredDaos = await fluxpayContract.getDaos();
    setDaos(registeredDaos);
  }

  const createPayroll = async () => {
    let tempPoolAddress;

    let tx = await poolMasterContract.createTap(curDao.title, ethers.utils.parseUnits(flow, 18), nftAddress, curDao.currency);
    console.log(tx);
    console.log(tx.toString());
    poolMasterContract.on('TapCreated', (poolName, senderAddress, poolAddress, nftAddress, currency) => {
      console.log(poolName, senderAddress, poolAddress, nftAddress, currency);
      tempPoolAddress = poolAddress;
    })

    let setPoolAddress = await fluxpayContract.setPoolAddress(curDaoIndex, tempPoolAddress);
    console.log(setPoolAddress);
  }

  

  const createIDA = async () => {
    try {
        const chain = EvmChain.MUMBAI;

        const address = nftAddress;

        await Moralis.start({
          apiKey: process.env.NEXT_PUBLIC_MORALIS.toString(), // Application id from moralis.io
        });

        const response = await Moralis.EvmApi.nft.getNFTOwners({
            address,
            chain,
        });

        console.log(response?.result);
    } catch (e) {
        console.error(e);
    }

  }

  
  
  const fillPoolAddress = async (flow) => {
    const sf = await Framework.create({
        chainId: 80001,
        provider:provider
    });
    let daoCurrency = await sf.loadSuperToken("0x25963b81595626b807D635544bf4BCBffbb262D8");
    let flowOp = daoCurrency.createFlow({
      address,
      receiver: curDao.poolAddress,
      flowRate: ethers.utils.parseUnits(flow, 18)
    });

    await flowOp.exec(signer);
  }

  const topUpPool = async (flow) => {
    const poolContract = new ethers.Contract(curDao.poolAddress, PoolABI, signer || provider);

    let tx = await poolContract.topUpTap(Number(flow));
    console.log(tx);
  }

  useEffect(() => {
    getRegisteredDaos()
  }, [])

  useEffect(() => {
    if (daos.length > 0) {
      let tempDao = daos.filter((dao, index) => {
        if (dao.title.toLowerCase().split(' ').join('-') === daoslug){
          // dao.index = index
          setCurDaoIndex(index)
          return true
        }
      })
      setCurDao(tempDao[0])
      checkAdmin(tempDao[0])
    }
  }, [daos])

  useEffect(() => {
    if (address && curDao) checkAdmin(curDao)
  }, [address])

  return (
    <section>
      {curDao && (
        <div className="w-full max-w-screen-lg  my-24 mx-auto px-8 border-2 rounded-md bg-white shadow-md">
          <div className="w-full flex justify-between items-center">
            <div className="w-[25%] ">
              <img className="w-full h-full object-cover" src={curDao.image} alt="dao"/>
            </div>
          <div className="w-[70%]">
            <h1 className="text-xl font-bold">{curDao.title}</h1>
            <p className="text-lg my-2">{curDao.description}</p>
          </div>
          </div>
          {isAdmin ? (
            <div className="w-full flex flex-col my-8 space-y-4">
              {!curDao.poolAddress && (
                <div className="w-full flex flex-col my-8 space-y-4">
                  <h2 className="text-fgreen text-2xl font-bold">Start Payroll</h2>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="flow">Flow Rate</label>
                    <input className="border-2 border-gray-200 p-2" id="flow" type="text" placeholder="Flow Rate/second" value={flow} onChange={e => setFlow(e.target.value)} required/>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="nft">NFT Address</label>
                    <input className="border-2 border-gray-200 p-2" id="nft" type="text" placeholder="NFT Collection Address" value={nftAddress} onChange={e => setNftAddress(e.target.value)} required/>
                  </div>
                  <button className="btn" onClick={createPayroll}>Create</button>
                </div>
              )}
              {curDao.poolAddress && <p className="">Pool Address: {curDao.poolAddress}</p>}
              {curDao.poolAddress && (
                <div className="flex flex-col space-y-2">
                  <label htmlFor="flow">Flow Rate</label>
                  <input className="border-2 border-gray-200 p-2" id="flow" type="text" placeholder="Flow Rate/second" value={flow} onChange={e => setFlow(e.target.value)} required/>
                  <button className="btn" onClick={()=>fillPoolAddress(flow)}>Create flow</button>
                  <button className="btn" onClick={()=>topUpPool(flow)}>Top Up Pool</button>
                </div>
              )}
              </div>
            ) : null}
        </div>
      )}
    </section>
  )
}
