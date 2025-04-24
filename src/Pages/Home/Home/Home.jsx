// import React from "react";
// import Hero from "../Hero/Hero";
// import SocialLink from "../SocialLink/SocialLink";
// import AboutMe from "../AboutMe/AboutMe";
// import Skill from "../Skill/Skill";
// import Projects from "../Projects/Projects";
// import Contact from "../Contact/Contact";
// import Education from "../Edducation/Education";

// const Home = () => {
//   return (
//     <div>
//       <div className="mt-16">
//         <Hero></Hero>
//       </div>
//       <div id="social" className="mt-16">
//         <SocialLink></SocialLink>
//       </div>
//       <div id="aboutme" className="mt-16">
//         <AboutMe></AboutMe>
//       </div>
//       <div id="skills" className="mt-16">
//         <Skill></Skill>
//       </div>
//       <div id="education" className="mt-16">
//         <Education></Education>
//       </div>
//       <div id="projects" className="mt-16">
//         <Projects></Projects>
//       </div>
//       <div id="contact" className="mt-16">
//         <Contact></Contact>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { lazy, Suspense } from "react";
import Cirtificate from "../Cirtificate/Cirtificate";

const Hero = lazy(() => import("../Hero/Hero"));
const SocialLink = lazy(() => import("../SocialLink/SocialLink"));
const AboutMe = lazy(() => import("../AboutMe/AboutMe"));
const Skill = lazy(() => import("../Skill/Skill"));
const Projects = lazy(() => import("../Projects/Projects"));
const Contact = lazy(() => import("../Contact/Contact"));
const Education = lazy(() => import("../Edducation/Education"));

const Home = () => {
  return (
    <div>
      <div className="mt-16">
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
      </div>
      <div id="social" className="mt-16">
        <Suspense fallback={null}>
          <SocialLink />
        </Suspense>
      </div>
      <div id="aboutme" className="mt-16">
        <Suspense fallback={null}>
          <AboutMe />
        </Suspense>
      </div>
      <div id="skills" className="mt-16">
        <Suspense fallback={null}>
          <Skill />
        </Suspense>
      </div>

      <div id="projects" className="mt-16">
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
      </div>

      <div id="education" className="mt-16">
        <Suspense fallback={null}>
          <Education />
        </Suspense>
      </div>

      <div id="projects" className="mt-16">
        <Suspense fallback={null}>
          <Cirtificate />
        </Suspense>
      </div>
      <div id="contact" className="mt-16">
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
