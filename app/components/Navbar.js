'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="text-white font-bold text-xl">AbuBakarAnsari Simple Blog</Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home </Link>
                                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About </Link>
                                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            </div>
                        </div>
                        <div className={isNavExpanded ? "block" : "hidden"}>
                            <div className="justify-center absolute bg-gray-700 top-16 left-0 w-full flex items-baseline space-x-4">
                                <Link href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home </Link>
                                <Link href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About </Link>
                                <Link href="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                            </div>
                        </div>
                        <button
                        onClick={() => {
                            setIsNavExpanded(!isNavExpanded)
                        }} 
                        className='md:hidden block text-xl text-white'>
                        {
                            isNavExpanded ? <AiOutlineClose /> : <FaBars />
                        }
                    </button>
                </div>
            </div>
        </nav >
        </>
    )
}

export default Navbar
