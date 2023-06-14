import React from 'react'
import SkillsLogo from './SkillsLogo'

import Css from './asset/css.png'
import Html from './asset/html.png'
import ImgGit from './asset/github1.png'
import Js from './asset/javascript.png'

import Next from './asset/nextjs.png'
import Node from './asset/node.png'
import Firebase from './asset/firebase.png'

import Tailwind from './asset/tailwind.png'



export default function Skill({title, logo}) {
  return (
    <div id='skills' className='p-8 pt-[80px]' >
        <div>
            <p className='font-bold text-2xl py-4'>Skills</p>
            <p className='font-semibold text-xl py-4'>What I can do</p>
        </div>
       
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
           <SkillsLogo logo={Css} title='CSS' /> 
           <SkillsLogo logo={Html} title='HTML' /> 
           <SkillsLogo logo={ImgGit} title='Github' /> 
           <SkillsLogo logo={Js} title='JavaScript' /> 
          
           <SkillsLogo logo={Next} title='Next' /> 
           <SkillsLogo logo={Node} title='Node' /> 
           <SkillsLogo logo={Firebase} title='Firebase' /> 
           <SkillsLogo logo={Tailwind} title='Tailwind' /> 
        
      
        </div>
        
          
        
        
        
    </div>
  )
}
