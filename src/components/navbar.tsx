'use client'

import { useEffect, useState } from "react"
import { FaPhone } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={`fixed w-full top-0 left-0 z-[9999] transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-sm backdrop-blur-xl' : 'bg-transparent text-white'}`}>
            <div className={`max-w-[1440px] mx-auto px-15 transition-all duration-300 ${scrolled ? 'py-3' : 'py-7'} flex items-center justify-between`}>
                {/* Logo */}
                <div>
                    {/* <img src="//" className="w-[160px] h-[40px] bg-white/10" alt="Logo" /> */}
                    <div className="flex flex-col">
                        <span><span className="text-teal-400 mr-1 text-lg font-bold">WP</span>Academy</span>
                        <p className="text-sm opacity-80">Learn, Build, Lunch.</p>
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md">خانه</a>
                    <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md">دوره ها</a>
                    <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md">وبلاگ</a>
                    <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md">درباره ما</a>
                    <a className="transition-all duration-200 hover:text-teal-400 hover:text-shadow-md">ارتباط با ما</a>
                </div>
                <div className="flex items-center !text-white gap-6">
                    <div className={`flex items-center gap-4 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
                        <FaPhone size={20} className="transition-all duration-200 hover:opacity-70 cursor-pointer"/>
                        <FiSearch size={22} className="transition-all duration-200 hover:opacity-70 cursor-pointer"/>
                    </div>
                    <button className="bg-teal-400 px-3 py-2 rounded-lg transition-all duration-200 hover:shadow-md shadow-teal-400">ورود / ثبت نام</button>
                </div>
            </div>
        </div>
    )
}