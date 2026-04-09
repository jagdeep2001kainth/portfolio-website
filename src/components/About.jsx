import React from 'react';
import { Shield, CodeBlock, LockKey } from '@phosphor-icons/react';

const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 2rem', position: 'relative' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 800 }}>
          About <span className="text-cyan">Me</span>
        </h2>
        
        <div className="glass-panel" style={{ padding: '3rem', marginBottom: '4rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
            I am a passionate technology professional with a unique blend of skills spanning 
            <strong> Cyber Security, Application Security, and Full Stack Engineering.</strong> 
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            My approach combines a builder's mindset with an attacker's perspective. I don't just build applications; 
            I build them to be resilient. Whether I'm architecting a scalable web application, hunting for vulnerabilities, 
            or analyzing malware, I bring a detail-oriented and security-first philosophy to everything I do.
          </p>
        </div>

        <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 700 }}>Core <span className="text-cyan">Expertise</span></h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <Shield size={56} weight="duotone" className="text-cyan" style={{ marginBottom: '1.5rem' }} />
            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>Cyber Security</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Threat modeling, vulnerability assessment, malware analysis, and network security. 
              Implementing zero-trust architectures and incident response.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <LockKey size={56} weight="duotone" className="text-cyan" style={{ marginBottom: '1.5rem' }} />
            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>AppSec</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              SAST/DAST integration, secure code review, OAuth/JWT authentication flows, 
              and mitigating OWASP Top 10 vulnerabilities.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <CodeBlock size={56} weight="duotone" className="text-cyan" style={{ marginBottom: '1.5rem' }} />
            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>Full Stack Dev</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Modern JavaScript (React, Node.js), robust API design, database management, 
              and designing scalable, visually engaging web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
