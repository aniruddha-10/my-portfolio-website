import React from "react";
import pass from "/Users/aniruddhakhan/Desktop/ReactPortfolio/one-portfolio/src/assets/portfolio/pass.jpg";
import green from "/Users/aniruddhakhan/Desktop/ReactPortfolio/one-portfolio/src/assets/portfolio/green.jpg";
import graph from "/Users/aniruddhakhan/Desktop/ReactPortfolio/one-portfolio/src/assets/portfolio/graph2.jpg";
const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      src: pass,
      name:"Password Manager"
    },
    {
      id: 2,
      src: green,
      name:"Green House Simulator"
    },
    {
      id: 3,
      src: graph,
      name:"Graphing Calculator"
    },
  ];
  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500" data-aos="fade-in">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" data-aos="fade-in">
        {projects.map(({ id, src }) => (
          <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
          <img
            src={src}
            alt=""
            className="rounded-md duration-200 hover:scale-105 h-40"
          />
          <div className="flex items-center justify-center">
            <button className="w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105">
              Code
            </button>
          </div>
          
        </div>
          ))}
            <p className="text-2xl text-center">Password Manager</p>
            <p className="text-2xl text-center">GreenHouse Simulator</p>
            <p className="text-2xl text-center">Graphing Calulator</p>            
          </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
