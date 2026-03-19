import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsClosing(true);

      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 900); // increased for stagger close
    } else {
      setMenuOpen(true);
    }
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    setIsClosing(true);

    setTimeout(() => {
      setMenuOpen(false);
      setIsClosing(false);
    }, 900);
  };

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span id="menu-icon">{menuOpen ? '✕' : '☰'}</span>
      </div>

      <ul className={`${menuOpen ? 'active' : ''} ${isClosing ? 'closing' : ''}`}>
        {[
          { href: 'index.html', label: 'Home' },
          { href: '#about', label: 'About' },
          { href: '#Skills', label: 'Skill' },
          { href: '#Project', label: 'Projects' },
          { href: '#Certificate', label: 'Certificate' },
          { href: '#contact', label: 'Contact' }
        ].map(({ href, label }) => (
          <li key={label} className="ml">
            <a onClick={(e) => handleLinkClick(e, href)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

