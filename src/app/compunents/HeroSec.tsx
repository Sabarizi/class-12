import React from 'react'
import Image from 'next/image'
const HeroSec = () => {
  return (
    <div>
         <div className='bg-white h-829px w-1920px flex items-center justify-center '>
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 text-black text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">
          Project Managment
          </h1>
          <p className="text-lg mb-6">
          Images videos PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800">
            Get Started -
          </button>
        </div>
          {/* Right Side: Image */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center py-11 my-11">
          <Image
            src="/Image-container.png" // Replace with your image path
            alt="Hero Image"
            height={500}
            width={500}
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
        </div>
    </div>
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center py-11 my-11">
          <Image
            src="/Image-container.png" // Replace with your image path
            alt="Hero Image"
            height={500}
            width={500}
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>
        <div className="lg:w-1/2 text-black text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4">
          Work Together
          </h1>
          <p className="text-lg mb-6">
          With whitepace share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.

          </p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800">
            Try it now
          </button>
        </div>

    </div>
    </div>
  )
}

export default HeroSec