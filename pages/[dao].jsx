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

  return (
    <section>
      {curDao && (
        <div className="w-full flex justify-between items-center my-24 px-8 border-2 rounded-md bg-white shadow-md">
          <div className="w-[25%]">
            <img className="w-full h-full object-cover" src={curDao.image} alt="dao"/>
          </div>
          <p className="w-[70%] text-lg">{curDao.description}</p>
        </div>
      )}
    </section>
  )
}
