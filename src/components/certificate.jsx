import './certificate.css';
import { useEffect } from 'react';

const Certificate = () => {
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

  const elements = document.querySelectorAll('.section-title, .main, .card1');
  elements.forEach(el => observer.observe(el));

  return () => observer.disconnect();
}, []);

    return (
        <section id="Certificate">
      <h1 className="ct section-title">CERTIFICATE</h1>
      
      <p className="skill-description">
        Verified achievements demonstrating expertise across development technologies and tools.
      </p>
      <div className="main">
        <div className="card1 card1-mern">
          <div className="card1-text">
            <p className="t1"><b>MERN Stack Web Application</b></p>
            <p className="st">Built a MERN Stack web app as part of the Next Gen Employability Program (2024–25).</p>
          </div>
        </div>

        <div className="card1 card1-mongo-admin">
          <div className="card1-text">
            <p className="t1"><b>MongoDB Admin Path – SmartBridge</b></p>
            <p className="st">Completed MongoDB Admin Path (Mar 2025) with SmartBridge.</p>
          </div>
        </div>

        <div className="card1 card1-dlk">
          <div className="card1-text">
            <p className="t1"><b>DLK Career Development – Internship</b></p>
            <p className="st">Completed Web Development Internship at DLK Career Development (Jan 2024).</p>
          </div>
        </div>

        <div className="card1 card1-html">
          <div className="card1-text">
            <p className="t1"><b>Front End Development – HTML</b></p>
            <p className="st">Completed HTML course with Great Learning Academy (Aug 2024).</p>
          </div>
        </div>

        <div className="card1 card1-node">
          <div className="card1-text">
            <p className="t1"><b>MongoDB Node.js Developer – SmartBridge</b></p>
            <p className="st">Built backend logic using Node.js and integrated with MongoDB (Sep 2024).</p>
          </div>
        </div>

        <div className="card1 card1-dreams">
          <div className="card1-text">
            <p className="t1"><b>Dreams of Skill Development</b></p>
            <p className="st">Completed certification from Dr. MGR Janaki College (Aug 2023 – Mar 2024).</p>
          </div>
        </div>
      </div>
    </section>
    );
};

export default Certificate;