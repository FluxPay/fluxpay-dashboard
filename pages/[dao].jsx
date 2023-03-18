import { useRouter } from "next/router"
import { useSigner, useProvider, useAccount, useContract, useContractWrite, useContractRead } from 'wagmi'
import { FluxPayABI } from '../ABIs/Fluxpay';
import { Fluxpay_address, Pool_address, PoolMaster_address } from '../Addresses';
import { BigNumber, ethers } from 'ethers';
import { useState, useEffect } from "react";
import { PoolABI } from "../ABIs/PoolABI";
import { PoolMasterABI } from "../ABIs/PoolMasterABI";
import Moralis  from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import { Framework } from "@superfluid-finance/sdk-core";
import { Approve_ABI } from "../ABIs/Approve";

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
  const [tokenID, setTokenID] = useState('')
  const [flowRate, setFlowRate] = useState('')
  const [flowRateDisplay, setFlowRateDisplay] = useState('')
  const [tPoolAddress, setTPoolAddress] = useState('')

  const checkAdmin = (tempdao) => {
    if (tempdao.owner === address) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }

  const fluxpayContract = new ethers.Contract(Fluxpay_address, FluxPayABI, signer || provider);
  const poolMasterContract = new ethers.Contract(PoolMaster_address, PoolMasterABI, signer || provider);
  
  const getRegisteredDaos = async () => {
    let registeredDaos = await fluxpayContract.getDaos();
    setDaos(registeredDaos);
  }

  const createPayroll = async () => {
    let tempPoolAddress;

    let tx = await poolMasterContract.createPool(curDao.title, ethers.utils.parseUnits(flow, 18), nftAddress, curDao.currency);
    console.log(tx);
    console.log(tx.toString());
    poolMasterContract.on('PoolCreated', (poolName, senderAddress, poolAddress, nftAddress, currency) => {
      console.log(poolName, senderAddress, poolAddress, nftAddress, currency);
      tempPoolAddress = poolAddress;
      setPooAddrs(tempPoolAddress);
    })
  }

  const setPooAddrs = async (tempPoolAddress) => {
    let setPoolAddress = await fluxpayContract.setPoolAddress(curDaoIndex, tempPoolAddress);
    console.log(setPoolAddress);
  }
  
  const fillPoolAddress = async (flowRate) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
  
    const signer = provider.getSigner();
  
    const chainId = await window.ethereum.request({ method: "eth_chainId" });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider
    });
  
    const superSigner = sf.createSigner({ signer: signer });
  
    console.log(signer);
    console.log(await superSigner.getAddress());
  
    let daoCurrency = await sf.loadSuperToken(curDao.currency);
    setTPoolAddress(curDao.poolAddress);
    
    try {
      const createFlowOperation = daoCurrency.createFlow({
        sender: await superSigner.getAddress(),
        receiver: tPoolAddress,
        flowRate: flowRate
        // userData?: string
      });
  
      console.log(createFlowOperation);
      console.log("Creating your stream...");
  
      const result = await createFlowOperation.exec(superSigner);
      console.log(result);
  
      console.log(
        `Congrats - you've just created a money stream!
      `
      );
    } catch (error) {
      console.log(
        "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
      );
      console.error(error);
    }
  }

  const handleFlowRateChange = (e) => {
    setFlowRate(() => (e));
    let newFlowRateDisplay = calculateFlowRate(e);
    setFlowRateDisplay(newFlowRateDisplay.toString());
  };

  function calculateFlowRate(amount) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amount) === "number") {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = ethers.BigNumber.from(amount);
      const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
      const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }

  const topUpPool = async (flow) => {
    const poolContract = new ethers.Contract(curDao.poolAddress, PoolABI, signer || provider);

    const tempAmount = ethers.utils.parseEther(String(flow));
    const tokenContract = new ethers.Contract(curDao.currency, Approve_ABI, signer || provider);
    const approveTx = await tokenContract.approve(curDao.poolAddress, tempAmount);
    await approveTx.wait();

    let tx = await poolContract.topUpPool(Number(flow), {
      gasLimit: 5000000,
    });
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
      console.log(tempDao[0].poolAddress)
    }
  }, [daos])

  useEffect(() => {
    if (address && curDao) checkAdmin(curDao)
  }, [address])

  const claim = async () => {
    const poolContract = new ethers.Contract(curDao.poolAddress, PoolABI, signer || provider)

    let tx = await poolContract.claimStream(Number(tokenID), {
      gasLimit: 5000000,
    })
    console.log(tx)

  }

  const activatePool = async ()=>  {
    const poolContract = new ethers.Contract(curDao.poolAddress, PoolABI, signer || provider, {
      gasLimit: 5000000,
    });

    let tx = await poolContract.activatePool();
    console.log(tx);
  }

  return (
    <section>
      {curDao && (
        <div className="w-full max-w-screen-lg  my-24 mx-auto px-8 border-2 rounded-md bg-white shadow-md">
          <div className="w-full flex justify-between items-center py-2">
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
              {curDao.poolAddress == '0x0000000000000000000000000000000000000000' && (
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
              {curDao.poolAddress !== '0x0000000000000000000000000000000000000000' && <p className="">Pool Address: {curDao.poolAddress}</p>}
              {curDao.poolAddress !== '0x0000000000000000000000000000000000000000' && (
                <div className="flex flex-col space-y-2">
                  <button className="btn" onClick={()=>activatePool()}>Activate Pool</button>
                  <label htmlFor="flow">Flow Rate</label>
                  <input className="border-2 border-gray-200 p-2" id="flow" type="text" placeholder="Flow Rate/second" value={flowRate} onChange={e => handleFlowRateChange(e.target.value)} required/>
                  <button className="btn" onClick={()=>fillPoolAddress(flowRate)}>Create flow</button>
                  <div className="my-2">
                    <p>Your flow will be equal to:</p>
                    <p>
                      <b>{flowRateDisplay !== " " ? flowRateDisplay : 0}</b> Currency/month
                    </p>
                  </div>
                </div>
              )}
              </div>
          ) : (
            <div className="w-full my-8">
              <div className="flex flex-col space-y-2">
                <label htmlFor="tokenID">Token ID</label>
                <input className="border-2 border-gray-200 p-2" id="tokenID" type="text" placeholder="Enter Token ID" value={tokenID} onChange={e => setTokenID(e.target.value)} required/>
              </div>
              <button className="btn my-4" onClick={claim}>Claim Stream</button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
