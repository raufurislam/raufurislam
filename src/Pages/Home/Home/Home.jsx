import React from "react";
import Hero from "../Hero/Hero";
import SocialLink from "../SocialLink/SocialLink";
import AboutMe from "../AboutMe/AboutMe";
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <div className="mt-16">
        <Hero></Hero>
      </div>
      <div id="social" className="mt-16">
        <SocialLink></SocialLink>
      </div>
      <div id="aboutme" className="mt-16">
        <AboutMe></AboutMe>
      </div>
      <div id="skills" className="mt-16">
        <Skill></Skill>
      </div>
      <div id="projects" className="mt-16">
        <Projects></Projects>
      </div>
      <div id="contact" className="mt-16">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
