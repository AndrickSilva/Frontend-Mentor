import React, { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai'
import axios from 'axios'


const Home = () => {
  useEffect(() => {
    loadData(regionLink)
  }, [])

  const [Country, setCountry] = useState([])
  const loadData = async (regionLink) => {
    const data = await axios.get(`https://restcountries.com/v3/${regionLink}`);
    setCountry(data.data)
  }

  let regionLink = "all"
  const handleFilter = (region) => {
    if (region == "All") {
      regionLink = "all"
    }
    else {
      regionLink = `/region/${region}`
    }
    loadData(regionLink)
  }

  const [inputText, setInputText] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText == "") {
      regionLink = "all"
    }else
    regionLink = `/name/${inputText}`
    loadData(regionLink)
  }


  return (
    <div className='min-h-screen dark:bg-darkBg bg-lightBg px-4 sm:px-24 py-14 '>

      <div className="flex justify-between items-center pb-14 md:flex-row flex-col gap-5">

        <form className="relative " onSubmit={(e)=>handleSubmit(e)}>
          <input type="search" className='shadow-lg dark:placeholder:text-gray-200 placeholder:text-gray-800 focus:border-none dark:text-gray-200 text-gray-800 dark:bg-darkElem bg-lightElem py-4 pl-20 pr-10 sm:pr-28 rounded-md' placeholder='Search for a country...' value={inputText} onChange={(e) => setInputText(e.target.value)} />
          <AiOutlineSearch className='absolute top-4 left-7 dark:text-gray-100 text-gray-900 text-2xl' />
        </form>

        <div className="relative group w-auto dark:bg-darkElem bg-lightElem">
          <button name="region" className='shadow-lg dark:bg-darkElem bg-lightElem flex justify-center items-center gap-3 dark:text-gray-200 text-gray-800 py-4 rounded-md px-8'>Filter by Region
            <AiOutlineDown className=' text-xl  dark:text-gray-100 text-gray-900' />
          </button>
          <div className="shadow-lg group-hover:flex hidden absolute mt-2 dark:bg-darkElem bg-lightElem min-w-full dark:text-gray-200 text-gray-800 rounded-md flex-col transition-all duration-300 ease-in-out">
            <p className='pt-2 pb-1 px-8 cursor-pointer' value="All" onClick={(e) => handleFilter(e.currentTarget.innerText)}>All</p>
            <p className='py-1 px-8 cursor-pointer' value="Africa" onClick={(e) => handleFilter(e.currentTarget.innerText)}>Africa</p>
            <p className='py-1 px-8 cursor-pointer' value="America" onClick={(e) => handleFilter(e.currentTarget.innerText)}>America</p>
            <p className='py-1 px-8 cursor-pointer' value="Asia" onClick={(e) => handleFilter(e.currentTarget.innerText)}>Asia</p>
            <p className='py-1 px-8 cursor-pointer' value="Europe" onClick={(e) => handleFilter(e.currentTarget.innerText)}>Europe</p>
            <p className='pb-2 pt-1 px-8 cursor-pointer' value="Oceania" onClick={(e) => handleFilter(e.currentTarget.innerText)}>Oceania</p>
          </div>
        </div>
      </div>
      <div className="grid gap-14 justify-center items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {
          Country.map((i, index) => (
            <div key={index} className="shadow-lg flex flex-col w-72 dark:bg-darkElem bg-lightElem rounded-md overflow-hidden">
              <img src={i.flags[1]} alt="Flag" className='h-48' />
              <div className="text-darkText p-6">
                <h1 className='text-xl pb-4 font-semibold'>{i.name.common}</h1>
                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Population:</b> {i.population}</p>
                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Region:</b> {i.region}</p>
                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Capital:</b> {i.capital}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home