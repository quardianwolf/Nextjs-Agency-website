import React from "react";

import Hero from "./hero";
import About from "./about";
import Whatwedo from "./whatwedo";
import Projects from "./projects";
import Misyon from "./misyon";
import Contact from "./contact";


const Home = () => {
  return (
      <main className="main-wrapper">
        <Hero />
        <About />
        <Whatwedo />
        <Projects />
        <Misyon />
        <Contact />
      </main>
  );
};

export default Home;
