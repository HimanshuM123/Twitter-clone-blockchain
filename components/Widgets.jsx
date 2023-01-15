import { BiSearch } from 'react-icons/bi'
import { news, whoToFollow } from '../lib/static'

const Widgets = () => {
  return (
    <div className="flex-[1] p-4">
      <div className="flex items-center rounded-3xl bg-[#243340] p-2">
        <BiSearch className="mr-2 text-[#8899a6]" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent outline-none"
        />
      </div>
      <div className="my-6 overflow-hidden rounded-xl bg-[#192734]">
        <div className="p-2 text-lg font-bold">What's happening?</div>
        {news.map((item, index) => (
          <div
            key={index}
            className="my-2 flex cursor-pointer items-center p-3 hover:bg-[#22303c]"
          >
            <div className="flex-1">
              <div className="text-xs font-semibold text-[#8899a6]">
                {item.category}
              </div>
              <div className="text-sm font-bold">{item.title}</div>
            </div>
            <div className="ml-3 w-1/5">
              <img
                src={item.image}
                alt={item.category}
                className="h-14 w-14 rounded-xl object-cover"
              />
            </div>
          </div>
        ))}
        <div className="cursor-pointer p-2 text-sm text-[#1d9bf0] hover:bg-[#22303c]">
          Show more
        </div>
      </div>
      <div className="my-6 overflow-hidden rounded-xl bg-[#192734]">
        <div className="p-2 text-lg font-bold">Who to follow</div>
        {whoToFollow.map((item, index) => (
          <div
            key={item.index}
            className="my-2 flex cursor-pointer items-center p-3 hover:bg-[#22303c]"
          >
            <div className="w-1/6">
              <img
                src={item.avatar}
                // alt={item.handle}
                className="h-[40px] w-[40px] rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="font-bold">{item.name}</div>
              <div className="text-[#8899a6]">{item.handle}</div>
            </div>
            <div className="rounded-full bg-white px-3 py-1 text-xs font-bold text-black">
              Follow
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Widgets
