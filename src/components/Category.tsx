import Image from "next/image";

export default function Category() {
  return ( 

    <div className="w-[1170] h-[313px] left-[135px] top-[1415px] flex flex-col justify-center items-center gap-60px">
      {/* Main Container */}
      <div className="w-[1170] h-[108] gap-691px">
        {/* Top Side */}
        <div className="mb-6">
          <span className="border-l-8 border-red-500 text-red-500 pl-2">
            Categories
          </span>
          <h2 className="text-black text-2xl font-semibold mt-2">
            Browse By Category
          </h2>
        </div>

        {/* Products Section */}
        <div className="flex justify-evenly flex-wrap mt-7 gap-30px">
          {/* Product Box */}
          <div className="w-[170px] h-[145px] flex items-center justify-center border-1px border-radius-4px">
            <Image
              src="/images/Phone.png"
              alt="Phone"
              width={170}
              height={145}
              className="object-contain"
            />
          </div>
          <div className="w-[200px] h-[150px]  flex items-center justify-center border-1px border-radius-4px">
            <Image
              src="/images/computer.png"
              alt="computer"
              width={170}
              height={145}
              className="object-contain"
            />
          </div>
         
          <div className="w-[200px] h-[150px]  flex items-center justify-center border-1px border-radius-4px">
            <Image
              src="/images/smartwatch.png"
              alt="smartWatch"
              width={170}
              height={145}
              className="object-contain"
            />
          </div>
          <div className="w-[200px] h-[150px]  flex items-center justify-center border-1px border-radius-4px">
            <Image
              src="/images/Cameracolor.png"
              alt="camera"
              width={170}
              height={145}
              className="object-contain"
            />
          </div>
          <div className="w-[200px] h-[150px] flex items-center justify-center border-1px border-radius-4px">
            <Image
              src="/images/headphone.png"
              alt="headphone"
              width={170}
              height={145}
              className="object-contain"
            />
          </div>
          <div className="w-[200px] h-[150px] flex items-center justify-center border-1px border-radius-4px">
            <Image
              src="/images/gaming.png"
              alt="gaming.png"
              width={170}
              height={145}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}







