import Image from "next/image";
import '../app/globals.css';
export default function Topheader() {
  return (<div>
    <div className="w-[1440px] h-[48px] bg-black flex">

      <div className="w-[859px] h-[24px] text-[#ffffff] text-[14px] flex mt-[12px] relative pl-[300px]">
        <div className="w-[550px] h-[24px] flex gap-4">
          <p className="w-[474] leading-[24px] text-[14px] ">
            Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%
          </p> <p className="font-semibold underline text-white">ShopNow</p>
        </div>
        <div className="relative left-[231px] flex">
          <p>English</p>
          <Image src={"/images/dropdown.png"} alt="" width={24} height={24}/>
        </div>
      
    </div>
    </div>
    </div>
  );
}


