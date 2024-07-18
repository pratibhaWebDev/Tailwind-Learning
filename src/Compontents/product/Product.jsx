import React from 'react'
import skills from '../img/pwskills.png'
import job from '../img/job.png'
import bag from '../img/bag.png'
import network from '../img/network.png'
import first from '../img/medal.png'

const Product = () => {
  return (
    
      <div className='bg-slate-950 h-auto w-100 flex flex-wrap flex-col items-center text-center  '>
        <div className='w-full h-auto flex flex-col flex-wrap items-center text-center'>
          <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center'>Our Products</p>
          <div className='w-20 h-1 border-b-4 border-yellow-500 rounded-2xl items-center mt-2 md:mt-4 mb-12'></div>
        </div>

        <div className='w-full flex flex-wrap my-2 mb-8 justify-around'>
          <div className=' w-[220px] h-auto flex flex-col flex-wrap items-center mx-3 my-5 border-2 rounded-lg p-4'>
            <img className='w-20 h-20 my-4' src={skills} alt="" />
            <p className='text-xl font-bold text-white'>Skills Lab</p>
            <p className='text-sm text-gray-500'>Supercharge your project development with our robust lab.</p>
          </div>

          <div className='w-[220px] h-auto flex flex-col flex-wrap items-center mx-3 my-5  border-2 rounded-lg p-5'>
            <img className='w-20 h-20 my-4' src={job} alt="" />
            <p className='text-xl font-bold text-white'>Job Portal</p>
            <p className='text-sm text-gray-500'>Use exceptional templates for a stand-our resume minus the sign up process.</p>
          </div>

          <div className='w-[220px] h-auto flex flex-col flex-wrap items-center mx-3 my-5  border-2 rounded-lg p-5'>
            <img className='w-20 h-20 my-4' src={bag} alt="" />
            <p className='text-xl font-bold text-white'>Experience Portal</p>
            <p className='text-sm text-gray-500'>PW skills's self-paced experience portal prioritises hands-on training with 570+ internship projects.</p>
          </div>

          <div className='w-[220px] h-auto flex flex-col flex-wrap items-center mx-3 my-5  border-2 rounded-lg p-5'>
            <img className='w-20 h-20 my-4' src={network} alt="" />
            <p className='text-xl font-bold text-white'>Affiliate</p>
            <p className='text-sm text-gray-500'>Explore affiliate marketing opportunities with PW Skills and attain financial freedom.</p>
          </div>

          <div className='w-[220px] h-auto flex flex-col flex-wrap items-center mx-3 my-5  border-2 rounded-lg p-5'>
            <img className='w-20 h-20 my-4' src={first} alt="" />
            <p className='text-xl font-bold text-white'>Hall of fame</p>
            <p className='text-sm text-gray-500'>Our student placements and 100k+ career transitions speak volumes about our courses.</p>
          </div>
        </div>
      
    </div>
  )
}

export default Product
