import { Container, Row, Col, Image, Button } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">
          About <span className="text-primary">Me</span>
        </h2>

        <Row className="align-items-center">
          <Col md={4} className="mb-4 mb-md-0">
            <div className="d-flex justify-content-center">
              <Image
                src="/MResume.png"
                roundedCircle
                fluid
                className="border-border-4 border-primary"
                style={{ width: "250px", height: "250px", objectFit: "cover" }}
              />
            </div>
          </Col>

          <Col md={8}>
            <h3 className="mb-4">Who am I?</h3>
            <p className="lead mb-4">
              Assalamu Alaikum, My name is Mosharaf Hossain, and I’m a
              passionate Frontend Developer with a strong foundation in HTML,
              CSS, JavaScript, and modern frameworks like React.js. I enjoy
              crafting responsive, user-friendly interfaces and translating
              design ideas into real-world web experiences. I’m committed to
              writing clean, maintainable code and continuously improving my
              skills to stay aligned with the latest frontend trends and best
              practices. My goal is to create web applications that are not only
              functional but also visually engaging and accessible.
            </p>

            <Row className="mb-4">
              <Col md={6}>
                <p>
                  <strong>Name:</strong> Mosharaf Hossain
                </p>
                <p>
                  <strong>Email:</strong> mosharafhossain4701@gmail.com
                </p>
              </Col>
              <Col md={6}>
                <p>
                  <strong>Experience:</strong> Fresher
                </p>
                <p>
                  <strong>Location:</strong> Mirpur, Dhaka, Bangladesh
                </p>
              </Col>
              <Col md={6}>
                <p>
                  <strong>Education:</strong> Bachelor Degree Complete
                </p>
                <p>
                  <strong>Institute:</strong> Bangladesh University of Business
                  and Technology
                </p>
                <p>
                  <strong>Phone:</strong> +8801601755316
                </p>
              </Col>
            </Row>

            <div className="resume-actions">
              <Button
                variant="primary"
                size="lg"
                href="Mosharaf_Resume.pdf"
                download
              >
                Download Resume
              </Button>
              <Button
                variant="outline-primary"
                size="lg"
                href="Mosharaf_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ms-2"
              >
                View Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
