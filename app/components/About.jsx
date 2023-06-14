import React from 'react'

import Image from 'next/image'

export default function About() {
  return (
    <div id='about' className='pt-[80px]'>
        <div className='p-8'>
      <div className='md:grid grid-cols-3 gap-10'>
        <div className='col-span-2'>
          <p className='font-bold text-3xl'>About</p>
          <h2 className='py-4 font-semibold text-xl'>Who I Am?</h2>
          <p className='md:text-xl'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='md:text-xl py-8'>
            I started web development in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wire-frames all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            development and various front-end technologies.
          </p>
         
            <p className='md:w-[300px] m-auto text-center font-semibold p-3 bg-blue-300 hover:scale-105 ease-in duration-500 shadow-2xl'> 
            Check out some of my latest projects
            </p>
        </div>
        
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src='/about.jpg' 
          width={300} 
          height={30} 
          alt='About-Image'
          className='shadow-xl rounded-md py-4 w-full'/>
        </div>
      </div>
    </div>
    </div>
  )
}
