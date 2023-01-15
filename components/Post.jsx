import { BsFillPatchCheckFill } from 'react-icons/bs'
import { format } from 'timeago.js'
import { FaRegComment, FaRetweet } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'

const Post = ({
  displayName,
  userName,
  avatar,
  text,
  isProfileImageNft,
  timestamp,
}) => {
  return (
    <div className="flex border-b border-[#38444d] p-3">
      <div>
        <img
          src={avatar}
          alt={userName}
          className={
            isProfileImageNft
              ? 'smallHex h-[40px] w-[40px] rounded-full object-cover'
              : 'h-[40px] w-[40px] rounded-full object-cover '
          }
        />
      </div>
      <div className="flex-1 px-4">
        <div>
          <span className="flex items-center">
            <span className="mr-1 font-bold">{displayName}</span>
            {isProfileImageNft && (
              <span className="text-[0.8rem]">
                <BsFillPatchCheckFill />
              </span>
            )}
            <span className="ml-1 text-[#8899a6]">
              @{userName}•{format(new Date(timestamp))}
            </span>
          </span>
          <div className="my-2">{text}</div>
        </div>
        <div className="mr-28 mt-4 flex justify-between text-[#8899a6]">
          <div className="rounded-full p-2 text-lg hover:bg-[#1e364a] hover:text-[#1d9bf0]">
            <FaRegComment />
          </div>
          <div className="rounded-full p-2 text-lg hover:bg-[#1b393b] hover:text-[#03ba7c]">
            <FaRetweet />
          </div>
          <div className="rounded-full p-2 text-lg hover:bg-[#39243c] hover:text-[#f91c80]">
            <AiOutlineHeart />
          </div>
          <div className="rounded-full p-2 text-lg hover:bg-[#1e364a] hover:text-[#1d9bf0]">
            <FiShare />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
