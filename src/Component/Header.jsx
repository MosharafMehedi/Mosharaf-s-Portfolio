import { Navbar, Nav, Container } from "react-bootstrap";
import { useState } from "react";
import logo from "../assets/MResume.png";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Navbar
      bg="success"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      className="shadow-sm py-2"
    >
      <Container fluid className="px-4">
        {/* 🔽 Logo & Brand Name Left-Aligned */}
        <div className="d-flex align-items-center">
          <Navbar.Brand
            href="#home"
            className="d-flex align-items-center fw-bold"
          >
            <img
              src={logo}
              alt="Logo"
              width="35"
              height="35"
              className="d-inline-block align-top me-2 rounded-circle"
            />
            <span style={{ fontSize: "1.3rem" }}>My Portfolio</span>
          </Navbar.Brand>
        </div>

        {/* 🔽 Hamburger Toggle */}
        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />

        {/* 🔽 Navigation Links Right-Aligned */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto text-center">
            {navItems.map((item) => (
              <Nav.Link
                key={item.name}
                href={item.href}
                onClick={() => setExpanded(false)}
                className="mx-2"
                style={{
                  fontWeight: "500",
                  fontSize: "1.05rem",
                }}
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
