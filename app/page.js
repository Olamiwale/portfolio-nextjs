import About from "./components/About";
import Contact from "./components/Contact";

import HomePage from "./components/HomePage";
import Project from "./components/Project";
import Skills from "./components/Skill";


export default function Home() {
  return (
    <div className="">
      <HomePage />
      <About />
      <Skills />
        <Project/>
      <Contact />
    </div>
  );
}
