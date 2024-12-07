import Image from "next/image";

export default function Sales() {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 py-10 bg-gray-50">
      {/* Top Section */}
      <div className="w-full max-w-[1170px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="border-l-4 border-red-500 text-red-500 pl-2 text-lg">
            Today's
          </span>
          <h2 className="text-2xl font-semibold text-black">Flash Sales</h2>
        </div>
      </div>

      {/* Product Grid */}
      <div className="mt-8 w-full max-w-[1308px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Product Cards */}
        {[
          { src: "/images/Red.png", title: "HAVIT HV-G92 Gamepad" },
          { src: "/images/keyboard.png", title: "Mechanical Keyboard" },
          { src: "/images/lcd.png", title: "Gaming LCD Screen" },
          { src: "/images/chairimage.png", title: "Ergonomic Chair" },
        ].map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
          >
            <Image
              src={product.src}
              alt={product.title}
              width={170}
              height={145}
              className="object-contain"
            />
            <div className="mt-4 text-center">
              <h1 className="text-lg font-medium text-black">{product.title}</h1>
              <div className="flex justify-center gap-4 mt-2">
                <Image
                  src="/images/Frame.png"
                  width={94}
                  height={24}
                  alt="Add to Cart"
                  className="object-contain"
                />
                <Image
                  src="/images/StarFrame.png"
                  width={94}
                  height={24}
                  alt="Rating"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
