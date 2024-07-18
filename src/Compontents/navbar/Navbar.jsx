import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-950 w-full '>
      <nav className='w-full h-14 md:bg-gray-950 flex justify-between px-4 md:px-6 items-center'>
        <div className='text-2xl text-blue-800 font-bold'>Web Dev</div>
        <ul className='md:flex hidden font-semibold text-white'>
          <li  className='mx-[10px] cursor-pointer'>Home</li>
          <li className='mx-[10px] cursor-pointer'>About Us</li>
          <li className='mx-[10px] cursor-pointer'>Contact Us</li>
        </ul>
        <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer'>Login / Signup</div>
        <div className='md:hidden '>
          <a className='text-4xl text-white' href="">&#8801;</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
