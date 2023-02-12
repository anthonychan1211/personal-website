import React from "react";

function Coding({ forwardedRef }) {
  const projectsObj = [
    {
      name: "Marking Sheet for competition",
      description:
        "It is built upon colleagues' request, helping them to calculate and record the mark and rank.",
      knowledge: "DOM control / Local Storage / Git Control / Deployment",
      thumbnail: `${process.env.PUBLIC_URL}/assets/markingsheet.png`,
      link: "https://anthonychan1211.github.io/markingsheet/",
    },
    {
      name: "Grid Game",
      description: "A game built for students for fun",
      knowledge: "CSS/Structural Design",
      thumbnail: `${process.env.PUBLIC_URL}/assets/gridgame.png`,
      link: "https://anthonychan1211.github.io/Grid-Game/",
    },
    {
      name: "MarkSix Checker",
      description:
        "Built upon request from family, checking the result with compound combination",
      knowledge: "React/Node.js/API",
      thumbnail: `${process.env.PUBLIC_URL}/assets/marksixchecker.png`,
      link: "https://marksix-checker.herokuapp.com/",
    },
    {
      name: "Multi-Project Content Management System",
      description:
        "Created for multiple projects with CRUD functions, suitable for clients to control the content of their websites",
      knowledge: "Next.js/MongoDB/Image Upload Handling",
      thumbnail: `${process.env.PUBLIC_URL}/assets/cms.png`,
      link: "https://cms-anthonychan1211.vercel.app/",
    },
  ];

  const projects = projectsObj.map((project) => {
    return (
      <div className="project-box">
        <a href={project.link} target="_blank" rel="noreferrer noopener">
          <img src={project.thumbnail} alt={project.thumbnail}></img>
        </a>
        <p>Description: {project.description}</p>
        <p>
          Link: <br />
          <a href={project.link} target="_blank" rel="noreferrer">
            {project.link}
          </a>
        </p>
      </div>
    );
  });
  return (
    <div ref={forwardedRef} className="coding-container">
      <h1>As a Web Developer</h1>
      <div className="project-showcase">
        {projects}
        <div className="coming-soon">
          <p>Coming Soon</p>
        </div>
      </div>
    </div>
  );
}

export default Coding;
