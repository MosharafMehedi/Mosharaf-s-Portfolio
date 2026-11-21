import { Container, Row, Col, Card } from "react-bootstrap";

const stack = [
  {
    title: "Frontend",
    icon: "bi-window-stack",
    items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: "bi-server",
    items: ["PHP", "Laravel", "CodeIgniter", "Django", "REST APIs"],
  },
  {
    title: "Database",
    icon: "bi-database",
    items: ["MySQL"],
  },
  {
    title: "Tools & Practices",
    icon: "bi-tools",
    // Jodi Postman, VS Code, Docker ityadi use koren, ekhane add korun
    items: ["Git", "GitHub", "Vite", "Agile/Scrum", "Code Review"],
  },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Adaptability",
  "Presentation",
  "Self-Learning",
];

const Skills = () => {
  return (
    <section id="skills" className="section-pad">
      <Container>
        <h2 className="section-title">
          Tech <span>Stack</span>
        </h2>

        <Row className="g-4">
          {stack.map((group) => (
            <Col md={6} key={group.title}>
              <Card className="h-100">
                <Card.Body>
                  <h3 className="h5 mb-3">
                    <i className={`bi ${group.icon} text-accent me-2`}></i>
                    {group.title}
                  </h3>
                  <div>
                    {group.items.map((item) => (
                      <span key={item} className="tech-badge">
                        {item}
                      </span>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <h3 className="h6 mono mb-3" style={{ color: "var(--bs-secondary-color)" }}>
            Soft Skills
          </h3>
          {softSkills.map((s) => (
            <span key={s} className="tech-badge">
              {s}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
