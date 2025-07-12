import './contact.css';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    emailjs.init('bY-dvoqF5GZYi2fkO'); // Your Public Key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const form = e.target;
    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      comment: form.comment.value
    };

    emailjs.send('service_2elyjhl', 'template_58gapqe', templateParams)
      .then(() => {
        form.reset();
        setShowNotification(true); // Show custom notification
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert(`Error sending message: ${error.text || 'Please check console.'}`);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

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

    const elements = document.querySelectorAll('.title2, .main, .container');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact">
      <h2 className="title2">Contact Me</h2>
       <p className="skill-description">
 Always open to new ideas, feedback, and meaningful connections — I’m here to connect
</p>
      <div className="main">
        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="container">
            <div className="row">
              <label className="label">
                <span className="icon">
                  <svg width="24" height="24" fill="none" stroke="#c5c5c5" strokeWidth="1.25" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Z" />
                    <circle cx="12" cy="8" r="3" />
                  </svg>
                </span>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Enter Name"
                  required
                />
              </label>

              <label className="label">
                <span className="icon">
                  <svg width="24" height="24" fill="none" stroke="#c5c5c5" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z" />
                    <path d="M3 7l9 6l9 -6" />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Enter Email ID"
                  required
                />
              </label>
            </div>

            <label className="label comment">
              <span className="icon">
                <svg width="22" height="22" fill="none" stroke="#c5c5c5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1 -2 2H7l-4 4V5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2Z" />
                </svg>
              </span>
              <textarea
                className="textarea"
                name="comment"
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </label>

            <button type="submit" className="send-btn" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>

      {/* Custom Notification Modal */}
      {showNotification && (
        <div className="custom-notification">
          <div className="notification-box">
            <p>Your message has been sent successfully!</p>
            <button onClick={() => setShowNotification(false)}>Okay</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
