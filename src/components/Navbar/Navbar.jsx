import React from 'react'
import pImg from '../../assets/images.jfif'
import { IoSearch } from 'react-icons/io5'

const Navbar = () => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        const d = e.target.name.value
    }
    return (
        <nav className="navbar w-full bg-base-300">
            <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                {/* Sidebar toggle icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
            </label>
            <div className="px-20 flex items-center gap-4">
                <img className='rounded-full h-10 w-10 border' src={pImg} alt="" />
                <div>
                    <p>Hello,</p>
                    <h1 className='text-xl font-medium'>Gigga Nigga</h1>
                </div>
            </div>
            <div className="flex items-center max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="relative w-full">
                    <input
                        name='name'
                        type="text"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none transition-all"
                    />
                    <button
                        type="submit"
                        className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-600 rounded-r-lg border border-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors"
                    >
                        <IoSearch size={20} />
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
        </nav>
    )
}

export default Navbar