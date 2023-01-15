import React from 'react'
import { VscTwitter } from 'react-icons/vsc'
import SidebarOption from './SidebarOption'
import { useState } from 'react'
import { RiHome7Line, RiHome7Fill, RiFileList2Fill } from 'react-icons/ri'
import { BiHash } from 'react-icons/bi'
import { FiBell, FiMoreHorizontal } from 'react-icons/fi'
import { HiMail, HiOutlineMail } from 'react-icons/hi'
import { FaBell, FaRegListAlt, FaHashtag } from 'react-icons/fa'
import { CgMoreO } from 'react-icons/cg'
import {
  BsBookmarkFill,
  BsBookmark,
  BsPersonFill,
  BsPerson,
} from 'react-icons/bs'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { TwitterContext } from './../context/TwitterContext'
import { useContext } from 'react'
import Modal from 'react-modal'
import ProfileImageMinter from './mintingModal/ProfileImageMinter'
import { customStyles } from '../lib/constants'

const Sidebar = ({ initialSelectedIcon = 'Home' }) => {
  const [selected, setSelected] = useState(initialSelectedIcon)
  const { currentAccount, currentUser } = useContext(TwitterContext)
  const router = useRouter()
  return (
    <div className="flex flex-[0.7] flex-col px-8">
      <div className="m-4 text-3xl">
        <VscTwitter></VscTwitter>
      </div>
      <div className="flex-1">
        <SidebarOption
          Icon={selected === 'Home' ? RiHome7Fill : RiHome7Line}
          text="Home"
          isActive={Boolean(selected === 'Home')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Explore' ? FaHashtag : BiHash}
          text="Explore"
          isActive={Boolean(selected === 'Explore')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Notifications' ? FaBell : FiBell}
          text="Notifications"
          isActive={Boolean(selected === 'Notifications')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Messages' ? HiMail : HiOutlineMail}
          text="Messages"
          isActive={Boolean(selected === 'Messages')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Bookmarks' ? BsBookmarkFill : BsBookmark}
          text="Bookmarks"
          isActive={Boolean(selected === 'Bookmarks')}
          setSelected={setSelected}
          redirect={'/'}
        />

        <SidebarOption
          Icon={selected === 'Lists' ? RiFileList2Fill : FaRegListAlt}
          text="Lists"
          isActive={Boolean(selected === 'Lists')}
          setSelected={setSelected}
          redirect={'/'}
        />
        <SidebarOption
          Icon={selected === 'Profile' ? BsPersonFill : BsPerson}
          text="Profile"
          isActive={Boolean(selected === 'Profile')}
          setSelected={setSelected}
          redirect={'/profile'}
        />
        <SidebarOption Icon={CgMoreO} text="More" setSelected={setSelected} />

        <div
          className="mt-[20px] flex h-[50px] cursor-pointer items-center justify-center 
        rounded-3xl bg-[#1d9bf0] font-bold hover:bg-[#1b8cd8]"
          onClick={() => {
            router.push(`${router.pathname}/?mint=${currentAccount}`)
          }}
        >
          Mint
        </div>
      </div>
      <div className="mb-6 flex cursor-pointer items-center rounded-3xl hover:bg-[#333c45]">
        <div className="item-center mr-4 flex justify-center">
          <img
            src={currentUser.profileImage}
            alt="Profile"
            className={
              currentUser.isProfileImageNft
                ? 'height-12 smallHex w-12 rounded-full'
                : 'height-12 w-12 rounded-full'
            }
          />
        </div>
        <div className="flex flex-1">
          <div className="flex-1">
            <div className="text-lg">{currentUser.name}</div>
            <div className="text-[#8899a6]">
              @{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
            </div>
          </div>
          <div className="mr-2 flex items-center">
            <FiMoreHorizontal></FiMoreHorizontal>
          </div>
        </div>
      </div>
      <Modal
        isOpen={Boolean(router.query.mint)}
        onRequestClose={() => router.back()}
        style={customStyles}
      >
        <ProfileImageMinter />
      </Modal>
    </div>
  )
}

export default Sidebar
