import './footer.css';
import { useEffect } from 'react';
const Footer = () => {
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
   
      const elements = document.querySelectorAll('.fa, .talk');
       elements.forEach(el => observer.observe(el));
   
       return () => observer.disconnect();
     }, []);
    return (
   <>

<div className='main'>
<div className='footer'>
   <hr/>
   <h3 className='talk'>Let`s talk</h3>
      <div className='icon'>
        <a href="mailto:dhanalakshmi.22004@gmail.com" className="fa fa-google" aria-label="Google"></a>
         <a href="https://www.linkedin.com/in/dhanalakshmi-m-011332292" className="fa fa-linkedin"></a>
        <a href="https://github.com/DhanalakshmiM22004" className="fa fa-github"></a>
        <a href="https://www.instagram.com/dhanalakshmi_m_71022?igsh=eXh5NGZrYzFiZTE4" className="fa fa-instagram" aria-label="Instagram"></a>
        <a href="https://pin.it/2WITSWnzD" className="fa fa-pinterest" aria-label="Pinterest"></a>
      </div>
</div>
</div>
   </>
    );
};

export default Footer;
