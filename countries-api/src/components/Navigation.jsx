import React from 'react'
import { BsFillMoonFill } from 'react-icons/bs'

const Navigation = () => {
    return (
        <nav className='bg-darkElem text-darkText px-24 py-6 flex justify-between'>
            <h2 className='text-2xl font-bold'>Where in the world?</h2>
            <button className="flex justify-center items-center gap-2">
                <BsFillMoonFill />
                <p>Dark Mode</p>
            </button>
        </nav>
    )
}

export default Navigation