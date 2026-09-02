import React, { useContext } from 'react'
import { FaBars, FaSearch, FaUser } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { IoIosArrowUp } from 'react-icons/io'
import { newContext } from '../Context/Context'

function Header() {

    const { count } = useContext(newContext);

    return (
        <header className='bg-linear-to-r from-slate-800 via-zinc-700 to-slate-600 text-white'>
            <div className='flex justify-between items-center p-4'>
                {/* LOGO */}
                <div className='flex items-center gap-2 cursor-pointer'>
                    <img className='h-15 rounded-full' src="https://t3.ftcdn.net/jpg/03/75/93/70/360_F_375937083_fODyJ6AxyHNGZZqaTx3m1XodB7pPI3Kn.jpg" alt="Logo" />
                    <span className='text-2xl font-bold'>E-LITE</span>
                </div>
                {/* INPUT */}
                <div className='hidden bg-transparent border border-white lg:flex gap-5 text-lg px-2 py-1 text-white rounded-lg items-center'>
                    <div className='flex hover:border-amber-900'>
                        <span>All</span>
                        <span className='relative'><IoIosArrowUp className='absolute bottom-1 cursor-pointer' /></span>
                    </div>
                    <div><input className='text-center max-w-125 text-lg outline-none py-1' type="text" placeholder='Search Your Products' /></div>
                    <div><FaSearch size={20} className='cursor-pointer' /></div>
                </div>
                {/* SIGNUP */}
                <div className='hidden lg:flex gap-5 items-center'>
                    <div className='cursor-pointer relative group'>
                        <GrCart size={35} />
                        <span className='absolute -top-3 -right-1 h-5 w-5 rounded-full bg-red-500 flex items-center justify-center text-md font-bold group-hover:scale-110 transition-all duration-200'>{count}</span>
                    </div>
                    <div className='bg-amber-500 px-2 py-1 flex items-center gap-2 text-lg rounded-lg cursor-pointer font-semibold'><FaUser />Login/SignUp</div>
                </div>
                <div className='lg:hidden cursor-pointer'><FaBars size={25} /></div>
            </div>
        </header>
    )
}

export default Header