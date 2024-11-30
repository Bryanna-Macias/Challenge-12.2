import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', link: 'https://example.com', github: 'https://github.com/example1' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={`path_to_image${index + 1}.jpg`} alt={project.title} />
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
