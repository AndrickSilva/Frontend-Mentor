import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai'
import axios from 'axios'


const Home = () => {
  useEffect(() => {
    loadData()
  }, [])

  const [Country, setCountry] = useState([])
  const loadData = async () => {
    const data = await axios.get(`https://restcountries.com/v3/all`);
    // console.log(data.data);
    setCountry(data.data)
    // console.log(Country.map((i) => (console.log(i.flags[1]))));
  }

  const num = [1, 2, 3, 4, 5, 6];
  return (
    <div className='min-h-screen bg-darkBg px-4 sm:px-24 py-14 '>

      <div className="flex justify-between items-center pb-14 md:flex-row flex-col gap-5">

        <div className="relative ">
          <input type="search" className='placeholder:text-gray-200 focus:border-none text-gray-200 bg-darkElem py-4 pl-20 pr-10 sm:pr-28 rounded-md' placeholder='Search for a country...' />
          <AiOutlineSearch className='absolute top-4 left-7 text-gray-100 text-2xl' />
        </div>

        <div className="relative group w-auto">
          <button name="region" className='bg-darkElem flex justify-center items-center gap-3 text-gray-200 py-4 rounded-md px-8'>Filter by Region
            <AiOutlineDown className=' text-xl  text-gray-100' />
          </button>
          <div className="group-hover:flex hidden absolute mt-2 bg-darkElem min-w-full text-gray-200 py-4 rounded-md px-8 flex-col gap-3 transition duration-300 ease-in-out">
            <p value="Africa">Africa</p>
            <p value="America">America</p>
            <p value="Asia">Asia</p>
            <p value="Europe">Europe</p>
            <p value="Oceania">Oceania</p>
          </div>
        </div>
      </div>
      <div className="grid gap-14 justify-center items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {
          Country.map((i, index) => (
            <div key={index} className="flex flex-col w-72 bg-darkElem rounded-md overflow-hidden">
              <img src={i.flags[0]} alt="Flag" />
              <div className="text-darkText p-6">
                <h1 className='text-xl pb-4 font-semibold'>{i.name.common}</h1>
                <p className='text-gray-300 font-light'><b className='text-gray-200'>Population:</b> {i.population}</p>
                <p className='text-gray-300 font-light'><b className='text-gray-200'>Region:</b> {i.region}</p>
                <p className='text-gray-300 font-light'><b className='text-gray-200'>Capital:</b> {i.capital}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home