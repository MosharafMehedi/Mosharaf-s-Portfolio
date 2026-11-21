import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";

// Sob card e ekই size er image box: 16:10, upor theke dekhay (screenshot er header kata jabe na)
// Image load na hole sundor placeholder dekhabe
const ProjectImage = ({ src, alt }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "16 / 10",
        overflow: "hidden",
        background: "var(--surface-alt)",
        borderBottom: "1px solid var(--line)",
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit",
      }}
    >
      {failed ? (
        <div className="d-flex flex-column align-items-center justify-content-center h-100 text-center px-3">
          <i
            className="bi bi-image text-accent"
            style={{ fontSize: "2.5rem" }}
          ></i>
          <small
            className="mono mt-2"
            style={{ color: "var(--bs-secondary-color)" }}
          >
            {alt}
          </small>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top center",
            display: "block",
          }}
        />
      )}
    </div>
  );
};

// image: public folder e rakhun (jemon public/Hospital.jpg)
// live: na thakle null din, button dekhabe na
const projects = [
  {
    title: "Remittance Management System - Remit Sheba",
    problem:
      "Remittance organizations need an efficient way to manage international money transfers, exchange houses, branches, transactions, and financial reports while ensuring accuracy and security.",
    solution:
      "A centralized web-based remittance management system that streamlines transaction processing, branch management, exchange house operations, transaction verification, authorization, disbursement, and real-time reporting with role-based access control.",
    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    image: "/RMS.png",
    github: "https://github.com/mysoftheaven-team/remit-book",
    live: "https://remitbook.mysoftheaven.com/login",
  },
  {
    title: "mBulid Tech - Website",

    problem:
      "Real estate businesses need an efficient platform to manage property listings, customer inquiries, property details, and buying, selling, or rental operations in one place.",

    solution:
      "A Real estate management web application that allows admins and agents to manage properties, upload images, track customer inquiries, handle property sales and rentals, and provide users with an easy way to explore and find their desired properties.",

    tags: ["PHP", "Laravel", "MySQL", "JavaScript", "Tailwind", "HTML"],
    image: "/RES.png",
    github: "https://github.com/MosharafMehedi/mBuild-Tech-Website",
    live: "https://mbuildtech.mysoftheaven.com",
  },
  {
    title: "Hospital Management System",
    problem:
      "Hospitals need one place to manage patient records, prescriptions, and daily operations.",
    solution:
      "A web system with separate roles: patients manage their records, doctors handle prescriptions, and admins oversee operations. Built on a distributed database.",
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML", "CSS"],
    image: "/Hospital.jpg",
    github: "https://github.com/MosharafMehedi/HMS",
    live: null,
  },
  {
    title: "Diabetes Prediction System",
    problem: "Early diabetes risk is hard to spot without clinical analysis.",
    solution:
      "A web app that predicts diabetes risk using a machine learning model, achieving 96.88% accuracy.",
    tags: ["Machine Learning", "Django", "HTML", "CSS", "Bootstrap"],
    image: "/diabetes.jpg",
    github: "https://github.com/MosharafMehedi/Diabetes-Prediction-System",
    live: null,
  },
  {
    title: "Quiz App",
    problem: "Learners need a simple way to test knowledge by topic.",
    solution:
      "A responsive quiz app with category selection, a countdown timer, live score tracking, and a detailed result summary.",
    tags: ["React", "TailwindCSS", "Vite"],
    image: "/quiz.png",
    github: "https://github.com/MosharafMehedi/React-Quiz-App",
    live: "https://react-quiz-app-lilac-three.vercel.app/",
  },
  {
    title: "Todo App",
    problem: "Keeping track of daily tasks without clutter.",
    solution: "A React app to add, view, and manage tasks in real time.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    image: "/Todo.jpg",
    github: "https://github.com/MosharafMehedi/React-Todo-App",
    live: "https://todo-app4701.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-pad section-alt">
      <Container>
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <Row xs={1} md={2} className="g-4">
          {projects.map((p) => (
            <Col key={p.title}>
              <Card className="project-card h-100 overflow-hidden">
                <ProjectImage src={p.image} alt={p.title} />
                <Card.Body>
                  <Card.Title className="h4">{p.title}</Card.Title>
                  <p className="mb-2">
                    <strong className="text-accent">Problem: </strong>
                    {p.problem}
                  </p>
                  <p className="mb-0">
                    <strong className="text-accent">Solution: </strong>
                    {p.solution}
                  </p>
                </Card.Body>
                <Card.Footer className="border-0 pt-0 pb-3">
                  <div className="mb-3">
                    {p.tags.map((t) => (
                      <span key={t} className="tech-badge">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-2"
                  >
                    <i className="bi bi-github me-1"></i> Code
                  </Button>
                  {p.live && (
                    <Button
                      variant="primary"
                      size="sm"
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>
                  )}
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
