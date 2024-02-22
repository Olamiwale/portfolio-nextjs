import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PreviewProps({img1,img2,url1,url2, des, title}) {
  return (
    <div className='flex flex-col w-full mt-[10%] '>

<p>back</p>

      <div className='flex'>
        <Image src={img1} alt='/' width={500} height={400} />
        <Image src={img2} alt='/' width={500} height={400} />
      </div>
        

        <div className='mt-[50px]'>
           <p className='text-xl items-center py-8'><span className='font-bold text-2xl uppercase'>Project title : </span>{title}</p>
        <p className='text-xl items-center'>
          <span className='uppercase font-bold text-2xl'>Description : </span>{des}</p>

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
