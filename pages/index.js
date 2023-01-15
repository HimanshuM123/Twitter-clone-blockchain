import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar';
import Feed from '../components/home/Feed'
import Widgets from '../components/Widgets'
import { useContext } from 'react';
import { TwitterContext } from '../context/TwitterContext'
import metamask from '../assets/metamask.png'
import errorImg from '../assets/error.png'

const Home = () => {
    const { appStatus, connectToWallet } = useContext(TwitterContext);
    const app = (status = appStatus) => {
        switch (status) {
            case 'connected':
                return userLoggedIn;
            case 'notConnected':
                return noUserFound;
            case 'noMetaMask':
                return noMetamaskFound;
            case 'error':
                return error;
            default:
                return loading


        }

    }

    const userLoggedIn = (
        <div className="max-w-[1400px] w-2/3 flex justify-between">
            {<Sidebar />}
            <Feed />
            <Widgets />

        </div>
    )
    const noUserFound = (
        <div className='w-full h-full flex flex-col justify-center items-center pb-48'>
            <Image src={metamask} height={200} width={200} />
            <div className='text-2xl text-black bg-white font-bold mb-[-3rem] mt-[3rem] px-6 py-4 rounded-full cursor-pointer hover:bg-[#d7dbdc]'
                onClick={() => connectToWallet()}
            >
                Connect Wallet
            </div>
            <div className='text-3xl font-bold text-center mt-24'>Connect to wallet</div>
        </div>
    )
    const noMetamaskFound = (
        <div className='w-full h-full flex flex-col justify-center items-center pb-48'>
            <Image src={metamask} height={200} width={200}></Image>
            <div >
                <a target='_blank' rel='noreferer' href={'https://metamask.io/download.html'}>
                    You must install metamask a <br /> virtual etherum wallet
                </a>

            </div>
        </div>
    )
    const error = (
        <div className='w-full h-full flex flex-col justify-center items-center pb-48'>
            <Image src={errorImg} height={250} width={250} />
            <div className='text-3xl font-bold text-center mt-24'>
                An error occued please try again later or use another account
            </div>
        </div>
    )
    const loading = (
        <div className='w-full h-full flex flex-col justify-center items-center pb-48'>
            <div className='text-3xl font-bold text-center mt-24'>
                Loading...
            </div>

        </div>
    )
    return (
        <div className="flex justify-center h-screen w-screen select-none bg-[#15202b] text-white">
            {app(appStatus)}

        </div>
    )
}

export default Home 