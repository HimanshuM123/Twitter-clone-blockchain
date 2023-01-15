import React from 'react'
import { BsStars } from 'react-icons/bs'
import Tweetbox from './Tweetbox'
import Post from '../../components/Post'
import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'

/*const tweets = [
  {
    displayName: 'Himanshu',
    userName: '76FE0A45D52EC773AED14D05EE9093',
    avatar: '/profile_image.png',
    text: 'Who lost money on #LUNA?😫',
    isProfileImageNft: false,
    timestamp: '2021-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Himanshu',
    userName: '76FE0A45D52EC773AED14D05EE9093',
    avatar: '/profile_image.png',
    text: 'Expectations can mentally destroy you!😊',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Himanshu',
    userName: '76FE0A45D52EC773AED14D05EE9093',
    avatar: '/profile_image.png',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2022-01-01T12:00:00.000Z',
  },
]
*/
const Feed = () => {
  const { tweets } = useContext(TwitterContext)
  return (
    <div className="flex-[2]  border-r border-l border-[#38444d]">
      <div className="sticky top-0 z-10 flex items-center justify-between bg-[#15202b] p-4">
        <div className="text-xl font-bold">Home</div>
        <BsStars />
      </div>
      <Tweetbox />
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            tweet.author.name === 'Unnamed'
              ? `${tweet.author.walletAddress.slice(
                  0,
                  4
                )}...${tweet.author.walletAddress.slice(41)}`
              : tweet.author.name
          }
          userName={`${tweet.author.walletAddress.slice(
            0,
            4
          )}...${tweet.author.walletAddress.slice(41)}`}
          text={tweet.tweet}
          avatar={tweet.author.profileImage}
          isProfileImageNft={tweet.author.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default Feed
