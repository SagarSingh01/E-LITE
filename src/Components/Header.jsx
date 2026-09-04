import React, { useContext } from 'react'
import { FaBars, FaSearch, FaUser, FaChevronDown } from 'react-icons/fa'
import { GrCart } from 'react-icons/gr'
import { newContext } from '../Context/Context'
import Filter from '../Cards/Filter'
import Logo from "../assets/E-LITE.png"

function Header() {
    const { count } = useContext(newContext)

    return (
        <header className='sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/95 text-white shadow-xl backdrop-blur-xl'>
            {/* MAIN NAVBAR */}
            <div className='flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8'>
                {/* LOGO */}
                <div className='group flex shrink-0 cursor-pointer items-center gap-3'>
                    <div className='relative'>
                        <div className='absolute -inset-1 rounded-full bg-amber-400/20 blur-md transition-all duration-300 group-hover:bg-amber-400/40' />
                        <img
                            className='relative h-11 w-11 rounded-full object-cover ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:ring-amber-400/40'
                            src={Logo}
                            alt='E-LITE'
                        />
                    </div>
                    <div className='hidden sm:block'>
                        <h1 className='text-xl font-black tracking-wide transition-colors duration-200 group-hover:text-amber-400'>
                            E-LITE
                        </h1>
                    </div>
                </div>

                {/* SEARCH */}
                <div className='hidden w-100 lg:block'>
                    <div className='group flex h-11 items-center overflow-hidden rounded-xl border border-white/10 bg-white/6 shadow-inner transition-all duration-300 focus-within:border-amber-400/50 focus-within:bg-white/9 focus-within:shadow-[0_0_20px_rgba(251,191,36,0.08)]'>
                        {/* CATEGORY */}
                        <button className='flex h-full shrink-0 cursor-pointer items-center gap-2 border-r border-white/10 px-4 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/5 hover:text-white'>
                            All
                            <FaChevronDown
                                size={10}
                                className='text-slate-500 transition-transform duration-200'
                            />
                        </button>

                        {/* INPUT */}
                        <input
                            type='text'
                            placeholder='Search products...'
                            className='h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500'
                        />

                        {/* SEARCH BUTTON */}
                        <button className='mr-1 flex h-9 w-10 cursor-pointer items-center justify-center rounded-lg text-slate-400 transition-all duration-200 hover:bg-amber-400 hover:text-slate-950 active:scale-95'>
                            <FaSearch size={15} />
                        </button>
                    </div>
                </div>

                {/* ACTIONS */}
                <div className='flex shrink-0 items-center gap-1 sm:gap-2'>
                    {/* SEARCH MOBILE */}
                    <button className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-transparent text-slate-300 transition-all duration-200 hover:border-white/10 hover:bg-white/10 hover:text-white active:scale-95 lg:hidden'>
                        <FaSearch size={18} />
                    </button>

                    {/* CART */}
                    <button className='group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-transparent text-slate-200 transition-all duration-200 hover:border-white/10 hover:bg-white/10 hover:text-amber-400 active:scale-95'>
                        <GrCart
                            size={24}
                            className='transition-transform duration-200 group-hover:scale-110'
                        />
                        {count > 0 && (
                            <span className='absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-400 px-1 text-[10px] font-black text-slate-950 shadow-lg ring-2 ring-slate-950'>
                                {count}
                            </span>
                        )}
                    </button>

                    {/* DIVIDER */}
                    <div className='mx-1 hidden h-7 w-px bg-white/10 sm:block' />

                    {/* LOGIN */}
                    <button className='hidden cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/6 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-amber-400/30 hover:bg-amber-400 hover:text-slate-950 hover:shadow-lg hover:shadow-amber-400/10 active:scale-95 sm:flex'>
                        <FaUser size={14} />
                        <span>Login</span>
                    </button>

                    {/* MOBILE MENU */}
                    <button className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-transparent text-slate-300 transition-all duration-200 hover:border-white/10 hover:bg-white/10 hover:text-white active:scale-95 lg:hidden'>
                        <FaBars size={22} />
                    </button>
                </div>
            </div>

            {/* CATEGORY NAVIGATION */}
            <div className='border-t border-white/6 bg-black/10'>
                <Filter />
            </div>
        </header>
    )
}

export default Header;