import Head from 'next/head'
import Link from 'next/link'
import { useSigner, useProvider, useAccount } from 'wagmi'
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { FluxPayABI } from '../ABIs/Fluxpay';
import { fluxpay_address } from '../Addresses/index';

export default function Home() {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();
  const [daos, setDaos] = useState([]);

  const getRegisteredDaos = async () => {
    const fluxpayContract = new ethers.Contract(fluxpay_address, FluxPayABI, signer || provider);
    let registeredDaos = await fluxpayContract.getDaos();
    console.log(registeredDaos);
    setDaos(registeredDaos);
  }

  useEffect(() => {
    getRegisteredDaos()
  }, [])

  return (
    <>
      <Head>
        <title>FluxPay</title>
        <meta name="description" content="Simplify your DAO payroll management with Fluxpay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="w-full flex my-24 justify-between items-center">
          <span>Simplify your DAO payroll using Fluxpay</span>
          <Link href="/register" className="btn">Register Now!</Link>
        </div>
      </section>
      <section>
        <div className="w-full flex flex-wrap items-center">
          {daos && daos.map(dao => (
            <Link href={"/" + dao.title.toLowerCase().split(' ').join('-')} className="w-72 flex flex-col border-2 border-grey-100 rounded-md shadow-md cursor-pointer mx-4 my-8">
              <div className="w-full h-48">
                <img className="w-full h-full object-cover" width={200} height={200} src={dao.image} alt="dao"/>
              </div>
              <h2 className="py-4 bg-fgreen text-center text-white text-xl font-bold">
                {dao.title}
              </h2>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
