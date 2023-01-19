import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { IoArrowBackSharp } from 'react-icons/io5'
import axios from 'axios'

const Details = () => {


    useEffect(() => {
        loadData()
    }, [])
    const { name } = useParams()
    const [Details, setDetails] = useState([])
    const loadData = async () => {
        const data = await axios.get(`https://restcountries.com/v3/name/${name}`);
        setDetails(data.data)
    }
    return (
        <div className='min-h-screen dark:bg-darkBg bg-lightBg px-4 sm:px-24 py-14'>
            <Link to="/" className='bg-darkElem text-darkText flex justify-center gap-2 items-center w-fit py-2 px-9 rounded-lg shadow mb-24'> <IoArrowBackSharp /> Back</Link>
            {Details.map((i, index) =>
                <div key={index} className="flex flex-row gap-44">
                    <img className='h-72' src={i.flags[0]} alt={i.name.common} />
                    <div className="flex flex-col">
                        <h1 className='text-darkText font-bold text-4xl'> {i.name.common} </h1>
                        <div className="flex flex-wrap">
                            <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Native Name:</b> {i.name.nativeName.nld.common}</p>
                            <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Population:</b> {i.population}</p>
                            <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Region:</b> {i.region}</p>
                            <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Sub Region:</b> {i.subregion}</p>
                            <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Capital:</b> {i.capital}</p>
                            <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Top Level Domain:</b> {i.tld}</p>
                            <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Currencies:</b> {i.currencies.EUR.name}</p>
                            <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Languages:</b> {i.languages.deu}</p>
                        </div>
                        <p className='dark:text-gray-300 text-gray-700 font-light'>
                            <span className='bg-darkElem text-darkText flex justify-center gap-2 items-center w-fit py-2 px-9 rounded-lg shadow mb-24'> France </span>
                            <span className='bg-darkElem text-darkText flex justify-center gap-2 items-center w-fit py-2 px-9 rounded-lg shadow mb-24'> France </span>
                            <span className='bg-darkElem text-darkText flex justify-center gap-2 items-center w-fit py-2 px-9 rounded-lg shadow mb-24'> France </span>
                        </p>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Details