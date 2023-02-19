import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import GetSF from '../hooks/GetSF';
import { useAccount, useSigner } from 'wagmi';
import Spinner from '../components/Spinner'
import { toast } from 'react-toastify';

const Wrap = (props) => {
  const [amount, setAmount] = useState('');
  const [custom, setCustom] = useState(false)
  const [inputAddress, setInputAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const fxpxAddress = '0x25963b81595626b807d635544bf4bcbffbb262d8'

  const { data: signer } = useSigner();
  const { address } = useAccount();

  const upgrade = async () => {
    try {
      setLoading(true)
      const sf = await GetSF();
      const FXPx = await sf.loadSuperToken(custom ? inputAddress : fxpxAddress);
      const FXP = FXPx?.underlyingToken;
      const approve = FXP.approve({
        receiver: FXPx.address || '0x0',
        amount: ethers.utils.parseEther(amount),
      });
      const apv = await approve.exec(signer);
      await apv.wait();

      const op = FXPx.upgrade({ amount: ethers.utils.parseEther(amount) });
      const res = op.exec(signer);
      setLoading(true)
      toast('Success!')
      console.log(res)
    } catch(err) {
      setLoading(true)
      toast('Failed :(')
    }
  };

  const downgrade = async () => {
    const sf = await GetSF();
    const FXPx = await sf.loadSuperToken(custom ? inputAddress : fxpxAddress);
    const approve = FXPx.approve({
      receiver: FXPx.address || '0x0',
      amount: ethers.utils.parseEther(amount),
    });
    const apv = await approve.exec(signer);
    await apv.wait();
    const op = FXPx.downgrade({ amount: ethers.utils.parseEther(amount) });
    const res = op.exec(signer);
    console.log(res)
  };

  return (
    <section>
      <div className="w-full max-w-screen-sm flex flex-col bg-white rounded-2xl shadow-lg items-center justify-center mx-auto my-36 border-2 border-gray-100 p-8 space-y-8">
        <p className="text-xl font-bold text-primary">Wrap / Unwrap</p>
        <div className="flex w-1/2 border-2 border-gray-200 cursor-pointer">
          <span className={"w-1/2 px-4 py-2 text-center" + (custom ? " bg-white" : " bg-fgreen text-white")} onClick={() => setCustom(false)}>Default</span>
          <span className={"w-1/2 px-4 py-2 text-center" + (!custom ? " bg-white" : " bg-fgreen text-white")} onClick={() => setCustom(true)}>Custom</span>
        </div>
        {custom && <div className="w-3/4 flex justify-between space-x-2">
          <label className="mx-2 text-lg">Address</label>
          <input
            type="text"
            placeholder="0x..."
            value={inputAddress}
            onChange={e => setInputAddress(e.target.value)}
          />
        </div>}
        <div className="w-3/4 flex justify-between space-x-2">
          <label className="mx-2 text-lg">Enter amount</label>
          <input
            type="text"
            placeholder="0.01"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        {!loading && <div className="flex flex-row w-full mt-3 pr-2">
            <button onClick={upgrade} className="btn mt-2 w-1/2 mr-1">
              to {custom ? "Super Token" : "FXPx"}
            </button>
            <button onClick={downgrade} className="btn mt-2 w-1/2 ml-1">
              to {custom ? "Simple Token" : "FXP"}
            </button>
          </div>}
        {loading && <Spinner />}
      </div>
    </section>
  );
};

export default Wrap;
