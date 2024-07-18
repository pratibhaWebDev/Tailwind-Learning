import React from 'react'
import women from '../img/happy.png'
import iso from '../img/iso.png'

const Footer = () => {
  return (
    
       <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
          <div>
            <div className='flex items-center'>
            <img className='w-20 h-16' src={women} alt="" />
            <p className='text-xl font-semibold'>Pratibha Yadav</p>
            </div>
            <p className='my-4'>Email us: support@pratibha.com</p>
            <img className='w-20 h-29' src={iso} alt="" />
          </div>

          <div className='flex flex-col flex-wrap'>
            <h2 className='font-bold text-xl mt-4'>Skills</h2>
            <div className='w-20 h-1 border-b-2 border-yellow-500 rounded-2xl my-1'></div>
            <div>
              <p>About Us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h2 className='font-bold text-xl mt-4'>Products</h2>
            <div className='w-20 h-1 border-b-2 border-yellow-500 rounded-2xl my-1'></div>
            <div>
              <p>Skills Lab</p>
              <p>Job Portal</p>
              <p>Experience Portal</p>
              <p>Become an affiliate</p>
              <p>Hall of fame</p>
            </div>
          </div>

          <div>
            <h2 className='font-bold text-xl mt-4'>Links</h2>
            <div className='w-20 h-1 border-b-2 border-yellow-500 rounded-2xl my-1'></div>
            <div>
              <p>Discord Channel</p>
              <p>Youtube</p>
              <p>Careers</p>
            </div>
          </div>

      </footer>
  )
}

export default Footer
