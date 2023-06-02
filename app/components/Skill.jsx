import React from 'react'
import SkillsLogo from './SkillsLogo'

import Css from './asset/css.png'
import Html from './asset/html.png'
import ImgGit from './asset/github1.png'
import Js from './asset/javascript.png'
import Mongo from './asset/mongo.png'
import Next from './asset/nextjs.png'
import Node from './asset/node.png'
import Firebase from './asset/firebase.png'
import Aws from './asset/aws.png'
import Tailwind from './asset/tailwind.png'
import Shopify from './asset/shopify.png'


export default function Skill({title, logo}) {
  return (
    <div className='py-8'>
        <div>
            <p className='font-bold text-2xl py-4'>Skills</p>
            <p className='font-semibold text-xl py-4'>What I can do</p>
        </div>
        
          <div className='grid grid-cols-2 md:grid-cols-3 px-8'>
          
           <SkillsLogo logo={Css} title='CSS' /> 
           <SkillsLogo logo={Html} title='HTML' /> 
           <SkillsLogo logo={ImgGit} title='Github' /> 
           <SkillsLogo logo={Js} title='JavaScript' /> 
           <SkillsLogo logo={Mongo} title='Mongo' /> 
           <SkillsLogo logo={Next} title='Next' /> 
           <SkillsLogo logo={Node} title='Node' /> 
           <SkillsLogo logo={Firebase} title='Firebase' /> 
           <SkillsLogo logo={Tailwind} title='Tailwind' /> 
           <SkillsLogo logo={Aws} title='AWS' /> 
        </div>
        
        
        
    </div>
  )
}
