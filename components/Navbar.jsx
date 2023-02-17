import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed top-0 flex flex-row w-screen h-fit py-4 px-[10%] justify-between items-center text-primary shadow-md bg-white">
      <Link href="/" className="text-xl font-bold">
        FluxPay
      </Link>
      <div className="flex flex-row ">
        <ConnectButton />
      </div>
    </div>
  );
};
export default Navbar;
