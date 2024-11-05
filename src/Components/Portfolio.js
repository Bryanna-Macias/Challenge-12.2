import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: 'Project 1', img: 'img1-url.jpg', link: 'deployed-url-1', repo: 'github-url-1' },
    { title: 'Project 2', img: 'img2-url.jpg', link: 'deployed-url-2', repo: 'github-url-2' },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <img src={project.img} alt={project.title} />
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Live</a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
