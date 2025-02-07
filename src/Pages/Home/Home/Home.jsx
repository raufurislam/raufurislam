import React from "react";
import Hero from "../Hero/Hero";
import SocialLink from "../SocialLink/SocialLink";
import AboutMe from "../AboutMe/AboutMe";
import Skill from "../Skill/Skill";
import Projects from "../Projects/Projects";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="mt-16">
        <SocialLink></SocialLink>
      </div>
      <div className="mt-16">
        <AboutMe></AboutMe>
      </div>
      <div className="mt-16">
        <Skill></Skill>
      </div>
      <div className="mt-16">
        <Projects></Projects>
      </div>
    </div>
  );
};

export default Home;
