import React, { useState } from "react";
import { IoMdOpen } from "react-icons/io";

const projects = [
  {
    name: "Soulmate",
    date: "January 2025",
    img: "https://i.ibb.co.com/pBJXRSrD/soulmate.jpg",
    technologies_use: [
      "ReactJs",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Vercel",
      "Node.js",
      "Illustrator",
      "Figma",
    ],
    description:
      "Soulmate is a modern and intuitive platform designed to offer an exceptional user experience with a clean UI, powerful features, and seamless navigation. It provides a dynamic dashboard, real-time notifications, secure authentication, and customizable themes.",
    live_link: "https://soulmate-raufur-a12.web.app/",
    git_repository: "https://github.com/yourusername/soulmate",
    challenges_faces:
      "Ensuring smooth performance while implementing real-time notifications and dynamic dashboard features was challenging. Handling secure authentication and multi-language support required thorough testing and optimization.",
    improvments_couldbe:
      "Future improvements could include AI-driven matchmaking, voice and video chat integration, an enhanced recommendation system, and more advanced analytics for user engagement tracking.",
  },
  {
    name: "Crowdcube",
    date: "December 2024",
    img: "https://i.ibb.co.com/cSJQmqLy/crowdcube.jpg",
    technologies_use: [
      "ReactJs",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Vercel",
      "Node.js",
      "Illustrator",
      "Figma",
    ],
    description:
      "Crowdcube is a modern crowdfunding platform that empowers individuals and organizations to bring their ideas to life. It provides seamless and transparent fundraising and donation features with user authentication and a responsive design.",
    live_link: "https://crowdcube-a10.web.app/",
    git_repository: "https://github.com/raufurislam/crowdcube",
    challenges_faces:
      "One of the major challenges was implementing a secure and efficient payment gateway for donations. Ensuring real-time updates and handling authentication seamlessly with Firebase also required careful planning and debugging.",
    improvments_couldbe:
      "Future improvements could include integrating additional payment options like cryptocurrency, enhancing accessibility features, and implementing AI-driven campaign recommendations for better user engagement.",
  },

  {
    name: "Project Warmth",
    date: "November 2024",
    img: "https://i.ibb.co.com/PzsgZHdR/project-warmth.jpg",
    technologies_use: [
      "ReactJs",
      "Tailwind CSS",
      "React Route",
      "Animate.css",
      "Firebase",
      "Illustrator",
      "Figma",
    ],
    description:
      "Project Warmth is a responsive web application designed to support underserved communities through collaborative campaigns, donations, and resource distribution. It provides an intuitive platform for users to create, manage, and contribute to impactful campaigns.",
    live_link: "https://project-warmth.web.app/",
    git_repository: "https://github.com/raufurislam/project-warmth",
    challenges_faces:
      "Implementing a seamless and secure authentication system while ensuring a smooth user experience was a key challenge. Managing real-time updates for campaigns and integrating a responsive design across all devices required extensive testing and refinement.",
    improvments_couldbe:
      "Future enhancements could include AI-powered campaign recommendations, a chatbot for instant assistance, multi-currency donation support, and deeper analytics for tracking campaign success.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
      <div className="text-center mb-10">
        <h4 className="text-primary font-semibold md:text-xl text-lg mb-2 uppercase">
          Projects
        </h4>
        <h4 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
          Where Design Meets Development
        </h4>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-neutral rounded-xl">
            <img
              src={project.img}
              alt={project.name}
              className="rounded-t-xl w-full h-72 object-cover"
            />
            <div className="p-4 text-white">
              <h4 className="text-sm text-gray-400">{project.date}</h4>
              <div className="flex justify-between items-center mt-2">
                <h3 className="font-semibold text-xl">{project.name}</h3>
                <button
                  className="btn btn-ghost hover:text-primary"
                  onClick={() => setSelectedProject(project)}
                >
                  <IoMdOpen size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <dialog open className="modal modal-open lg:w-full">
          <div className="modal-box w-full max-w-4xl lg:max-w-4xl">
            <img
              src={selectedProject.img}
              alt={selectedProject.name}
              className="w-full rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">{selectedProject.name}</h2>
            <p className="text-sm text-gray-400">{selectedProject.date}</p>
            <p className="mt-2">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-1">
              {selectedProject.technologies_use.map((technology_use, index) => (
                <button
                  key={technology_use.index}
                  className="btn btn-outline btn-sm border-green-400"
                >
                  {technology_use}
                </button>
              ))}
            </div>
            {/* <p className="mt-2">
              <strong>Technologies:</strong>{" "}
              {selectedProject.technologies_use.join(", ")}
            </p> */}
            <p className="mt-2">
              <strong>Challenges:</strong> {selectedProject.challenges_faces}
            </p>
            <p className="mt-2">
              <strong>Improvements:</strong>{" "}
              {selectedProject.improvments_couldbe}
            </p>
            <div className="mt-4">
              <a
                href={selectedProject.live_link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mr-2"
              >
                Live Site
              </a>
              {selectedProject.git_repository && (
                <a
                  href={selectedProject.git_repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  GitHub
                </a>
              )}
            </div>
            <button
              className="btn btn-error mt-4"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Projects;
