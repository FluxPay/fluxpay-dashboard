import Head from 'next/head';
import Image from 'next/image';
import styles from '/styles/Home.module.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { address, ABI } from '../constant/index.js';
import { superToken } from '../components/super.jsx';

const fn = async () => {
  await superToken();
};
export default function Home() {
  return (
    <>
      <Head>
        <title>FLuxPay</title>
        <meta name="description" content="Simplify your DAO payroll management with Fluxpay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={fn}>Super </button>
        <p>!</p>
      </main>
    </>
  );
}
