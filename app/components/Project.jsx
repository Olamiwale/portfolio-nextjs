
import React from "react";
import ProjectProps from "./ProjectProps";
import About from './asset/about.jpg'

import Css from './asset/css.png'


export default function Project({ title, url, img}) {


  return (
    <div id='projects' className="p-8 pt-[80px]">
      <div>
        <h1 className="font-bold text-2xl py-4">Projects</h1>
        <h3 className="font-semibold text-xl py-4">What I have built</h3>
      </div>
      <div>

        <div className="w-full grid md:grid-cols-2 gap-5">
        <ProjectProps title="Netflix" url="/project1" img={Css}/>
        <ProjectProps title="Summerizer" url="/project2" img={Css} />
        <ProjectProps title="project3" url="/project3" img={Css} />
        <ProjectProps title="project4" url="/project4" img={Css} />
        
        </div>
       
      </div>
    </div>
  );
}
