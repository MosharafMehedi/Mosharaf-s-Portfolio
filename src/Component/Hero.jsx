import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero d-flex align-items-center min-vh-100 pt-5"
    >
      <Container className="text-center py-5">
        <p className="mono text-accent mb-3">Hello, world. I'm</p>
        <h1 className="display-3 fw-bold mb-3">Mosharaf Hossain</h1>
        <h2
          className="h3 mono mb-2"
          style={{ color: "var(--bs-secondary-color)" }}
        >
          Full-Stack Software Engineer
        </h2>
        <p className="mb-4 text-accent">
          Junior Software Engineer at Mysoftheaven (BD) Ltd.
        </p>
        <p
          className="lead mb-5 mx-auto"
          style={{ maxWidth: "640px", color: "var(--bs-secondary-color)" }}
        >
          I am currently working as a Full-Stack Software Engineer, developing
          and maintaining responsive web applications with modern technologies.
          I work on both frontend and backend development, database management,
          API integration, and building efficient software solutions.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
          <Button href="#projects" variant="primary" size="lg" className="px-4">
            View Projects
          </Button>
          <Button
            href="Mosharaf_Resume.pdf"
            download
            variant="outline-primary"
            size="lg"
            className="px-4"
          >
            Download Resume
          </Button>
        </div>

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
      </Container>
    </section>
  );
};

export default Hero;
