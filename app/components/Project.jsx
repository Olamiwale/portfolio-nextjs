import React from "react";
import ProjectProps from "./ProjectProps";
import Project1Img from "./assetProject/nextflix.png";
import Project3Img from "./assetProject/vitesass.png";
import Project4Img from "./assetProject/pro-4.png";
import Project2Img from "./assetProject/project-2.png";

export default function Project() {
  return (
    <div id="projects" className="p-8 pt-[80px] mb-5 grid grid-cols-1 md:grid-cols-2">
      <ProjectProps title="Netflix" url="/project1" img={Project1Img} />
      <ProjectProps title="Vanlife" url="/project2" img={Project2Img} />
      <ProjectProps title="Summarizer" url="/project3" img={Project3Img} />
      <ProjectProps title="Data-Finance" url="/project4" img={Project4Img} />
    </div>
  );
}
