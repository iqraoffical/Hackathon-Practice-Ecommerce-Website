import Image from "next/image";
import Link from "next/link";
export default function SignUp() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-6xl mx-auto px-4 py-10 gap-10">
      {/* Left Section */}
      <div className="w-full lg:w-1/2">
        <Image
          src="/images/Side Image.png"
          alt="Side Illustration"
          width={800}
          height={780}
          className="object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-2xl lg:text-3xl font-semibold text-black">
          Create an Account
        </h1>
        <p className="text-gray-600 text-sm lg:text-base">
          Enter your details below to create a new account.
        </p>

        {/* Form */}
        <form className="w-full flex flex-col gap-4">
          {/* Name Field */}
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          
          {/* Email Field */}
          <input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Password Field */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          {/* Submit Button */}
          <button className="w-full bg-red-500 text-white py-2 rounded-md text-sm font-medium hover:bg-red-600 transition">
            Create Account
          </button>

          {/* Google Signup */}
          <button className="w-full flex items-center justify-center border border-gray-300 text-gray-600 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition gap-2">
            <Image src="/images/Google.png" alt="Google Icon" width={371} height={56} />
            
          </button>
        </form>

        {/* Footer Links */}
        <p className="text-gray-500 text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/Login" className="text-red-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
