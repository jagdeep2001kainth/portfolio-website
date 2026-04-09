import React from 'react';
import { GithubLogo, ArrowSquareOut } from '@phosphor-icons/react';

const Projects = () => {
  const projectData = [
    {
      title: "Prince Urban Knot",
      role: "Full Stack Engineer",
      description: "A comprehensive E-commerce Web Application featuring secure payment gateways, user authentication, and an optimized shopping cart experience.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#"
    },
    {
      title: "Malware Analysis Lab",
      role: "Security Researcher",
      description: "Isolated environment setup for reverse-engineering malware samples. Documented behavioral analysis and indicators of compromise (IOCs).",
      tech: ["Cuckoo Sandbox", "Wireshark", "Ghidra", "Python"],
      github: "#",
      demo: null
    },
    {
      title: "Enterprise Network Security",
      role: "Network Sec Engineer",
      description: "Architected a secure enterprise network topology with IDS/IPS integration, segmented VLANs, and robust firewall rules.",
      tech: ["Cisco", "pfSense", "Snort", "Splunk"],
      github: "#",
      demo: null
    },
    {
      title: "Phishing Detection Engine",
      role: "AppSec Developer",
      description: "Machine learning based application that analyzes email headers and content to detect and flag sophisticated phishing attempts.",
      tech: ["Python", "Scikit-Learn", "Flask", "React"],
      github: "#",
      demo: "#"
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
            <div key={index} className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column' }}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
