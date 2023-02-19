import {useAccount} from 'wagmi'
import * as PushAPI from '@pushprotocol/restapi'
import { useEffect, useState } from 'react'
import { useSigner } from 'wagmi'

export default function Notifs() {
  let { address } = useAccount()
  const [notifsData, setNotifsData] = useState([])
  const { data: signer } = useSigner();

  const getNotifications = async () => {
    let notificationsData = await PushAPI.user.getFeeds({
      user: `eip155:80001:${address}`, // user address in CAIP
      env: 'staging',
    });

    const numberOfNotif = notificationsData.length;
    let final = [];
    for(let i = 0; i < numberOfNotif; i++) {
      final.push({ app: notificationsData[i].app, message: notificationsData[i].message })
    }
    final = final.filter(not => {
      return not.app === 'Acc-1-Channel'
    })
    setNotifsData(final);
  };

  const optin = async () => {
    await PushAPI.channels.subscribe({
      signer: signer,
      channelAddress: 'eip155:80001:0x42066368D2b1c06E32e34c8A264a4fe7acE29606', // channel address in CAIP
      userAddress: 'eip155:80001:' + address, // user address in CAIP
      onSuccess: () => {
        console.log('opt in success');
      },
      onError: () => {
        console.error('opt in error');
      },
      env: 'staging',
    });
  };

  useEffect(() => {
    getNotifications()
  }, [])

  return (
    <div className="w-72 absolute top-[75px] bg-white flex flex-col border-2 border-gray-200 rounded-md">
      <div className="w-full flex justify-between items-center p-2 border-b-2 border-gray-400">Notifications <span className="p-2 bg-fgreen text-white rounded-md cursor-pointer" onClick={optin}>Opt-In</span></div>
      <div className="w-full h-72 flex flex-col space-y-1 overflow-y-auto">
        {notifsData && notifsData.map((notif, index) => (
          <p key={index} className="w-full p-2 border-b-2">{notif.message}</p>
        ))}
      </div>
    </div>
  )
}
