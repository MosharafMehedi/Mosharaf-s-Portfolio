import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-5 bg-dark text-white">
      <Container>
        <h2 className="text-center mb-5">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <h3 className="mb-4">Contact Information</h3>
            <p className="lead mb-5">
              Feel free to reach out to me for any questions or opportunities.
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>

            <div className="mb-4">
              <h4 className="h5">
                <i className="bi bi-envelope-fill text-primary me-3"></i>
                Email
              </h4>
              <p>mosharafhossain4701@gmail.com</p>
            </div>

            <div className="mb-4">
              <h4 className="h5">
                <i className="bi bi-telephone-fill text-primary me-3"></i>
                Phone
              </h4>
              <p>+8801601755316</p>
            </div>

            <div>
              <h4 className="h5">
                <i className="bi bi-geo-alt-fill text-primary me-3"></i>
                Location
              </h4>
              <p>Mirpur,Dhaka</p>
            </div>
          </Col>

          <Col lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
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

              <Form.Group className="mb-4">
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

              <Form.Group className="mb-4">
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

              <Button
                variant="primary"
                type="submit"
                size="lg"
                className="w-100"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
