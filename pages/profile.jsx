import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useSigner, useProvider, useAccount } from 'wagmi'
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';


export default function Profile(){
  const { data: signer } = useSigner();
  const provider = useProvider();
  const { address } = useAccount();
  const [daos, setDaos] = useState([]);

  return (
    <div>Profile</div>
  )
}