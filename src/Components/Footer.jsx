import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaArrowUp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import Logo from "../assets/E-LITE.png"

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className='mt-16 bg-slate-950 text-white'>
            {/* TOP ACCENT */}
            <div className='h-1 w-full bg-linear-to-r from-amber-500 via-orange-400 to-amber-500' />

            <div className='mx-auto max-w-7xl px-5 sm:px-6 lg:px-8'>
                {/* MAIN FOOTER */}
                <div className='grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16'>
                    {/* BRAND */}
                    <div>
                        <div className='flex items-center gap-3'>
                            <img
                                className='h-12 w-12 rounded-full object-cover ring-2 ring-white/10'
                                src={Logo}
                                alt='E-LITE Logo'
                            />
                            <div>
                                <h2 className='text-2xl font-black tracking-wide'>E-LITE</h2>
                                <p className='text-xs font-medium tracking-widest text-white/40'>SHOP SMART LIVE BETTER</p>
                            </div>
                        </div>

                        <p className='mt-5 max-w-sm text-sm leading-6 text-slate-400'>
                            Discover quality products, unbeatable deals, and a shopping experience designed to keep things simple, fast, and enjoyable.
                        </p>

                        {/* SOCIALS */}
                        <div className='mt-6 flex items-center gap-3'>
                            <a href='#' className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-500 hover:text-white'>
                                <FaFacebookF size={15} />
                            </a>
                            <a href='#' className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-pink-500 hover:text-white'>
                                <FaInstagram size={16} />
                            </a>
                            <a href='#' className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-sky-500 hover:text-white'>
                                <FaTwitter size={15} />
                            </a>
                            <a href='https://github.com/SagarSingh01/E-LITE' target='_blank' className='flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-slate-950'>
                                <FaGithub size={17} />
                            </a>
                        </div>
                    </div>

                    {/* SHOP */}
                    <div>
                        <h3 className='text-sm font-bold uppercase tracking-widest text-white'>Shop</h3>
                        <ul className='mt-5 space-y-3'>
                            {['All Products', 'Electronics', 'Fashion', 'Groceries', 'New Arrivals'].map((item) => (
                                <li key={item}>
                                    <a href='#' className='text-sm text-slate-400 transition-colors hover:text-amber-400'>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SUPPORT */}
                    <div>
                        <h3 className='text-sm font-bold uppercase tracking-widest text-white'>Support</h3>
                        <ul className='mt-5 space-y-3'>
                            {['Help Center', 'Shipping & Delivery', 'Returns & Refunds', 'Privacy Policy', 'Terms & Conditions'].map((item) => (
                                <li key={item}>
                                    <a href='#' className='text-sm text-slate-400 transition-colors hover:text-amber-400'>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className='text-sm font-bold uppercase tracking-widest text-white'>Get in Touch</h3>
                        <div className='mt-5 space-y-4'>
                            <div className='flex items-start gap-3'>
                                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-amber-400'>
                                    <FaEnvelope size={14} />
                                </div>
                                <div>
                                    <p className='text-xs text-slate-500'>Email</p>
                                    <p className='mt-1 text-sm text-slate-300'>e-lite@support.com</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-3'>
                                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-amber-400'>
                                    <FaPhoneAlt size={13} />
                                </div>
                                <div>
                                    <p className='text-xs text-slate-500'>Phone</p>
                                    <p className='mt-1 text-sm text-slate-300'>+91 XXXXX 00000</p>
                                </div>
                            </div>

                            <div className='flex items-start gap-3'>
                                <div className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-amber-400'>
                                    <FaMapMarkerAlt size={14} />
                                </div>
                                <div>
                                    <p className='text-xs text-slate-500'>Location</p>
                                    <p className='mt-1 text-sm text-slate-300'>India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* NEWSLETTER */}
                <div className='mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/4 p-5 sm:p-6'>
                    <div className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
                        <div>
                            <h3 className='text-lg font-bold'>Stay in the loop.</h3>
                            <p className='mt-1 text-sm text-slate-400'>
                                Get updates about new products and exclusive deals.
                            </p>
                        </div>

                        <div className='flex w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-white/5'>
                            <input
                                type='email'
                                placeholder='Enter your email'
                                className='min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500'
                            />
                            <button className='cursor-pointer bg-amber-500 px-5 text-sm font-bold text-slate-950 transition-colors hover:bg-amber-400'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* BOTTOM */}
                <div className='flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between'>
                    <p className='text-xs text-slate-500'>
                        © 2026 <span className='font-semibold text-slate-400'>E-LITE</span>. All rights reserved.
                    </p>

                    <div className='flex items-center gap-5 text-xs text-slate-500'>
                        <span className='cursor-pointer hover:text-slate-300'>Privacy</span>
                        <span className='cursor-pointer hover:text-slate-300'>Terms</span>
                        <span className='cursor-pointer hover:text-slate-300'>Cookies</span>
                    </div>

                    {/* BACK TO TOP */}
                    <button
                        onClick={scrollToTop}
                        className='group flex cursor-pointer items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-bold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/30 hover:bg-amber-500 hover:text-slate-950'
                    >
                        Back to top
                        <FaArrowUp
                            size={12}
                            className='transition-transform duration-300 group-hover:-translate-y-0.5'
                        />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer;