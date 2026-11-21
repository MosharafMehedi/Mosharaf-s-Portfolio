import { Container, Row, Col, Image, Button } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="section-pad section-alt">
      <Container>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <Row className="align-items-center g-5">
          <Col md={4}>
            <div className="d-flex justify-content-center">
              <Image
                src="/MResume.png"
                roundedCircle
                className="border border-4"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  borderColor: "var(--accent)",
                }}
                alt="Mosharaf Hossain"
              />
            </div>
          </Col>

          <Col md={8}>
            <p className="lead">
              Hi, I'm Mosharaf, a Junior Software Engineer at Mysoftheaven (BD)
              Ltd. in Dhaka, Bangladesh. Day to day I build and maintain web
              applications with Laravel, CodeIgniter, React, and MySQL, and I
              help design the RESTful APIs that connect them.
            </p>
            <p>
              Outside of work I build my own projects, from a hospital
              management system with role-based access for patients, doctors,
              and admins, to a diabetes prediction app with a machine learning
              model that reaches 96.88% accuracy. I enjoy learning new tools
              quickly and turning ideas into working products.
            </p>
            <p className="mb-4">
              I'm now looking for my next Software Engineer role, where I can
              take on more ownership, grow with a strong team, and keep
              building software that solves real problems. I hold a Bachelor's
              degree from Bangladesh University of Business and Technology.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <Button
                variant="primary"
                href="Mosharaf_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </Button>
              <Button variant="outline-primary" href="#contact">
                Get In Touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
