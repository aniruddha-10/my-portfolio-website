import React from "react";
import Section from "./common/Section";
import { FaGithub} from "react-icons/fa";
import pass from "/Users/aniruddhakhan/Desktop/ReactPortfolio/one-portfolio/src/assets/portfolio/pass.jpg";
import green from "/Users/aniruddhakhan/Desktop/ReactPortfolio/one-portfolio/src/assets/portfolio/green.jpg";
import todo from "../assets/portfolio/todo.jpg";
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      src: pass,
      title: "Password Manager",
      github: "https://github.com/aniruddha-10/CPSC-329-PROJECT",
    },
    {
      id: 2,
      src: green,
      title: "Green House Simulator",
      github: "https://github.com/aniruddha-10/Assignment5_updated",
    },
    {
      id: 3,
      src: todo,
      title: "Todo-List App",
      github: "https://github.com/aniruddha-10/Todo-List-app",
    },
  ];
  return (
    <Section
      title="Projects"
      subtitle="These are all the projects that I have worked on. Some of them I have work
      before I gained some experience. So go gentle on them."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, src, title, github }) => (
          <div key={id} className="max-w-lg flex shadow-lg shadow-gray-500 rounded-2xl overflow-hidden" data-aos="fade-up">
            <img src={src} alt="" className="w-2/3"/>
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a classname="text-2xl cursor-pointer duration-150 hover:scale-110" 
              target="_blank"
              rel="noopener noreferrer"
              href={github}>
                <FaGithub/>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
