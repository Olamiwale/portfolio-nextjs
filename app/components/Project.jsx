import React from 'react'
import ProjectProps from './ProjectProps'

export default function Project({title,projectUrl,tech}) {
  return (
    <div id='project' className='md:grid grid-cols-2 gap-5 p-8 lg:grid-cols-4'>
      <ProjectProps title='title of my project' projectUrl='/project.com' tech='tech' />
      <ProjectProps title='title of my project' projectUrl='/project.com' tech='tech' />
      <ProjectProps title='title of my project' projectUrl='/project.com' tech='tech' />
      <ProjectProps title='title of my project' projectUrl='/project.com' tech='tech' />
      
  
    </div>
  )
}
