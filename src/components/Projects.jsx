import React from 'react';
import { GithubLogo, ArrowSquareOut } from '@phosphor-icons/react';

const Projects = () => {
  const projectData = [
    {
      title: "Phish Guard",
      role: "AI/Security Developer",
      image: "/images/Phishguard.png",
      description: "ML system detecting phishing URLs using LSTM and Random Forest models. Built API interfaces for secure data exchange and real-time classification results.",
      tech: ["Python", "LSTM", "Random Forest", "JavaScript"],
      github: "https://github.com/jagdeep2001kainth/CYB-Capstone-Project",
      demo: null
    },
    {
      title: "Prince Urban Knot",
      role: "Full Stack Engineer",
      image: "/images/Princeurbanknot.png",
      description: "E-commerce platform with Spring Boot/React. Implemented BCrypt password hashing and secure backend validation for user transactions.",
      tech: ["Java", "Spring Boot", "MySQL", "React"],
      github: "https://github.com/jagdeep2001kainth/prince-urban-knot-backend",
      LiveDemo: "https://prince-urban-knot-frontend.vercel.app/",
      demo: null
    },
    {
      title: "Firewall Automation",
      role: "Security Engineer",
      image: "/images/Firewall.png",
      description: "Automated host-based firewall policy configuration and validation. Performed network diagnostics and hardening using TCP/IP and PowerShell.",
      tech: ["Linux", "PowerShell", "TCP/IP", "CLI"],
      github: "https://github.com/jagdeep2001kainth/Configuring-Firewall-using-Automation-in-Python-Project",
      demo: null
    }
  ];


  return (
    <section id="projects" style={{ padding: '6rem 2rem', background: 'rgba(0, 0, 0, 0.3)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 800 }}>
          Featured <span className="text-cyan">Projects</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {projectData.map((project, index) => (
            <div key={index} className="glass-panel project-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              {/* === THE NEW IMAGE SECTION === */}
              {project.image && (
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderBottom: '1px solid var(--glass-border)' }}>
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  // Optional hover zoom effect handled by class below
                  />
                </div>
              )}
              {/* ============================= */}

              {/* Existing Content - Re-styled for layout */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-cyan)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {project.role}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', marginTop: '0.5rem', fontWeight: 700 }}>{project.title}</h3>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2rem', flexGrow: 1, lineHeight: '1.6' }}>
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} style={{ fontSize: '0.85rem', padding: '0.3rem 0.8rem', background: 'rgba(0, 240, 255, 0.08)', borderRadius: '6px', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', marginTop: 'auto', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                  {project.github && (
                    <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}>
                      <GithubLogo size={22} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600, transition: 'color 0.3s ease' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-main)'}>
                      <ArrowSquareOut size={22} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
