'use client'

import { useEffect, useState } from "react"
// import { FaPhone } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import HamburgerButton from './menuBtn';
import Link from "next/link";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [searchIsOpen, setSearchIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed w-full top-0 left-0 z-[9999] transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-sm backdrop-blur-xl' : 'bg-transparent text-white'}`}>
            <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'py-1.5' : 'py-5'}  flex flex-col items-center justify-between relative`}>
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <div>
                        {/* <img src="//" className="w-[160px] h-[40px] bg-white/10" alt="Logo" /> */}
                        <div className="flex flex-col">
                            <span><span className="text-teal-400 mr-1 lg:text-lg font-bold">WP</span>Academy</span>
                            <p className="text-xs lg:text-sm opacity-80 whitespace-nowrap">Learn, Build, Lunch.</p>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-8">
                        <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md whitespace-nowrap">خانه</a>
                        <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md whitespace-nowrap">دوره ها</a>
                        <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md whitespace-nowrap">وبلاگ</a>
                        <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md whitespace-nowrap">درباره ما</a>
                        <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md whitespace-nowrap">ارتباط با ما</a>
                    </div>
                    <div className="flex items-center !text-white gap-3 lg:gap-6">
                        <div className={`flex items-center gap-4 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                            {/* <FaPhone size={20} className="hidden lg:inline transition-all duration-200 hover:opacity-70 cursor-pointer" /> */}
                            <button onClick={() => setSearchIsOpen(true)}>
                                <FiSearch size={22} className="transition-all duration-200 hover:opacity-70 cursor-pointer" />
                            </button>

                        </div>
                        <button className="hidden lg:flex bg-teal-400 px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_10px_#00D5BE] whitespace-nowrap">ورود / ثبت نام</button>
                        <button className="flex lg:hidden z-999">
                            <HamburgerButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} isScrolled={scrolled} />
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className={`w-full flex flex-col p-7 z-999 bg-white/80 shadow-sm backdrop-blur-xl rounded-lg text-gray-800 mt-3 mb-2 transition-all duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col gap-4">
                            <Link href={''}>خانه</Link>
                            <Link href={''}>دوره ها</Link>
                            <Link href={''}>وبلاگ</Link>
                            <Link href={''}>درباره ما</Link>
                            <Link href={''}>ارتباط با ما</Link>
                        </div>
                        <button className="bg-teal-400 mt-8 !text-white px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-[0_0_10px_#00D5BE] whitespace-nowrap">ورود / ثبت نام</button>
                    </div>
                )}

                {searchIsOpen && (
                    <div className="absolute z-999 top-0 left-0 max-w-[1440px] mx-auto px-4 sm:px-10 lg:px-15 bg-white w-full py-5">
                        <button onClick={() => setSearchIsOpen(false)} className="flex justify-end text-gray-800 w-full mb-5">
                            <IoClose size={26} />
                        </button>
                        <div className="flex items-center flex-nowrap gap-4">
                            <input type="text" placeholder="جستجو..." className="w-full border border-slate-400 rounded-full placeholder:text-slate-300 py-3 px-4 outline-hidden focus:ring-2 focus:ring-teal-400 focus:border-transparent" />
                            <button className="flex justify-center gap-5 bg-teal-400 px-3 py-3 rounded-full transition-all duration-200 hover:shadow-md shadow-teal-400 whitespace-nowrap lg:w-30">
                                <span>جستجو</span>
                            </button>
                        </div>

                    </div>
                )}
            </div>

            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="absolute top-0 left-0 h-screen w-screen bg-black/50"></div>
            )}

            {searchIsOpen && (
                <div onClick={() => setSearchIsOpen(false)} className="absolute top-0 left-0 h-screen w-screen bg-black/50"></div>
            )}

        </div>
    )
}