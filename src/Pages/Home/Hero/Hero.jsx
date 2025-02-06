import React from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* description */}
          <div className="h-full flex items-center">
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl font-normal mb-1">
                Hi all. I am
              </h3>
              <h3 className="text-white text-7xl font-bold mb-3">
                Raufur Islam
              </h3>
              <h3 className="text-primary text-xl font-normal mb-2 leading-relaxed">
                {">"} Junior Full stack Developer <br /> & UI/UX and Graphics
                Enthusiast
              </h3>
              <button className="text-xl font-bold border-b-2 mt-4 text-white">
                See Resume
              </button>
            </div>
          </div>
          {/* image */}
          <div className="flex justify-center">
            <img
              src="https://i.ibb.co.com/3mP81JsF/github-banner-10-09.png"
              alt=""
              className="w-[500px] xl:w-[700px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-neutral py-8">
        <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-32 px-4 text-accent font-semibold">
          {/* Development Tools */}
          <div className="flex flex-wrap justify-center gap-6 text-lg mb-3 border-gray-600">
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
          <div className="flex flex-wrap justify-center gap-6 text-lg">
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
