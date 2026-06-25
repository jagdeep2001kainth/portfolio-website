import React from 'react';

const Experience = () => {
    const workData = [
        {
            company: "Gain America INC",
            location: "New York",
            role: "Web Developer",
            period: "June 2025 – Present",
            bullets: [
                "Developed and maintained backend applications using Java, Spring Boot, and RESTful APIs to support scalable web-based business solutions.",
                "Designed and integrated API endpoints, business logic, and database interactions while collaborating with stakeholders to deliver new application features and enhancements.",
                "Built and optimized data processing workflows using Python automation, reducing manual effort and improving operational efficiency across large-scale content management processes.",
                "Architected an AI-powered content pipeline leveraging Python and Gemini APIs to automate processing and enrichment of 15,000+ legacy digital assets, reducing manual content overhead by 90%.",
                "Worked extensively with MySQL, data validation workflows, and application integrations to ensure data consistency, reliability, and system performance.",
                "Automated software delivery processes through CI/CD pipelines using Git, Jenkins, Maven, and Gradle, supporting reliable deployments and streamlined development workflows.",
                "Monitored and troubleshot Linux-based application environments, performing root cause analysis and resolving production issues to improve system stability and performance.",
                "Collaborated across engineering and business teams to analyze requirements, implement solutions, and support the full software development lifecycle from design through deployment."
            ]
        },
        {
            company: "Heuristics Pharma Perceptions",
            location: "New York",
            role: "Technology Support Associate Intern",
            period: "Jan 2025 – May 2025",
            bullets: [
                "Collaborated with senior software engineers during the development of an enterprise web application, providing security-focused recommendations throughout the software development lifecycle",
                "Reviewed application workflows, authentication mechanisms, and data handling processes to identify security risks and align implementations with industry best practices and compliance requirements",
                "Assisted engineering teams in designing secure application architectures by applying principles from NIST, GDPR, HIPAA, and PCI-DSS frameworks",
                "Participated in application testing, validation, and troubleshooting activities to improve system reliability, functionality, and security prior to production deployment",
                "Analyzed network traffic, system logs, and application behavior using Linux and TCP/IP fundamentals to support issue investigation and root cause analysis",
                "Worked closely with cross-functional teams to document technical requirements, security controls, risk mitigation strategies, and development processes using JIRA and Agile workflows",
                "Contributed to vulnerability assessments and secure software development initiatives, helping engineering teams strengthen application security and reduce potential attack surfaces"

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