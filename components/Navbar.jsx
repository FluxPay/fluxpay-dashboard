import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import * as React from 'react';

const Navbar = () => {
  return (
    <div className="flex flex-row w-screen h-fit py-4 px-[10%] justify-between items-center text-primary">
      <Link href="/" className="text-[1.5vmax] font-bold">
        FluxPay
      </Link>
      <div className="flex flex-row ">
        <ConnectButton />
      </div>
    </div>
  );
};
export default Navbar;
