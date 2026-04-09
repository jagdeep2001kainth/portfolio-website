import React from 'react';
import { EnvelopeSimple, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '6rem 2rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 800 }}>
          Get In <span className="text-cyan">Touch</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.8' }}>
          Whether you have a question, a project idea, or just want to connect, I'm always open to discussing new opportunities in Security and Software Engineering.
        </p>
        
        <div className="glass-panel" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <a href="mailto:contact@example.com" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem', padding: '1rem 2.5rem' }}>
            <EnvelopeSimple size={24} weight="bold" /> Say Hello
          </a>
          
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease, transform 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={e => {e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'}}>
              <LinkedinLogo size={36} weight="duotone" />
            </a>
            <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s ease, transform 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'}} onMouseOut={e => {e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'}}>
              <GithubLogo size={36} weight="duotone" />
            </a>
          </div>
        </div>
      </div>
      
      <footer style={{ marginTop: '8rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
        <p>© {new Date().getFullYear()} Jagdeep Kainth. Engineered with precision.</p>
      </footer>
    </section>
  );
};

export default Contact;
