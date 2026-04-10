import React from 'react';
import { ArrowDown, ShieldCheck, Code, LockKey } from '@phosphor-icons/react';

const Hero = () => {
  return (
    <section id="hero" className="hero-section glass-panel" style={{
      minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      margin: '2rem',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
      border: 'none',
      background: 'transparent',
      boxShadow: 'none'
    }}>

      {/* Decorative blurred orbit background */}
      <div style={{ position: 'absolute', top: '10%', left: '15%', width: '300px', height: '300px', background: 'var(--accent-cyan)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '15%', width: '400px', height: '400px', background: 'var(--accent-blue)', filter: 'blur(150px)', opacity: 0.15, borderRadius: '50%', zIndex: -1 }}></div>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', color: 'var(--accent-cyan)' }}>
        <ShieldCheck size={40} weight="duotone" />
        <LockKey size={40} weight="duotone" />
        <Code size={40} weight="duotone" />
      </div>

      <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1rem', fontWeight: 900, lineHeight: 1.1 }}>
        Hi, I'm <br /><span className="text-gradient">Jagdeep Kainth</span>
      </h1>
      <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 300, color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '800px', lineHeight: '1.8' }}>
        <span className="text-cyan" style={{ fontWeight: 600 }}>Cyber Security Engineer</span> |Security Engineer | Secure Software Development (SDLC) | Application & Network Security | Penetration Testing | Java/Spring Boot | AWS
      </h2>

      <p style={{ maxWidth: '650px', marginBottom: '3rem', fontSize: '1.1rem', color: '#c0cad5' }}>
        Security-focused Software Engineer with hands-on experience in backend development, automation, and secure system design. Strong foundation in network security, malware analysis, and ethical hacking, with practical exposure to application and network-level attacks including DoS, DDoS, XSS, and SQL injection. Experienced in implementing encryption (AES-GCM, Argon2), system hardening, and log analysis. Familiar with cloud security concepts in AWS and skilled in building scalable APIs and security-driven solutions.


      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="#projects" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
          View My Work <ArrowDown size={20} weight="bold" />
        </a>
        <a href="#contact" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem' }}>
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
