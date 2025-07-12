import './About.css';
import { useEffect } from 'react';

const About = () => {
   useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, { threshold: 0.3 });

  const elements = document.querySelectorAll('.section-title, .about-details, .profile-img');
  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);

    return (
    <section id="about"className="about-me"  style={{ scrollMarginTop: '100px' }}>
        
    <div className="section-title">
      <h1>About Me</h1>
    </div>
       <p className="skill-description">
Blending logic with creativity — I build digital experiences that connect and inspire
</p>
    <div className="about-content">
      <div className="about-details">
        <h2>Hello, I`m Dhanalakshmi M</h2>
        <p>Graduated with a B.Sc. in Computer Science from Dr. MGR Janaki College.
Completed internships in MERN Stack and Web Development, gaining practical experience in building full-stack and responsive websites.
I enjoy transforming concepts into real, user-friendly web interfaces.
I`m passionate about continuous learning and staying updated with the latest web technologies to build modern, scalable solutions.
I have hands-on experience with technologies like React, Node.js, MongoDB, HTML, CSS, and JavaScript.
My strengths include problem-solving, clean code practices, and a keen eye for UI/UX design.
I`m always excited to collaborate on meaningful projects that make a real impact.I thrive in team environments where creativity and feedback are encouraged. My goal is to grow as a developer while contributing to innovative digital experiences.</p>
      </div>
    </div>
  </section>
    );
};

export default About;
