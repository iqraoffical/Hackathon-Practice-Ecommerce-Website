import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-10 bg-gray-100">
      {/* Categories Section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full max-w-[217px]">
            <p className="text-base font-medium text-black">Woman’s Fashion</p>
            <Image src="/images/Dropicon.png" alt="Dropdown Icon" width={24} height={24} />
          </div>

          <div className="flex items-center justify-between w-full max-w-[217px]">
            <p className="text-base font-medium text-black">Men’s Fashion</p>
            <Image src="/images/Dropicon.png" alt="Dropdown Icon" width={24} height={24} />
          </div>

          <p className="text-base font-medium text-black">Electronics</p>
          <p className="text-base font-medium text-black">Home & Lifestyle</p>
          <p className="text-base font-medium text-black">Medicine</p>
          <p className="text-base font-medium text-black">Sports & Outdoor</p>
          <p className="text-base font-medium text-black">Baby’s & Toys</p>
          <p className="text-base font-medium text-black">Groceries & Pets</p>
          <p className="text-base font-medium text-black">Health & Beauty</p>
        </div>

        <div className="hidden lg:block h-[344px] w-[1px] bg-gray-300 opacity-30"></div>

        {/* Promo Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1308px] mx-auto px-4 bg-black gap-6">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start bg-black text-white p-6 rounded-lg text-center lg:text-left max-w-lg">
            <div className="flex items-center gap-4 mb-4">
              <Image src="/images/keyboard.png" alt="Keyboard Icon" width={24} height={24} />
              <span className="text-xl lg:text-2xl font-semibold">iPhone 14 Series</span>
            </div>
            <h1 className="text-lg lg:text-xl font-bold mb-2">Up to 10% off voucher</h1>
            <button className="text-white underline mt-2 py-2 px-4">Shop Now</button>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/hero_endframe.png"
              alt="Hero End Frame"
              width={496}
              height={352}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
