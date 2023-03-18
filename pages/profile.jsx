import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useSigner, useProvider, useAccount } from 'wagmi';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import { FluxPayABI } from '../ABIs/Fluxpay';
import { Fluxpay_address } from '../Addresses';

export default function Profile() {
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();
  const [daos, setDaos] = useState([]);

  const getMyDaos = async () => {
    const fluxpayContract = new ethers.Contract(Fluxpay_address, FluxPayABI, signer || provider);
    let myDaos = await fluxpayContract.getDaos();
    console.log(myDaos);
    setDaos(myDaos);
  };

  useEffect(() => {
    getMyDaos();
  }, []);

  return <div className='my-24'>Profile {daos}</div>;
}
