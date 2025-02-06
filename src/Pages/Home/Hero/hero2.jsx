import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-light mb-2">Hi all. I am</h3>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Raufur Islam
            </h1>
            <h3 className="text-primary text-xl font-normal leading-relaxed">
              {">"} Junior Full Stack Developer <br /> & UI/UX and Graphics
              Enthusiast
            </h3>
            <button className="mt-6 px-6 py-2 border-2 border-white text-white font-semibold text-lg rounded-md hover:bg-white hover:text-black transition duration-300">
              See Resume
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co/3mP81Js/github-banner-10-09.png"
              alt="Hero Banner"
              className="w-[90%] md:w-[500px] max-w-full"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="bg-neutral py-10">
        <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-32 px-6 text-accent font-semibold">
          {/* Development Tools */}
          <h3 className="text-center text-lg uppercase tracking-widest mb-4 text-gray-400">
            Development Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center text-lg mb-8">
            <div>HTML</div>
            <div>CSS</div>
            <div>TAILWIND</div>
            <div>JAVASCRIPT</div>
            <div>REACT</div>
            <div>NODEJS</div>
            <div>EXPRESSJS</div>
            <div>MONGODB</div>
            <div>FIREBASE</div>
          </div>

          {/* Graphics Tools */}
          <h3 className="text-center text-lg uppercase tracking-widest mb-4 text-gray-400">
            Graphics Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center text-lg">
            <div>FIGMA</div>
            <div>XD</div>
            <div>PHOTOSHOP</div>
            <div>ILLUSTRATOR</div>
            <div>INDESIGN</div>
            <div>LIGHTROOM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
