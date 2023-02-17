import { useRouter } from "next/router"
import { useSigner, useProvider, useAccount } from 'wagmi'
import { FluxPayABI } from '../ABIs/Fluxpay';
import { fluxpay_address } from '../Addresses';
import { ethers } from 'ethers';
import { useState, useEffect } from "react";

export default function Dao() {
  const router = useRouter()
  const { dao: daoslug } = router.query

  const { data: signer } = useSigner();
  const provider = useProvider();
  const [daos, setDaos] = useState([]);
  const [curDao, setCurDao] = useState(null)

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

  const getRegisteredDaos = async () => {
    const fluxpayContract = new ethers.Contract(fluxpay_address, FluxPayABI, signer || provider);
    let registeredDaos = await fluxpayContract.getDaos();
    setDaos(registeredDaos);
  }

  useEffect(() => {
    getRegisteredDaos()
  }, [])

  useEffect(() => {
    if (daos.length > 0) {
      let tempDao = daos.filter(dao => dao.title.toLowerCase().split(' ').join('-') === daoslug)
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
                <h2 className="text-fgreen text-2xl font-bold">Start Payroll</h2>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="flow">Flow Rate</label>
                  <input className="border-2 border-gray-200 p-2" id="flow" type="text" placeholder="Flow Rate/second" value={flow} onChange={e => setFlow(e.target.value)} required/>
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="nft">NFT Address</label>
                  <input className="border-2 border-gray-200 p-2" id="nft" type="text" placeholder="NFT Collection Address" value={nftAddress} onChange={e => setNftAddress(e.target.value)} required/>
                </div>
                <button className="btn">Create</button>
              </div>
            ) : null
          }
        </div>
      )}
    </section>
  )
}
