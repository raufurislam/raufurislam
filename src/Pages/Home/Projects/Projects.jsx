import React from "react";
import { IoMdOpen } from "react-icons/io";

const Projects = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h4 className="text-primary font-semibold text-xl mb-2 uppercase">
          Projects
        </h4>
        <h4 className="text-white text-4xl font-bold">
          Where Design Meets Development
        </h4>
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-neutral rounded-xl">
          <img
            src="https://i.ibb.co.com/1Y9ZjWCC/202-Recovered.jpg"
            className="rounded-xl"
            alt=""
          />
          <div className="py-4 pl-4">
            <h4 className="">january 2025</h4>

            <div className="flex justify-between items-center text-white">
              <h3 className="font-semibold text-xl">Project warmth</h3>
              <button className="btn btn-ghost hover:text-primary">
                <IoMdOpen size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="bg-neutral">2</div>
        <div className="bg-neutral">3</div>
      </div>
    </div>
  );
};

export default Projects;
