import React from 'react';

const Experience = () => {
    const workData = [
        {
            company: "Gain America INC",
            location: "New York",
            role: "Web Developer",
            period: "June 2025 – Present",
            bullets: [
                "Architected an end-to-end AI content pipeline using Python and Gemini API to automate the revitalization of 15,000+ legacy assets, reducing manual content overhead by 90%.",
                "Engineered a secure automated synchronization tool to map product metadata from CSVs to AI-generated imagery, ensuring 100% accuracy in bulk-uploading for a 15-year-old inventory catalog.",
                "Developed secure backend services using Spring Boot and RESTful APIs, optimizing integration with React frontends in distributed Linux environments.",
                "Implemented automated CI/CD pipelines using Jenkins, Maven, and Git, utilizing SonarQube for static code analysis to enforce secure coding practices.",
                "Optimized MySQL/PostgreSQL data persistence with secure SQL queries to prevent injection vulnerabilities and improve API reliability."
            ]
        },
        {
            company: "Heuristics Pharma Perceptions",
            location: "New York",
            role: "Technology Support Associate Intern",
            period: "Jan 2025 – May 2025",
            bullets: [
                "Analyzed production issues and debugged backend applications in secure environments.",
                "Managed issue tracking and system monitoring using JIRA in an Agile workflow.",
                "Authored technical architecture documentation for cross-functional engineering teams."
            ]
        }
    ];

    return (
        <section id="experience" style={{ padding: '6rem 2rem' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', fontWeight: 800 }}>
                    Work <span className="text-cyan">Experience</span>
                </h2>

                {workData.map((job, index) => (
                    <div key={index} className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-cyan)' }}>{job.role}</h3>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{job.company} — {job.location}</h4>
                            </div>
                            <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{job.period}</span>
                        </div>
                        <ul style={{ color: 'var(--text-muted)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                            {job.bullets.map((bullet, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem' }}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;