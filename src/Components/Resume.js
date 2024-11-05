import React from 'react';

const Resume = () => {
  return (
    <section>
      <h2>Resume</h2>
      <a href="your-resume-url.pdf" download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
};

export default Resume;
