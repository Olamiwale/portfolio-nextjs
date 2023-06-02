import React from 'react'
import Image from 'next/image'

export default function SkillsLogo({title, logo}) {
  return (
    <div>
         <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='grid grid-cols-2 gap-3 p-4'>
                <Image src={logo} width={40} height={30} alt='/' />
                  <h3 className='text-xl font-semibold'>{title}</h3>
              </div>
              
            </div>
    </div>
  )
}
