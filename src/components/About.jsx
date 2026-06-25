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
            I'm a Software Engineer passionate about building scalable web applications, backend systems, and cloud-based solutions that solve real-world problems. My experience spans full-stack development with Java, Spring Boot, React, Python, SQL, and modern deployment platforms, allowing me to design, develop, and deploy applications from concept to production.

          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            I enjoy building software that combines clean architecture, intuitive user experiences, and reliable backend services. From developing secure REST APIs and full-stack e-commerce platforms to architecting AI-powered automation workflows and integrating machine learning services, I enjoy working across the entire software development lifecycle.
          </p>
        </div>

        <h3 style={{ fontSize: '2rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 700 }}>Core <span className="text-cyan">Expertise</span></h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <Shield size={56} weight="duotone" className="text-cyan" style={{ marginBottom: '1.5rem' }} />
            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>Backend Development</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Java, Spring Boot, REST APIs, MySQL
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <LockKey size={56} weight="duotone" className="text-cyan" style={{ marginBottom: '1.5rem' }} />
            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>Frontend Development</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              React, JavaScript, responsive UI
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <CodeBlock size={56} weight="duotone" className="text-cyan" style={{ marginBottom: '1.5rem' }} />
            <h4 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 700 }}>Cloud & DevOps</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              AWS (EC2, S3, RDS), CI/CD, Jenkins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
