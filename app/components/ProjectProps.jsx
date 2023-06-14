import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectProps({title,url}) {
  return (
     <div className=' rounded-xl p-2'>

    <div className='flex justify-center items-center group'>
    <Image className='rounded-xl w-[full] group-hover:opacity-10' src='/nextflix.png' alt='/' width={400} height={80} /> 
    <div className='absolute text-white justify-center items-center flex flex-col gap-4 opacity-0 group-hover:opacity-100'>
        <p className='font-bold text-xl text-red-500'>{title}</p>
        <Link href={url}>
         <p className='bg-gray-600 p-2 px-4 rounded-md cursor-pointer text-red-500'>More</p>
       
        </Link>
       
    </div>
    </div>   


 </div>
    
  )
}

