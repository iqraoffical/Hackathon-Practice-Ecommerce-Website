import Link from "next/link";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="border-b-8  top-[142px] w-[1440] col">
      <div className="w-[1170px] h-[38px] mt-10 relative left-[135px] flex  ">
        <div className="w-[674px] h-[24px] gap-[190px] flex ">
          <p className="w-[118px] h-[24px] font-bold text-[24px] leading-[24px] flex">
            Exclusive
          </p>
          <div className="w-[367px] h-[24px] gap-[48px] justify-between">
            <Link className="ml-[23px]" href="/">
              Home
            </Link>
            <Link className="ml-[23px]" href="/Contact">
              Contact
            </Link>
            <Link className="ml-[23px]" href="/About">
              About
            </Link>
            <Link className="ml-[23px]" href="/SignUp">
              SignUp
            </Link>
          </div>

          <div className=" text-base flex items-center space-x-4">
            <input type="text" placeholder="What are you looking for? "
            className="flex-4 outline-none text-gray-600 placeholder:gray-400 bg-transparent " />
            <CiSearch className="text-2xl text-black-400 cursor-pointer ml-2  hover:text-gray-600"/>
            <div className="flex space-x-4 ml-auto">
              <IoHeartOutline className="text-2xl text-black-400 cursor-pointer hover:text-gray-600" />
              <MdOutlineShoppingCart className="text-2xl text-black-400 cursor-pointer hover:text-gray-600" />
            </div>
          <div>
          </div>
        
           
          </div>
        </div>
      </div>
    </div>
  );
}
