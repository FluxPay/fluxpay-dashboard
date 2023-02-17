import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useSigner, useProvider, useAccount } from 'wagmi'
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { FluxPayABI } from '../ABIs/Fluxpay';
import { fluxpay_address } from '../Addresses';

export default function Home() {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();
  const [daos, setDaos] = useState([]);

  const getRegisteredDaos = async() => {
    const fluxpayContract = new ethers.Contract(fluxpay_address, FluxPayABI, signer || provider);
    let registeredDaos = await fluxpayContract.getDaos();
    console.log(registeredDaos);
    setDaos(registeredDaos);
  }

  useEffect(() => {}, [daos]);

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
    </>
  );
}
