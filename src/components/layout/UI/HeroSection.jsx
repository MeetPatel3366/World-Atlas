import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <main>
      <div className="m-36  grid grid-cols-2 items-center justify-around p-12 mt-10 mb-5 gap-20">
        <div className='flex items-start justify-center flex-col w-auto'>
          <h1 className='font-bold text-4xl'>Explore the World, One Country at a Time.</h1>
          <p className='my-8'>Discover the histrory,cluture, and beauty of every nation. Sort, search, and filter through countries to find the details</p>
          <button className='bg-zinc-500 rounded-md px-8 py-2'><span>Start Exploring <FaLongArrowAltRight/></span></button>
        </div>
        <div className='flex justify-center'>
          <img className=' object-cover' src="/images/world1.png" alt="world beauty " />
        </div>
      </div>
    </main>
  )
}

export default HeroSection
