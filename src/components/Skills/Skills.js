import React, { useEffect } from 'react';

const Skills = ({ resumeData }) => {
  useEffect(() => {
    const bars = document.querySelectorAll('.bar');
    setTimeout(() => {
      bars.forEach(bar => {
        const width = bar.getAttribute('data-level');
        bar.style.width = `${width}%`;
      });
    }, 300);
  }, []);

  return (
    <div className="skills-container">
      {resumeData.skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <span className="skill-name">{skill.skillname}</span>
          <div className="skill-bar">
            <div 
              className={`bar ${skill.skillname.toLowerCase()}`}
              data-level={skill.level}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
