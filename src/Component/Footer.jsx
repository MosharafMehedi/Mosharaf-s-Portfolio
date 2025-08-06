import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "#0f172a", // dark slate
        color: "#f8fafc", // light text
        padding: "3rem 0",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Column */}
          <Col md={4} className="mb-4 mb-md-0">
            <h3
              style={{
                color: "#38bdf8", // sky blue
                fontWeight: "700",
                marginBottom: "0.5rem",
              }}
            >
              Mosharaf Hossain
            </h3>
            <p style={{ color: "#94a3b8", margin: 0 }}>Frontend Developer</p>
          </Col>

          {/* Center Column: Social Icons */}
          <Col md={4} className="mb-4 mb-md-0 text-center">
            <div className="d-flex justify-content-center gap-4">
              <a
                href="https://github.com/MosharafMehedi"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f8fafc", fontSize: "1.5rem" }}
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mosharaf-hossain-102847277/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f8fafc", fontSize: "1.5rem" }}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" style={{ color: "#f8fafc", fontSize: "1.5rem" }}>
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com/crystal.mosharaf/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#f8fafc", fontSize: "1.5rem" }}
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </Col>

          {/* Right Column */}
          <Col md={4} className="text-center text-md-end">
            <p className="mb-1" style={{ fontSize: "0.9rem" }}>
              &copy; {currentYear} Mosharaf Hossain. All rights reserved.
            </p>
            <p
              className="mb-0"
              style={{ fontSize: "0.8rem", color: "#64748b" }}
            >
              Built with React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
