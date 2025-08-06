import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skills from "./Component/Skill";
import Contact from "./Component/Contract";
import Footer from "./Component/Footer";
import Projects from "./Component/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
