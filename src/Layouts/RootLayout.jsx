import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'
import pImg from '../assets/images.jfif'
import Home from '../Pages/Home/Home'
import { IoSearch } from 'react-icons/io5'
import Drawyer from '../components/Drawyer/Drawyer'
import Logo from '../components/logo/Logo'

const RootLayout = () => {
    const [city, setCity] = useState("Comilla");
    const [searchTerm, setSearchTerm] = useState("Dhaka");
    const handleSubmit = (e) => {
        e.preventDefault()
        const d = e.target.name.value
        setSearchTerm(d);
    }
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col min-h-screen">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300 px-3 sm:px-5 lg:px-8 py-3 gap-3 flex-wrap lg:flex-nowrap">

                    {/* Left Section */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <label
                            htmlFor="my-drawer-4"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                                className="size-5"
                            >
                                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                                <path d="M9 4v16"></path>
                                <path d="M14 10l2 2l-2 2"></path>
                            </svg>
                        </label>

                        <Logo />
                    </div>

                    {/* Search Section */}
                    <div className="w-full order-3 lg:order-none lg:flex-1 lg:px-6">
                        <form
                            onSubmit={handleSubmit}
                            className="relative w-full max-w-2xl mx-auto group"
                        >
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <IoSearch className="w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                            </div>

                            <input
                                name="name"
                                type="text"
                                placeholder="Search for something..."
                                className="block w-full p-3 sm:p-4 pl-10 sm:pl-11 pr-24 text-sm text-slate-700 bg-white border border-slate-200 rounded-2xl shadow-sm transition-all duration-300
                        placeholder:text-slate-400
                        focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 focus:outline-none focus:shadow-md
                        hover:border-slate-300"
                            />

                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl
                        shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-[1.02]
                        active:scale-[0.98] transition-all duration-200 focus:ring-2 focus:ring-blue-300"
                            >
                                Search
                            </button>
                        </form>
                    </div>

                    {/* Profile Section */}
                    <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0 ml-auto">
                        <img
                            className="rounded-full h-9 w-9 sm:h-10 sm:w-10 border object-cover"
                            src={pImg}
                            alt=""
                        />

                        <div className="hidden sm:block">
                            <p className="text-xs sm:text-sm text-gray-500">
                                Hello,
                            </p>

                            <h1 className="text-sm sm:text-lg lg:text-xl font-medium leading-tight">
                                Gigga Nigga
                            </h1>
                        </div>
                    </div>
                </nav>

                {/* Page Content */}
                <div className="flex-1 p-3 sm:p-4 lg:p-6 overflow-x-hidden">
                    <Outlet context={{ searchTerm, city, setCity }} />
                </div>
            </div>

            <Drawyer searchTerm={searchTerm} />
        </div>
    )
}

export default RootLayout