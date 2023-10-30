import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectProps({title,url,img}) {
  return (
     <div className=' rounded-xl p-2'>

      <Link href={url}>
     
 
    <div className='flex justify-center items-center group'>

     <Image 
     className='rounded-xl w-[full] group-hover:opacity-10' 
     src={img} 
      alt='/' 
     width={400} 
     height={80} /> 
     <div className='absolute text-white justify-center items-center flex   flex-col gap-4 opacity-0 group-hover:opacity-100'>
        <p className='font-bold text-xl text-red-500'>{title}</p>
        <p className='bg-gray-600 p-2 px-4 rounded-md cursor-pointer text-red-500'>More</p>
         
    </div>
     
    </div>   
 </Link>

 </div>
    
  )
}

