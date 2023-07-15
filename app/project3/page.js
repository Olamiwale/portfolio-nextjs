import React from 'react'
import Image from 'next/image';

export default function page() {
  return (
    <div>
      <div className=' w-full h-[40%]'>
      <Image className='w-full'  src='/nextflix.png' alt='/' width={200} height={40} /> 
      </div>

      <div className='p-8'>
        <p>i love you lord, for your mercies never fails me, in all my life, ive been for your goodness, whenever i wake up, i see your glory in my life thank you Jesus,
        Because you are good and your mercy endures for ever.
       i love you lord, for your mercies never fails me, in all my life, ive been for your goodness, whenever i wake up, i see your glory in my life thank you Jesus,
        Because you are good and your mercy endures for ever.
       i love you lord, for your mercies never fails me, in all my life, ive been for your goodness, whenever i wake up, i see your glory in my life thank you Jesus,
        Because you are good and your mercy endures for ever.
      i love you lord, for your mercies never fails me, in all my life, ive been for your goodness, whenever i wake up, i see your glory in my life thank you Jesus,
        Because you are good and your mercy endures for ever.
        </p>
      </div>

      

      <div className='flex p-5 space-x-5'>
        <button className='bg-blue-300 p-5 rounded-full shadow-xl shadow-gray-700 text-xl font-bold'>
          <a href='https://github.com/Olamiwale/Netflix-clone-with-firebasee'>
            Preview
          </a>
          </button>
        <button className='bg-blue-300 p-5 rounded-full shadow-xl shadow-gray-700 text-xl font-bold'>
          <a href='https://github.com/Olamiwale/Netflix-clone-with-firebasee'>
            Github 
          </a>
         </button>
      </div>
    </div>
  )
}
