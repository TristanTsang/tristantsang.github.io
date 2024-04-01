import React from "react";
import Intro from "./components/IntroSection";
import Contact from "./components/ContactSection";
import Footer from "./components/FooterSection";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutSection";
import NavBar from "./components/NavBar";
import "boxicons";
function App() {
  return (
    <>
      <NavBar id="navbar" />
      <Intro id="intro" />
      <AboutMe id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </>
  );
}

export default App;
