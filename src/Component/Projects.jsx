import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

const projects = [
  {
    title: "Diabetes-Prediction-System",
    description:
      "Developed a machine learning-powered diabetes prediction web app, achieving 96.88% accuracy.",
    tags: ["Machine Learning", "Django", "HTML", "CSS", "Bootstrap"],
    image: "diabetes.jpg",
    github: "https://github.com/MosharafMehedi/Diabetes-Prediction-System",
    live: "#",
  },
  {
    title: "Todo-App",
    description:
      "A React Todo App allows users to add, view, and manage a list of tasks in real-time.",
    tags: ["React", "HTML", "CSS", "Javascript"],
    image: "Todo.jpg",
    github: "https://github.com/MosharafMehedi/React-Todo-App",
    live: "https://todo-app4701.netlify.app/",
  },
  {
    title: "Hospital-Management-System",
    description:
      "Built a hospital management system with a distributed database,enabling patients to manage records, doctors to handle prescriptions, and admins to oversee operations.",
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "PHP", "MySQL"],
    image: "Hospital.jpg",
    github: "https://github.com/MosharafMehedi/HMS",
    live: "#",
  },
  {
    title: "Quiz-App",
    description:
      "This is a React-based Quiz App with category selection, timer, and score tracking.It provides a responsive user interface with dynamic questions and a detailed result summary.",
    tags: ["React", "TailwindCSS", "Vite"],
    image: "quiz.png",
    github: "https://github.com/MosharafMehedi/React-Quiz-App",
    live: "https://react-quiz-app-lilac-three.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">
          My <span className="text-primary">Projects</span>
        </h2>

        <Row xs={1} md={2} lg={3} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm d-flex flex-column">
                <Card.Img variant="top" className="h-55" src={project.image} />
                <Card.Body className="flex-grow-1">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <div className="mb-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge bg-secondary me-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <Button
                      variant="outline-primary"
                      href={project.github}
                      target="_blank"
                      className="me-2"
                    >
                      Code
                    </Button>
                    <Button
                      variant="primary"
                      href={project.live}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
