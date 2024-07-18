import React from 'react'
import book from '../img/books.png';
import student from '../img/students.png';
import data from '../img/data-science.png'

const About = () => {
  return (
    <div className='bg-slate-950 h-auto w-100 flex flex-wrap flex-col items-center text-center p-10'>
    <div className='w-full h-auto flex flex-wrap flex-col items-center text-center'>
      <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center'>"Pure Hardwork, No Shortcuts"</p>
      <div className='w-36 h-1 border-b-4 border-yellow-500 mt-2 rounded-2xl md:mt-4 mb-12'></div>
    </div>



    <div className='w-full flex flex-wrap justify-evenly'>
        <div className='w-46 flex flex-col items-center m-3'>
          <img className='w-20 ' src={book} alt="" />
          <p className='text-3xl font-bold text-white '>600+</p>
          <p className=' text-2xl font-bold text-gray-500'>Different Courses</p>
        </div>
    

        <div className='w-46 flex flex-col items-center m-3'>
          <img className='w-20 ' src={student} alt="" />
          <p className='text-3xl font-bold text-white '>700,000+</p>
          <p className=' text-2xl font-bold text-gray-500'>Students Enrolled</p>
        </div>
    

    
        <div className='w-46 flex flex-col items-center m-3'>
          <img className='w-20 ' src={data} alt="" />
          <p className='text-3xl font-bold text-white '>10,000+</p>
          <p className=' text-2xl font-bold text-gray-500'>Successful  Transition</p>
        </div>
     </div>

  </div>
  )
}

export default About
