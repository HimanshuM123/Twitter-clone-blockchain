import Post from './../Post'
import { useContext } from 'react'
import { TwitterContext } from './../../context/TwitterContext'

const tweets = [
  {
    displayName: 'Himanshu',
    userName: '76FE0A45D52EC773AED14D05EE9093',
    avatar: '/profile_image.png',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2021-06-01T12:00:00.000Z',
  },
  {
    displayName: 'Himanshu',
    userName: '76FE0A45D52EC773AED14D05EE9093',
    avatar: '/profile_image.png',
    text: 'gm',
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

const ProfileTweets = () => {
  const { currentAccount, currentUser } = useContext(TwitterContext)
  return (
    <div className="no-scrollbar">
      {currentUser.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            currentUser.name === 'Unnamed'
              ? currentUser.walletAddress
              : currentUser.name
          }
          userName={`${currentAccount.slice(0, 4)}...${currentAccount.slice(
            -4
          )}`}
          text={tweet.tweet}
          avatar={currentUser.profileImage}
          isProfileImageNft={currentUser.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
