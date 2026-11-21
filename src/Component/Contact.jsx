import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

// 1. https://formspree.io te free account khulun
// 2. Notun form banan, tarpor pawa URL ta ekhane boshan
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-pad section-alt">
      <Container>
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>

        <Row className="g-5">
          <Col lg={5}>
            <p className="lead mb-4">
              I'm open to Software Engineer opportunities and interesting
              projects. Feel free to reach out, I usually reply within a day.
            </p>

            <p className="mb-3">
              <i className="bi bi-envelope-fill text-accent me-3"></i>
              <a href="mailto:mosharafhossain4701@gmail.com">
                mosharafhossain4701@gmail.com
              </a>
            </p>
            <p className="mb-3">
              <i className="bi bi-linkedin text-accent me-3"></i>
              <a
                href="https://www.linkedin.com/in/mosharaf-hossain-102847277/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="mb-3">
              <i className="bi bi-github text-accent me-3"></i>
              <a
                href="https://github.com/MosharafMehedi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
            <p className="mb-0">
              <i className="bi bi-geo-alt-fill text-accent me-3"></i>
              Dhaka, Bangladesh
            </p>
          </Col>

          <Col lg={7}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Enter your message"
                />
              </Form.Group>

              {status === "success" && (
                <Alert variant="success">
                  Thanks! Your message was sent. I'll get back to you soon.
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="danger">
                  Something went wrong. Please email me directly instead.
                </Alert>
              )}

              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="w-100"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
