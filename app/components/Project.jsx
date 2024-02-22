import React from "react";
import ProjectProps from "./ProjectProps";
import Project1Img from "./assetProject/vs.png";
import Project2Img from "./assetProject/nextflix.png";

export default function Project() {
  return (
    <div id="projects" className="p-8 pt-[80px] mb-5 flex">
      <ProjectProps title="Netflix" url="/project1" img={Project1Img} />
      <ProjectProps title="Netflix" url="/project2" img={Project2Img} />
      <ProjectProps title="Netflix" url="/project1" img={Project1Img} />
      <ProjectProps title="Netflix" url="/project2" img={Project2Img} />
    </div>
  );
}
