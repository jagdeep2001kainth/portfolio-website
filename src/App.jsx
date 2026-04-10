import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import './App.css'; // Clear default styles

function App() {
  return (
    <>
      <nav style={{
        padding: '1.5rem 3rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: 'rgba(5, 5, 5, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div style={{ fontWeight: 900, fontSize: '1.8rem', letterSpacing: '2px', fontFamily: 'var(--font-heading)' }}>
          JK<span className="text-cyan">.</span>
        </div>
        <ul style={{ display: 'flex', gap: '2.5rem', fontWeight: 600, fontSize: '1rem' }}>
          <li>
            <a href="#about" style={{ transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}>About</a>
          </li>
          <li>
            <a href="#projects" style={{ transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}>Projects</a>
          </li>
          <li>
            <a href="#experience" style={{ transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}>Experience</a>
          </li>
          <li>
            <a href="#contact" style={{ transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}>Contact</a>
          </li>
        </ul>
      </nav>

      <main style={{ paddingTop: '90px' }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
