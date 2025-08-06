import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "React", level: 70 },
  { name: "Bootstrap", level: 80 },
  { name: "PHP", level: 60 },
  { name: "MySQL", level: 65 },
  { name: "Laravel", level: 60 },
];

const professionalSkills = [
  {
    name: "Problem Solving",
    icon: "💡",
    description: "Creative solutions for complex issues",
  },
  {
    name: "Teamwork",
    icon: "👥",
    description: "Collaborative and communicative",
  },
  {
    name: "Time Management",
    icon: "⏱️",
    description: "Efficient and deadline-oriented",
  },
  {
    name: "Adaptability",
    icon: "📈",
    description: "Quick learner of new technologies",
  },
  {
    name: "Presentation Skills",
    icon: "🗣️",
    description: "Clear and confident communication of ideas to audiences",
  },
  {
    name: "Self-Learning",
    icon: "📚",
    description: "Ability to independently acquire new knowledge and skills",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-5">
          My <span className="text-primary">Skills</span>
        </h2>

        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <h3 className="mb-4">Technical Skills</h3>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="d-flex justify-content-between mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <ProgressBar now={skill.level} variant="primary" />
              </div>
            ))}
          </Col>

          <Col lg={6}>
            <h3 className="mb-4">SOFT Skills</h3>
            <Row>
              {professionalSkills.map((skill, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="h-100">
                    <Card.Body className="text-center">
                      <div className="display-4 mb-3">{skill.icon}</div>
                      <Card.Title>{skill.name}</Card.Title>
                      <Card.Text className="text-muted">
                        {skill.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
