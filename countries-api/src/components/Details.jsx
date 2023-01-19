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
            <Link to="/" className='bg-lightElem dark:bg-darkElem text-lightText dark:text-darkText flex justify-center gap-2 items-center w-fit py-2 px-9 rounded-lg shadow mb-10 lg:mb-24'> <IoArrowBackSharp /> Back</Link>
            {Details.map((i, index) =>
                <div key={index} className="flex flex-col gap-10 xl:gap-14 lg:gap-44 lg:flex-row">
                    <img className='h-auto lg:h-72 shadow-lg w-fit' src={i.flags[0]} alt={i.name?.common} />
                    <div className="flex flex-col">
                        <h1 className='text-lightText dark:text-darkText font-bold text-4xl'> {i.name?.common} </h1>
                        <div className="flex flex-col lg:flex-row gap-10 my-10 lg:gap-40">
                            <div className="flex flex-col gap-2 w-fit">
                                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Native Name:</b> {i?.name?.common}</p>
                                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Population:</b> {i?.population}</p>
                                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Region:</b> {i?.region}</p>
                                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Sub Region:</b> {i?.subregion}</p>
                                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Capital:</b> {i?.capital}</p>
                            </div>
                            <div className="flex flex-col w-fit gap-2">
                                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Top Level Domain:</b> {i?.tld}</p>
                                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Currencies:</b> {i?.currencies?.EUR?.name}</p>
                                <p className='dark:text-gray-300 text-gray-700 font-light'><b className='dark:text-gray-200 text-gray-800'>Languages:</b> {Object.values(i.languages)}</p>
                            </div>
                        </div>
                        <h2 className='dark:text-gray-200 text-gray-800 mb-4'>Border Countries:</h2>
                        <div className='dark:text-gray-300 text-gray-700 font-light flex gap-2 w-fit rounded-lg mb-24 flex-wrap'>
                            {i.borders.map(i => <span className='bg-lightElem dark:bg-darkElem text-lightText dark:text-darkText rounded-md py-2 px-6 shadow'> {i}</span>)}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Details