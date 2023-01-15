import { useContext, useEffect } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Image from 'next/image'
import checkMark from '../../assets/check.png'
import { useRouter } from 'next/router'

const FinishedState = () => {
  const router = useRouter()
  const { getCurrentUserDetails } = useContext(TwitterContext)

  useEffect(() => {
    getCurrentUserDetails()
  })

  return (
    <div className="flex h-[20rem] w-[35rem] flex-col items-center justify-center rounded-3xl bg-[#15202b] p-10 text-white">
      <div className="mb-6 text-xl font-semibold">Minting Successful!</div>
      <Image src={checkMark} alt="checkmark" height={100} width={100} />
      <div
        onClick={() => router.push('/')}
        className="mt-6 cursor-pointer rounded-full bg-white px-3 py-1 text-black hover:bg-[#8899a6]"
      >
        Close
      </div>
    </div>
  )
}

export default FinishedState
