import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bar py-4">
      <Container>
        <Row className="align-items-center gy-3">
          <Col md={4} className="text-center text-md-start">
            <span className="brand-mark">
              M<span>H</span>
            </span>
            <p className="mb-0 mono" style={{ color: "var(--bs-secondary-color)", fontSize: "0.85rem" }}>
              Full-Stack Software Engineer
            </p>
          </Col>

          <Col md={4} className="text-center">
            <div className="d-flex justify-content-center gap-4">
              <a
                className="social-link"
                href="https://github.com/MosharafMehedi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/mosharaf-hossain-102847277/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                className="social-link"
                href="mailto:mosharafhossain4701@gmail.com"
                aria-label="Email"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </Col>

          <Col md={4} className="text-center text-md-end">
            <p className="mb-0" style={{ fontSize: "0.9rem" }}>
              &copy; {currentYear} Mosharaf Hossain
            </p>
            <p className="mb-0" style={{ fontSize: "0.8rem", color: "var(--bs-secondary-color)" }}>
              Built with React &amp; Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
