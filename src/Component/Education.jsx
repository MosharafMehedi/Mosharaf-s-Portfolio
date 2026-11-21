import { Container, Card } from "react-bootstrap";

const Education = () => {
  return (
    <section id="education" className="section-pad">
      <Container style={{ maxWidth: "720px" }}>
        <h2 className="section-title">
          <span>Education</span>
        </h2>

        <Card>
          <Card.Body className="p-4">
            <h3 className="h5 mb-1">
              Master's of Software Enineering
            </h3>
            <p className="mb-1 text-accent">
              Daffodil International University
            </p>
            <p
              className="mono mb-0"
              style={{ color: "var(--bs-secondary-color)", fontSize: "0.9rem" }}
            >
              [2027] · CGPA [Running]
            </p>
          </Card.Body>
          <Card.Body className="p-4">
            <h3 className="h5 mb-1">
              Bachelor of Computer Science and Enineering
            </h3>
            <p className="mb-1 text-accent">
              Bangladesh University of Business and Technology
            </p>
            <p
              className="mono mb-0"
              style={{ color: "var(--bs-secondary-color)", fontSize: "0.9rem" }}
            >
              [2024] · CGPA [3.25]
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Education;
