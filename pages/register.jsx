import Head from 'next/head'
import {useState} from 'react';
import { useSigner, useProvider, useAccount } from 'wagmi'
import { FluxPayABI } from '../ABIs/Fluxpay';
import { fluxpay_address } from '../Addresses';
import { ethers } from 'ethers';
import * as PushAPI from '@pushprotocol/restapi';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const { data: Psigner } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')
  const [currency, setCurrency] = useState('0x25963b81595626b807d635544bf4bcbffbb262d8')

  const [loading, setLoading] = useState(false)

  const PK = (process.env.NEXT_PUBLIC_PK).toString(); // channel private key
  const Pkey = `0x${PK}`;
  const signer = new ethers.Wallet(Pkey);

  const sendNotification = async () => {
    try {
      console.log('Sending notification...');
      const apiResponse = await PushAPI.payloads.sendNotification({
        signer,
        type: 1, // broadcast
        identityType: 2, // direct payload
        notification: {
          title: `New DAO registered`,
          body: `${name} Created!!`,
        },
        payload: {
          title: `Another DAO registered`,
          body: `${name} created!!`,
          cta: '',
          img: '',
        },
        channel: 'eip155:80001:0x42066368D2b1c06E32e34c8A264a4fe7acE29606', // your channel address
        env: 'staging',
      });

      // apiResponse?.status === 204, if sent successfully!
      console.log('API repsonse: ', apiResponse);
    } catch (err) {
      console.log('Error: ', err);
    }
  };

  const submitForm = async () => {
    try {
      setLoading(true)
      const fluxpayContract = new ethers.Contract(fluxpay_address, FluxPayABI, Psigner || provider);
      console.log('Creating a DAO...');
      let tx = await fluxpayContract.createDao(address, name, desc, image, currency);
      let rx = await tx.wait();
      await sendNotification();
      console.log(rx);
      toast('Successfully created DAO!')
      setLoading(false)
    } catch(err) {
      console.log(err)
      toast('Some error occurred. Please try again later.')
      setLoading(false)
    }
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
          {!loading && <button className="btn my-8" onClick={submitForm}>Register</button>}
          {loading && <Spinner />}
        </div>
      </section>
    </>
  )
}
