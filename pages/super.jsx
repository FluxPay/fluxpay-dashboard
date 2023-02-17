import { ethers } from 'ethers';
import { useAccount, useSigner, useProvider } from 'wagmi';
import { SuperTokenFactoryABI } from '../ABIs/SuperTokenFactoryABI.js';
import {SuperTokenFactoryAddr} from '../Addresses/index';
import Head from 'next/head'
import { useState } from 'react';

export default function Super() {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();

  const [inputAddress, setInputAddress] = useState('')
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [superToken, setSuperToken] = useState('')

  const submitForm = async () => {
    try {
      const stfInstance = new ethers.Contract(SuperTokenFactoryAddr, SuperTokenFactoryABI, signer || provider);

      console.log('Creating the wrapper...');
      let tx = await stfInstance.createERC20Wrapper(inputAddress, 1, name, symbol);
      let rx = await tx.wait();
      setSuperToken(rx.events[2].address)
      console.log(rx);
      console.log(rx.events[2].address);
    } catch(err) {
      console.log(err)
    }
  };

  return (
    <>
      <Head>
        <title>FluxPay | Super Token</title>
        <meta name="description" content="Simplify your DAO payroll management with Fluxpay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="my-24">
        <div className="w-1/2 p-8 mx-auto flex flex-col shadow-lg border-2 border-gray-100">
          <label className="mt-4" htmlFor="name">Address</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="name" type="text" placeholder="Enter address" value={inputAddress} onChange={e => setInputAddress(e.target.value)}/>
          <label className="mt-4" htmlFor="description">Name</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="description" type="textarea" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)}/>
          <label className="mt-4" htmlFor="image">Symbol</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="currency" type="text" placeholder="Enter symbol" value={symbol} onChange={e => setSymbol(e.target.value)}/>
          <button className="btn my-8" onClick={submitForm}>Create Super Token</button>
          {superToken && (
            <div className="w-full flex flex-col text-fgreen text-lg items-center">
              <p>Successfully created Super Token!</p>
              <p className="font-bold">{superToken}</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
