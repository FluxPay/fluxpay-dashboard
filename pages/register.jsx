import Head from 'next/head'
import { useSigner, useProvider } from 'wagmi'
import { FluxPayABI } from '../ABIs/Fluxpay';
import { fluxpay_address } from '../Addresses';

export default function Register() {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();

  const submitForm = async () => {
    
    
    const fluxpayContract = new ethers.Contract(fluxpay_address, FluxPayABI, signer || provider);

    console.log('Creating a DAO...');
    let tx = await fluxpayContract.createDAO();
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
          <input className="border-2 p-2 my-2 rounded-sm" id="name" type="text" placeholder="DAO Name"/>
          <label className="mt-4" htmlFor="description">Description</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="description" type="textarea" placeholder="DAO Description" row="2"/>
          <label className="mt-4" htmlFor="image">Image</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="image" type="text" placeholder="DAO Image URL"/>
          <label className="mt-4" htmlFor="currency">Currency</label>
          <input className="border-2 p-2 my-2 rounded-sm" id="currency" type="text" placeholder="DAO Currency"/>
          <button className="btn my-8">Register</button>
        </div>
      </section>
    </>
  )
}

/* Name, Description, Image url, currency */
