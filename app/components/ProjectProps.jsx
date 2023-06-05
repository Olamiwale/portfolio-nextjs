import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectProps({title, tech, projectUrl}) {
  return (
    
        <div className='p-8 flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5e5bbd] to-[#4c659b]'>
    <Image className='rounded-xl group-hover:opacity-10' src='/about.jpg' alt='/' width={300} height={40} /> 
    <div className='absolute opacity-0 group-hover:opacity-100'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
            <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
    </div>
 </div>
    
  )
}
