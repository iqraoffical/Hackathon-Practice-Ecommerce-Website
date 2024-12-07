import Image from "next/image";

export default function Products() {
  return (
    <div className="w-full py-10 bg-gray-100">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex flex-col">
          <span className="border-l-4 border-red-500 text-red-500 pl-2 text-sm lg:text-base">
            This Month
          </span>
          <h2 className="text-xl lg:text-2xl font-semibold text-black mt-2">
            Best Selling Products
          </h2>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded mt-4 lg:mt-0">
          View All
        </button>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {/* Product Cards */}
        <div className="bg-white shadow rounded-lg flex flex-col items-center p-4">
          <Image
            src="/images/PinkCart.png"
            width={200}
            height={200}
            alt="Pink Cart"
            className="object-contain"
          />
          <h3 className="text-lg font-medium text-black mt-4">
            The North Coat
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/images/Frame.png"
              width={100}
              height={20}
              alt="Rating"
              className="object-contain"
            />
            <Image
              src="/images/StarFrame.png"
              width={100}
              height={20}
              alt="Stars"
              className="object-contain"
            />
          </div>
        </div>

      
       

        <div className="bg-white shadow rounded-lg flex flex-col items-center p-4">
          <Image
            src="/images/bag.png"
            width={200}
            height={200}
            alt="Pink Cart"
            className="object-contain"
          />
          <h3 className="text-lg font-medium text-black mt-4">
          Gucci duffle bag
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/images/Frame.png"
              width={100}
              height={20}
              alt="Rating"
              className="object-contain"
            />
            <Image
              src="/images/StarFrame.png"
              width={100}
              height={20}
              alt="Stars"
              className="object-contain"
            />
          </div>
        </div>


      
          <div className="bg-white shadow rounded-lg flex flex-col items-center p-4">
          <Image
            src="/images/mike.png"
            width={200}
            height={200}
            alt="Pink Cart"
            className="object-contain"
          />
          <h3 className="text-lg font-medium text-black mt-4">
          RGB liquid CPU Cooler
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/images/Frame.png"
              width={100}
              height={20}
              alt="Rating"
              className="object-contain"
            />
            <Image
              src="/images/StarFrame.png"
              width={100}
              height={20}
              alt="Stars"
              className="object-contain"
            />
          </div>
        </div>
        
        
         <div className="bg-white shadow rounded-lg flex flex-col items-center p-4">
          <Image
           src="/images/cubord.png"
            width={200}
            height={200}
            alt="Pink Cart"
            className="object-contain"
          />
          <h3 className="text-lg font-medium text-black mt-4">
          Small BookSelf
          </h3>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/images/Frame.png"
              width={100}
              height={20}
              alt="Rating"
              className="object-contain"
            />
            <Image
              src="/images/StarFrame.png"
              width={100}
              height={20}
              alt="Stars"
              className="object-contain"
            />
          </div>
        </div>
        
        



        </div>
      </div>
    
  );
}
