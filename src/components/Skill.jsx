import './Skill.css';
import { useEffect } from 'react';

const Skill = () => {
  useEffect(() => {
    // Scroll observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.3 });

    const elements = document.querySelectorAll('.skills-wrapper, .title2, .skill-description');
    elements.forEach(el => observer.observe(el));

    // Circle animation
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
      const circle = skill.querySelector('.progress-ring__circle');
      const text = skill.querySelector('.circle-text');
      const percentage = parseInt(skill.dataset.value);
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;

      circle.style.strokeDasharray =` ${circumference} ${circumference}`;
      circle.style.strokeDashoffset = circumference;

      let currentPercent = 0;

      const animate = setInterval(() => {
        if (currentPercent >= percentage) {
          clearInterval(animate);
        } else {
          currentPercent++;
          const offset = circumference - (currentPercent / 100) * circumference;
          circle.style.strokeDashoffset = offset;
          text.textContent =` ${currentPercent}%`;
        }
      }, 20);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Skills">
      <h1 className="title2">Skills</h1>
      <p className="skill-description">
  Combining creativity and logic to transform ideas into functional and aesthetic web interfaces.
</p>

      <div className="skills-wrapper">

        {/* SKILL ITEM TEMPLATE */}
        {[
          { icon: 'fas fa-paint-brush', label: 'UI / UX', value: 70 },
          { icon: 'fab fa-html5', label: 'HTML', value: 90 },
          { icon: 'fab fa-css3-alt', label: 'CSS', value: 80 },
          { icon: 'fab fa-bootstrap', label: 'Bootstrap', value: 75 },
          { icon: 'fab fa-js', label: 'JavaScript', value: 60 },
          { icon: 'fab fa-react', label: 'React', value: 55 },
          { icon: 'fab fa-node-js', label: 'Node.js', value: 35 },
          {
            image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            label: 'MongoDB',
            value: 40
          }
        ].map((skill, index) => (
          <div className="skill" data-value={skill.value} key={index}>
            <div className="background-icon">
              {skill.icon ? (
                <i className={skill.icon}></i>
              ) : (
                <img src={skill.image} className="mongodb-icon" alt={skill.label} />
              )}
            </div>
            <div className="circle-container">
              <svg className="progress-ring" width="80" height="80">
                <circle
                  className="progress-ring__background"
                  stroke="white"
                  strokeWidth="6"
                  fill="transparent"
                  r="34"
                  cx="40"
                  cy="40"
                />
                <circle
                  className="progress-ring__circle"
                  stroke="grey"
                  strokeWidth="6"
                  fill="transparent"
                  r="34"
                  cx="40"
                  cy="40"
                />
              </svg>
              <div className="circle-text">0%</div>
            </div>
            <h3>{skill.label}</h3>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skill;