import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>

      <div className="menu-toggle" onClick={toggleMenu}>
        <span id="menu-icon">{menuOpen ? '✕' : '☰'}</span>
      </div>

      <ul className={menuOpen ? 'active' : ''}>
        {[
          { href: '/', label: 'Home' },
          { href: '#about', label: 'About' },
          { href: '#Skills', label: 'Skill' },
          { href: '#Project', label: 'Projects' },
          { href: '#Certificate', label: 'Certificate' },
          { href: '#contact', label: 'Contact' }
        ].map(({ href, label }) => (
          <li key={label} className="ml">
            <a
              href={href}
              onClick={href.startsWith('#') ? e => handleLinkClick(e, href) : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
