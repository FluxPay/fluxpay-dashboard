import { useState, useEffect } from 'react';
import { useAccount, useSigner, useProvider } from 'wagmi';
// import { ethers } from 'ethers';
import { ethers } from 'ethers/lib/index.js';
import { ERC20ABI } from '../ABIs/ERC20ABI.js';
import { ToastContainer, toast } from 'react-toastify';

const Faucet = (props) => {
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);

  const { address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useProvider();

  const failed = () =>
    toast.error('Transaction Failed !', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const success = () =>
    toast.success('Transaction Successful !', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  const FXP = new ethers.Contract(
    '0x262A2B8B05F0D91AC53b97c62E71D41Ae3ED59e2',
    ERC20ABI,
    signer || provider || undefined
  );

  const mintFXP = async () => {
    // console.log(FXP);
    try {
      setLoading(true);
      await FXP.mintTo(ethers.utils.getAddress(address || '0x0'), ethers.utils.parseEther(amount || '0'));
      setLoading(false);
      success();
    } catch (e) {
      failed();
      console.log(e);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-screen h-screen bg-base items-center justify-center text-black pl-[10%] ">
      <ToastContainer />
      <div className="flex flex-col artboard artboard-horizontal phone-2 bg-white rounded-2xl shadow-lg items-center justify-center">
        <p className="text-[1.5vmax] font-bold text-primary">FXP Faucet</p>
        <div className="divider"></div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter amount</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="0.01"
              className="input input-bordered border-2 border-base"
              onChange={(e) => setAmount(e.target.value)}
            />
            <span className="bg-base text-primary">FXP</span>
          </label>
          {loading ? (
            <button className="btn btn-primary mt-3 ">
              <progress className="progress w-56 bg-primary"></progress>
            </button>
          ) : (
            <button className="btn btn-primary mt-3" onClick={() => mintFXP()}>
              Get FXP
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faucet;
