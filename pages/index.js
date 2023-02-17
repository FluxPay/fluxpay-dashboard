import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
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
