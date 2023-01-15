import { Dispatch, SetStateAction } from 'react'
import { GiEarthAmerica } from 'react-icons/gi'
const InitialState = ({
  profileImage,
  setProfileImage,
  name,
  setName,
  description,
  setDescription,
  mint,
}) => {
  return (
    <div className="flex h-[20rem] w-[35rem] flex-col rounded-3xl bg-[#15202b] p-10 text-white">
      <div className="flex-1">
        <div className="mb-4">
          <label
            htmlFor="image-upload"
            className={
              profileImage
                ? 'cursor-pointer rounded-full bg-[#2b6127] px-3 py-1 text-white hover:bg-[#8899a6]'
                : 'cursor-pointer rounded-full bg-white px-3 py-1 text-black hover:bg-[#8899a6]'
            }
          >
            <input
              type="file"
              id="image-upload"
              accept=".jpg, .jpeg, .png"
              className="hidden"
              placeholder="Image URL"
              onChange={(e) => setProfileImage(e.target.files[0])}
            />
            Select File
          </label>
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-transparent text-xl outline-none"
            placeholder="Title of Image"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            className="w-full bg-transparent text-xl outline-none"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm font-bold text-[#1d9bf0]">
          <GiEarthAmerica />
          <span className="ml-2">Everyone can see this</span>
        </div>
        <div
          className={
            name && description && profileImage
              ? 'cursor-pointer rounded-full bg-white px-3 py-1 text-black hover:bg-[#8899a6]'
              : 'rounded-full bg-[#8899a6] px-3 py-1 text-black'
          }
          onClick={() => {
            if (name && description && profileImage) {
              mint()
            }
          }}
        >
          Mint
        </div>
      </div>
    </div>
  )
}

export default InitialState
