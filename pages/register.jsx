import Head from 'next/head'
import {useState} from 'react';
import { useSigner, useProvider, useAccount } from 'wagmi'
import { FluxPayABI } from '../ABIs/Fluxpay';
import { fluxpay_address } from '../Addresses';
import { ethers } from 'ethers';

export default function Register() {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')
  const [currency, setCurrency] = useState('0x25963b81595626b807d635544bf4bcbffbb262d8')

  const submitForm = async () => {
    const fluxpayContract = new ethers.Contract(fluxpay_address, FluxPayABI, signer || provider);
    console.log('Creating a DAO...');
    let tx = await fluxpayContract.createDao(address, name, desc, image, currency);
    let rx = await tx.wait();
    console.log(rx);
  };

  return (
    <>
      <Head>
        <title>FluxPay | Register</title>
        <meta name="description" content="Simplify your DAO payroll management with Fluxpay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="my-24">
        <div className="w-1/2 p-8 mx-auto flex flex-col shadow-lg border-2 border-gray-100">
          <label className="mt-4" htmlFor="name">Name</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="name" type="text" placeholder="DAO Name" value={name} onChange={e => setName(e.target.value)}/>
          <label className="mt-4" htmlFor="description">Description</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="description" type="textarea" placeholder="DAO Description" value={desc} onChange={e => setDesc(e.target.value)}/>
          <label className="mt-4" htmlFor="image">Image</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="image" type="text" placeholder="DAO Image URL" value={image} onChange={e => setImage(e.target.value)}/>
          <label className="mt-4" htmlFor="currency">Currency</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="currency" type="text" placeholder="DAO Currency" value={currency} onChange={e => setCurrency(e.target.value)}/>
          <button className="btn my-8" onClick={submitForm}>Register</button>
        </div>
      </section>
    </>
  )
}