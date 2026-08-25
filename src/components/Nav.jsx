import { useEffect, useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { navLinks } from '../data';

export default function Nav({ activeId }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav-inner" aria-label="Primary">
          <a href="#top" className="logo" aria-label="Back to top">
            ~/gitam
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeId === link.href.slice(1) ? 'active' : ''}
                >
                  <span className="num">{link.num}.</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <List size={26} />
          </button>
        </nav>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          type="button"
          className="close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          <X size={30} />
        </button>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            <span className="num">{link.num}.</span>
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
