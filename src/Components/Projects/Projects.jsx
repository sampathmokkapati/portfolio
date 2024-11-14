import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Citizen Journalism Platform"
          main="Collaborated with a team to continuously improve and update the platform ensuring the quality and integrityof user-generated content."
        />
        <ProjectCard
          title="Tic Tac Toe"
          main="Developed a Tic-Tac-Toe game in Java with player vs. player and player vs. AI modes, implementing win/draw
conditions, board validation, and user input handling."
        />
        <ProjectCard
          title="Eduversity"
          main="Developed ’Eduversity,’ a dynamic university webpage using React.js, featuring comprehensive sections like Home, About, Careers, Testimonials, and a ’Send a Message’ page. Implemented a user-friendly interface with seamless navigation to enhance the digital campus experience."
        />
      </div>
    </div>
  );
};

export default Projects;
