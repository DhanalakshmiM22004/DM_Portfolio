import './title.css';
import { useEffect } from 'react';

const Title = () => {
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

  const elements = document.querySelectorAll('.title');
  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);
    return (
        <div className="main-section">
        <div className='content1'>
  <div className="title">
    <h1>
      Hi, I am Dhanalakshmi M<br></br>
      & I am Web 
      <span className="word-wrapper">
        <span className="fade-word">Developer</span>
        <span className="fade-word">Designer</span>
      </span>
    </h1>
    <p className="par">
      Driven by a passion for web development and emerging technologies, I am committed
      to applying my skills to impactful projects and advancing my career in the tech industry.
    </p>
  </div>
</div>
</div>
    );
};

export default Title;