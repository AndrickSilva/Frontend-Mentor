import React from 'react'
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai'
const Home = () => {
  return (
    <div className='min-h-screen bg-darkBg px-24 py-12 '>

      <div className="flex justify-between items-center">
        <div className="relative">
          <input type="search" className='placeholder:text-gray-200 bg-darkElem mb-6 py-4 pl-20 pr-28 rounded-md' placeholder='Search for a country...' />
          <AiOutlineSearch className='absolute top-4 left-7 text-gray-100 text-2xl' />
        </div>
        <div className="relative">
          <button name="region" className='bg-darkElem flex justify-center items-center gap-3 text-gray-200 py-4 rounded-md px-8'>Filter by Region
            <AiOutlineDown className=' text-xl  text-gray-100' />
          </button>
          <div className="absolute mt-2 bg-darkElem min-w-full text-gray-200 py-4 rounded-md px-8 flex flex-col gap-3">
            <p value="Africa">Africa</p>
            <p value="America">America</p>
            <p value="Asia">Asia</p>
            <p value="Europe">Europe</p>
            <p value="Oceania">Oceania</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home