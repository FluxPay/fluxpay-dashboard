import Head from 'next/head'
import Link from 'next/link'
import { useSigner, useProvider, useAccount } from 'wagmi'
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { FluxPayABI } from '../ABIs/Fluxpay';
import { fluxpay_address } from '../Addresses/index';
import * as PushAPI from '@pushprotocol/restapi';

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

  const optout = async () => {
    await PushAPI.channels.unsubscribe({
      signer: signer,
      channelAddress: 'eip155:80001:0x42066368D2b1c06E32e34c8A264a4fe7acE29606', // channel address in CAIP
      userAddress: 'eip155:80001:' + address, // user address in CAIP
      onSuccess: () => {
        console.log('opt out success');
      },
      onError: () => {
        console.error('opt out error');
      },
      env: 'staging',
    });
  };

  const optin = async () => {
    await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: 'eip155:80001:0x42066368D2b1c06E32e34c8A264a4fe7acE29606', // channel address in CAIP
      userAddress: 'eip155:80001:' + address, // user address in CAIP
      onSuccess: () => {
        console.log('opt in success');
      },
      onError: () => {
        console.error('opt in error');
      },
      env: 'staging',
    });
  };

  return (
    <>
      <Head>
        <title>FluxPay</title>
        <meta name="description" content="Simplify your DAO payroll management with Fluxpay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <div className="w-fit flex justify-start items-center p-4 bg-[#8c6dfd] h-[23px] rounded-[10px] mb-8">
          <p className="font-epilogue font-bold text-[15px]">
            Join the Push notification channel!! Never miss out on any update 😊{' '}
            <button className="bg-gray-200 rounded-[10px] p-1 mr-10 ml-36" onClick={optin}>
              Opt-In
            </button>{' '}
            <button className="bg-gray-200 rounded-[10px] p-1 mr-14" onClick={optout}>
              Opt-Out
            </button>
          </p>
        </div>
        <div className="w-full flex my-24 p-4 justify-between items-center bg-gray-200 border-2 border-gray-400 rounded-lg">
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
