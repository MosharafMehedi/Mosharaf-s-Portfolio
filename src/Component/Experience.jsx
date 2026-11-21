import { Container, Card } from "react-bootstrap";

const experience = [
  {
    role: "Junior Software Engineer",
    company: "Mysoftheaven (BD) Ltd.",
    location: "Dhaka, Bangladesh",
    period: "August 2025 - Present",
    tech: ["Laravel", "CodeIgniter", "React", "Tailwind", "Bootstrap", "MySQL", "REST APIs"],
    points: [
      "Developed and maintained features for web applications using Laravel, CodeIgniter, React, Tailwind, Bootstrap, and MySQL.",
      "Collaborated with a senior developer to debug issues and improve application performance.",
      "Assisted in designing and implementing RESTful APIs that connect front-end components with back-end services.",
      "Participated in agile sprints, daily stand-ups, and code reviews.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-pad">
      <Container style={{ maxWidth: "820px" }}>
        <h2 className="section-title">
          Work <span>Experience</span>
        </h2>

        {experience.map((job) => (
          <Card key={job.company + job.period}>
            <Card.Body className="p-4">
              <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-1">
                <h3 className="h4 mb-0">{job.role}</h3>
                <span
                  className="mono"
                  style={{ color: "var(--bs-secondary-color)", fontSize: "0.9rem" }}
                >
                  {job.period}
                </span>
              </div>
              <p className="text-accent mb-3">
                {job.company} · {job.location}
              </p>

              <ul className="mb-3 ps-3">
                {job.points.map((p) => (
                  <li key={p} className="mb-2">
                    {p}
                  </li>
                ))}
              </ul>

              <div>
                {job.tech.map((t) => (
                  <span key={t} className="tech-badge">
                    {t}
                  </span>
                ))}
              </div>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </section>
  );
};

export default Experience;
