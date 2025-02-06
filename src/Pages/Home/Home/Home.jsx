import React from "react";
import Hero from "../Hero/Hero";
import SocialLink from "../SocialLink/SocialLink";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="mt-16">
        <SocialLink></SocialLink>
      </div>
    </div>
  );
};

export default Home;
