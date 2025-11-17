import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import Project from "./Components/Project";
import Iridescence from "./Animation/Iridescence";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const location = useLocation();

  // Animate route changes
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".page-transition",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    ScrollTrigger.batch(".section", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power2.in",
        }),
      start: "left 55%",
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, [location]);

  return (
    <>
      {/* Full-screen Iridescent Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-15">
        <Iridescence
          color={[1, 1, 1]}
          mouseReact={false}
          amplitude={0.7}
          speed={0.6}
          className="w-full h-full"
        />
      </div>

      <NavBar />

      {/* Page Content */}
      <div className="page-transition relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
