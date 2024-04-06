

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FaArrowAltCircleLeft } from 'react-icons/fa'

export default function PreviewProps({img1,url1,url2, des, title}) {
  return (
    <div className='flex flex-col w-full mt-[10%] '>

<div className='text-2xl'>
  <Link href="/">
   <FaArrowAltCircleLeft size={40}/> 
  </Link>
 </div>

      <div className='flex justify-center'>
        <Image src={img1} alt='/' width={500} height={300} />
      </div>
        

        <div className='mt-[50px]'>
           <p className='text-[15px] items-center py-8'>
            <span className='font-bold text-xl uppercase'>Project title : </span>{title}</p>
        <p className='text-xl items-center text-[12px] lg:text-[14px]'>
          <span className='uppercase font-bold'></span>{des}</p>

        </div>
       
        <div className='flex py-[50px] space-x-5'>
          <Link href={url1} className='bg-blue-300 p-5 rounded-full 
        shadow-xl shadow-gray-700 text-xl font-bold'>Github</Link>
          <Link href={url2} className='bg-blue-300 p-5 rounded-full 
        shadow-xl shadow-gray-700 text-xl font-bold' >Preview</Link>  
        </div>
        
        
    </div>
  )
}
