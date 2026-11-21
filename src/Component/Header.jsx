import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Tech Stack", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Header = ({ theme, onToggleTheme }) => {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll korle current section highlight hobe
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      data-bs-theme={theme}
      className="site-nav py-2"
    >
      <Container>
        <Navbar.Brand href="#home" className="brand-mark">
          M<span>H</span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          onClick={() => setExpanded((v) => !v)}
        />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center text-center">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                active={active === item.id}
                onClick={() => setExpanded(false)}
                className="mx-lg-2"
              >
                {item.name}
              </Nav.Link>
            ))}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={onToggleTheme}
              aria-label="Toggle dark and light theme"
              className="ms-lg-3 mt-2 mt-lg-0"
            >
              <i
                className={`bi ${
                  theme === "dark" ? "bi-sun-fill" : "bi-moon-stars-fill"
                }`}
              ></i>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
