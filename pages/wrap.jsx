import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import GetSF from '../hooks/GetSF';
import { useAccount, useSigner } from 'wagmi';

const Wrap = (props) => {
  const [amount, setAmount] = useState('0');

  const { data: signer } = useSigner();
  const { address } = useAccount();

  const upgrade = async () => {
    const sf = await GetSF();
    const FXPx = await sf.loadSuperToken('0x25963b81595626b807d635544bf4bcbffbb262d8');
    const FXP = FXPx?.underlyingToken;
    const approve = FXP.approve({
      receiver: FXPx.address || '0x0',
      amount: ethers.utils.parseEther(amount),
    });
    const apv = await approve.exec(signer);
    await apv.wait();

    const op = FXPx.upgrade({ amount: ethers.utils.parseEther(amount) });
    const res = op.exec(signer);
  };

  const downgrade = async () => {
    const sf = await GetSF();
    const FXPx = await sf.loadSuperToken('0x25963b81595626b807d635544bf4bcbffbb262d8');
    const approve = FXPx.approve({
      receiver: FXPx.address || '0x0',
      amount: ethers.utils.parseEther(amount),
    });
    const apv = await approve.exec(signer);
    await apv.wait();
    const op = FXPx.downgrade({ amount: ethers.utils.parseEther(amount) });
    const res = op.exec(signer);
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-base items-center justify-center text-black pl-[10%] ">
      <div className="flex flex-col artboard artboard-horizontal phone-2 bg-white rounded-2xl shadow-lg items-center justify-center">
        <p className="text-[1.5vmax] font-bold text-primary">Wrap/Unwrap</p>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="0.01"
              className="input input-bordered"
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
          <div className="flex flex-row w-full mt-3 pr-2">
            <button onClick={upgrade} className="btn btn-wide btn-primary mt-2 w-1/2 mr-1">
              to FXPx
            </button>
            <button onClick={downgrade} className="btn btn-wide btn-primary mt-2 w-1/2 ml-1">
              to FXP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrap;
