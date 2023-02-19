import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Sidebar({ href }) {
  const router = useRouter()
  const cur = " bg-fgreen text-white"
  console.log(href)
  return (
    <div className="fixed left-0 top-0 bottom-0 flex flex-col justify-center items-center px-1 w-40 font-lg">
      <div className="flex flex-col border-2 border-fgreen rounded-md bg-white">
        <Link href="/" className={"p-2" + (router.pathname === "/" ? cur : "")}>Home</Link>
        <Link href="/wrap" className={"p-2" + (router.pathname === "/wrap" ? cur : "")}>Wrap/Unwrap</Link>
        <Link href="/super" className={"p-2" + (router.pathname === "/super" ? cur : "")}>Super Token</Link>
        <Link href="https://fluxpay-faucet.vercel.app/" className="p-2">Faucet</Link>
      </div>
    </div>
  )
}
