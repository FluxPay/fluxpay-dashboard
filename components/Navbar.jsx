import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import Image from 'next/image';
import Notifs from './Notifs';
import {useState} from 'react';
import bell from '../images/bell.svg'

const Navbar = () => {
  const [notifs, setNotifs] = useState(false)
  return (
    <div className="fixed top-0 flex flex-row w-screen h-fit py-4 px-[10%] justify-between items-center text-primary shadow-md bg-white">
      <Link href="/" className="text-xl font-bold">
        FluxPay
      </Link>
      <div className="flex flex-row space-x-4">
        <Image src={bell} width={25} height={25} className="cursor-pointer" alt="notifs bell" onClick={() => setNotifs(!notifs)}/>
        {notifs && <Notifs />}
        <ConnectButton />
      </div>
    </div>
  );
};
export default Navbar;
