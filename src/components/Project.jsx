import './project.css';
import { useEffect } from 'react';

const Project = () => {
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

   const elements = document.querySelectorAll('.section-title, .card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Project">
      <h1 className="pt section-title">Project</h1>
       <p className="skill-description">
  Showcasing practical web development projects that demonstrate creativity, and real-world problem solving.
</p>
      <div className="card-container">
        
        <div className="card">
          <video controls>
           <source src="./assets/videos/plant.mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className="description">
            <h2>E-COMMERCE WEBSITE BUILD WITH MERN STACK</h2>
            <p>
              This project was completed as part of my MERN Stack internship at Edunet Foundation.
              It`s a fully functional plant showcase platform built using React.js for the frontend,
              Node.js for the backend, and MongoDB for managing user data. This website is designed
              to provide a clean and user-friendly experience for plant lovers.It connects users with a wide range of plants and eco-friendly products.
            </p>
          </div>
        </div>

        <div className="card">
          <video controls>
            <source src="./assets/videos/MADChat.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="description">
            <h2>AI CHATBOT – BUILDING CONVERSATIONAL INTELLIGENCE</h2>
            <p>
              Completed my first team project: Built a full-stack AI chatbot using HTML, CSS,
              JavaScript, Python, Node.js, and the Ollama Llama 3.2 model.
              Secured user data with MongoDB and implemented smooth authentication.
              Added gamification features to boost user engagement with interactive mini-games.

            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card">
          <video controls>
            <source src=./assets/videos/lv_0_20250707125722.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="description">
            <h2>Our Drama: Ongoing Review Platform for Asian Series</h2>
            <p>Our Drama is an ongoing website project focused on reviewing and exploring Asian dramas.
It includes pages for Korean, Chinese, Thai, and Japanese dramas with rich visual content.
Dramas are organized into categories like Trending, Top Fantasy, and Historical genres.
Users can read reviews, browse drama images, and discover top picks — with more features coming soon.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
