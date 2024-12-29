import Image from "next/image";

import search from '../../public/icons/search.svg'
import message from '../../public/icons/message.png'
import announcement from '../../public/icons/announcement.png'
import avatar from '../../public/icons/avatar.png'
import { wh_avatar, wh_menu, wh_search } from "@/constant";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src={search} className="stroke-gray-300" alt="search" width={wh_search} height={wh_search}/>
        <input type="text" placeholder="Search...." name="" id="" className="w-[500px] p-2 pl-0 bg-transparent outline-none" />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center">
          <Image src={message} alt="message" width={wh_menu} height={wh_menu}/>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center relative">
          <Image src={announcement} alt="announcement" width={wh_menu} height={wh_menu}/>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">1</div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Json Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
          <Image src={avatar} className="rounded-full" alt="user" width={wh_avatar} height={wh_avatar}/>
      </div>
    </div>
  );
}
