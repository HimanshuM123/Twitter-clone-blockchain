import { useState } from 'react'
//import { TwitterContext } from '../../context/TwitterContext'
import { BsCardImage, BsEmojiSmile } from 'react-icons/bs'
import { RiFileGifLine, RiBarChartHorizontalFill } from 'react-icons/ri'
import { IoMdCalendar } from 'react-icons/io'
import { MdOutlineLocationOn } from 'react-icons/md'
import { client } from '../../lib/client'
import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'

const Tweetbox = () => {
  const [tweetMassage, setTweetMassage] = useState('')
  const { currentAccount, currentUser, tweets } = useContext(TwitterContext)
  const postTweet = async (e) => {
    e.preventDefault()
    if (!tweetMassage) return
    const tweetId = `${currentAccount}_${Date.now()}`

    const tweetDoc = {
      _type: 'tweets',
      _id: tweetId,
      tweet: tweetMassage,
      timestamp: new Date(Date.now()).toISOString(),
      author: {
        _key: tweetId,
        _type: 'reference',
        _ref: currentAccount,
      },
    }
    await client.createIfNotExists(tweetDoc)
    await client
      .patch(currentAccount)
      .setIfMissing({ tweets: [] })
      .insert('after', 'tweets[-1]', [
        { _key: tweetId, _type: 'reference', _ref: tweetId },
      ])
      .commit()
    setTweetMassage('')
  }
  return (
    <div className="flex flex-row border-b border-[#38444d] px-4 pb-4">
      <div className="mr-4">
        <img
          src={currentUser.profileImage}
          alt="profile image"
          className={
            currentUser.isProfileImageNft
              ? 'smallHex height-12 w-12 rounded-full'
              : 'height-12 w-12 rounded-full'
          }
        />
      </div>
      <div className="flex-1">
        <form>
          <textarea
            className="h-full w-full bg-transparent text-lg outline-none"
            placeholder="What's is happening?"
            value={tweetMassage}
            onChange={(e) => setTweetMassage(e.target.value)}
          ></textarea>
          <div className="flex">
            <div className="flex flex-1 items-center text-[#1d9bf0]">
              <BsCardImage className="mr-2" />
              <RiFileGifLine className="mr-2" />
              <RiBarChartHorizontalFill className="mr-2" />
              <BsEmojiSmile className="mr-2" />
              <IoMdCalendar className="mr-2" />
              <MdOutlineLocationOn className="mr-2" />
            </div>
            <button
              type="submit"
              onClick={(event) => postTweet(event)}
              className={`${
                tweetMassage
                  ? 'rounded-3xl bg-[#1d9bf0] px-6 py-2 font-bold text-white'
                  : 'rounded-3xl bg-[#196195] px-6 py-2 font-bold text-[#95999e]'
              }`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Tweetbox
