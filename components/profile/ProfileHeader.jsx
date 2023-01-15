import { BsArrowLeftShort } from 'react-icons/bs'
import Router from 'next/router'
import { useContext } from 'react'
import { TwitterContext } from './../../context/TwitterContext'

const ProfileHeader = () => {
  const isProfileNft = false
  const currentAccout = '76FE0A45D52EC773AED14D05EE9093'
  const { currentAccount, currentUser } = useContext(TwitterContext)
  return (
    <div className="border-b border-[#38444d]">
      <div className="mt-2 flex items-center py-1 px-3">
        <div
          onClick={() => Router.push('/')}
          className="mr-2 cursor-pointer rounded-full p-1 text-3xl hover:bg-[#313b44]"
        >
          <BsArrowLeftShort />
        </div>
        <div className="px-3">
          <div className="bg-transparent font-bold outline-none">
            {currentUser.name}
          </div>
          <div className="text-xs text-[#8899a6]">
            {currentUser.tweets?.length} Tweets
          </div>
        </div>
      </div>
      <div className="flex h-[15vh] items-center justify-center overflow-hidden">
        <img
          src={currentUser.coverImage}
          alt="cover"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-[-3rem] mb-2 flex h-[6rem] w-full items-center justify-start justify-between rounded-full px-3">
        <div
          className={
            isProfileNft
              ? 'hex'
              : 'mt-[-3rem] mb-2 flex h-[6rem] w-full items-center justify-start justify-between rounded-full px-3'
          }
        >
          <img
            src="/profile_image.png"
            alt="cover"
            className={
              isProfileNft
                ? 'h-full object-cover'
                : 'h-full rounded-full object-cover'
            }
          />
        </div>
      </div>
      <div className="px-3">
        <div>
          <div className="bg-transparent font-bold outline-none">
            {currentUser.name}
          </div>
        </div>
        <div className="text-xs text-[#8899a6]">
          {currentAccout && (
            <>
              @{currentAccout.slice(0, 8)}...{currentAccout.slice(26)}
            </>
          )}
        </div>
      </div>
      <div className="mt-4 mb-2 flex justify-around text-xs font-semibold text-[#8899a6]">
        <div className="text-white">Tweets</div>
        <div>Tweets & reply</div>
        <div>media</div>
        <div>links</div>
      </div>
    </div>
  )
}

export default ProfileHeader
