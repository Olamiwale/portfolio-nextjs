import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function PreviewProps({img, url1,url2, des}) {
  return (
    <div className='flex flex-col justify-center w-full items-center mt-[10%] '>
        <Image src={img} alt='/' width={400} height={80} />
        <p className='text-xl mt-[10%]'>{des}</p>

        <div className='flex p-5 space-x-5'>
          <Link href={url1} className='bg-blue-300 p-5 rounded-full 
        shadow-xl shadow-gray-700 text-xl font-bold'>Github</Link>
          <Link href={url2} className='bg-blue-300 p-5 rounded-full 
        shadow-xl shadow-gray-700 text-xl font-bold' >Source code</Link>  
        </div>
        
        
    </div>
  )
}
