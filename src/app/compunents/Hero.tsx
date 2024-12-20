import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className='bg-[#043873] h-829px w-1920px flex items-center justify-center '>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-white text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">
          Get More Done With WhiteSpace
          </h1>
          <p className="text-lg mb-6">
          Project management software that enables your teams to collaborate plan analyze and manage everyday task
          </p>
          <button className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-200">
            Try Whitespace free -
          </button>
        </div>
          {/* Right Side: Image */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center py-11">
          <Image
          src={"/Image-container.png"}
            alt="Hero Image"
            height={500}
            width={500}
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
        </div>
    </div>
  )
}

export default Hero