import { useState, useContext } from 'react'
import InitialState from './InitialState'
import LoadingState from './LoadingState'
import FinishedState from './FinishedState'
import { useRouter } from 'next/router'
import { TwitterContext } from './../../context/TwitterContext'
import { pinFileToIPFS, pinJSONToIPFS } from '../../lib/pinata'
import { client } from '../../lib/client'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '../../lib/constants'

let metamask
//let window

if (typeof window !== 'undefined') {
  debugger
  metamask = window.ethereum
}
const getEthereumContract = async () => {
  debugger
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return transactionContract
}
const ProfileImageMinter = () => {
  const { currentAccount, setAppStatus } = useContext(TwitterContext)
  const router = useRouter()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('initial')
  const [profileImage, setProfileImage] = useState()
  const mint = async () => {
    if (!name || !description || !profileImage) return
    setStatus('loading')

    const pinataMetadata = {
      name: `${name} - ${description}`,
    }
    const ipfsImageHash = await pinFileToIPFS(profileImage, pinataMetadata)
    await client
      .patch(currentAccount)
      .set({ profileImage: ipfsImageHash })
      .set({ isProfileImageNft: true })
      .commit()

    const imageMetaData = {
      name: name,
      description: description,
      image: `ipfs://${ipfsImageHash}`,
    }
    debugger
    const ipfsJsonHash = await pinJSONToIPFS(imageMetaData)
    const contract = await getEthereumContract()
    console.log('contract ' + contract)

    const transactionParameters = {
      to: contractAddress,
      from: currentAccount,
      data: await contract.mint(currentAccount, `ipfs://${ipfsJsonHash}`),
    }

    try {
      debugger
      await metamask.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      })

      setStatus('finished')
    } catch (error) {
      console.log(error)
      setStatus('finished')
    }
  }
  const modalChildren = (modalStatus = status) => {
    switch (modalStatus) {
      case 'initial':
        return (
          <InitialState
            profileImage={profileImage}
            setProfileImage={setProfileImage}
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            mint={mint}
          />
        )

      case 'loading':
        return <LoadingState />

      case 'finished':
        return <FinishedState />

      default:
        router.push('/')
        setAppStatus('error')
        break
    }
  }
  return <div>{modalChildren(status)}</div>
}

export default ProfileImageMinter
