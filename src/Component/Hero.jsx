import { Container, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section
      id="home"
      className="d-flex align-items-center min-vh-100 bg-dark text-white pt-5"
    >
      <Container className="text-center py-5">
        <h1 className="display-4 fw-bold mb-4">
          Hi, I'm <span className="text-primary">Mosharaf Hossain</span>
        </h1>
        <h2 className="h3 mb-4">Frontend Developer</h2>
        <p className="lead mb-5">
          I build exceptional digital experiences with modern technologies.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button href="#projects" variant="primary" size="lg" className="px-4">
            View My Work
          </Button>
          <Button
            href="#contact"
            variant="outline-light"
            size="lg"
            className="px-4"
          >
            Contact Me
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
