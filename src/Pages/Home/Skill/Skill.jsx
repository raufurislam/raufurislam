import React, { useState } from "react";
import { FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAdobeillustrator,
  SiAdobeindesign,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiAdobexd,
  SiExpress,
  SiMongodb,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  {
    category: "Frontend Development",
    items: [
      { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
      { icon: IoLogoCss3, color: "#1572B6", name: "CSS3" },
      { icon: RiTailwindCssFill, color: "#06B6D4", name: "Tailwind CSS" },
      { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
      { icon: FaReact, color: "#61DAFB", name: "React" },
      { icon: IoLogoFirebase, color: "#FFCA28", name: "Firebase" },
      // { icon: RiNextjsFill, color: "#FFFFFF", name: "Next.js" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { icon: IoLogoNodejs, color: "#8CC84B", name: "Node.js" },
      { icon: SiExpress, color: "#808080", name: "Express.js" },
      { icon: SiMongodb, color: "#4DB33D", name: "MongoDB" },
      { icon: SiMongodb, color: "#4DB33D", name: "MongoDB" },
    ],
  },
  {
    category: "UI/UX & Graphics Design",
    items: [
      { icon: IoLogoFigma, color: "#F24E1E", name: "Figma" },
      { icon: SiAdobexd, color: "#FF61F6", name: "Adobe XD" },
      { icon: SiAdobephotoshop, color: "#31A8FF", name: "Photoshop" },
      { icon: SiAdobeillustrator, color: "#FF9A00", name: "Illustrator" },
      { icon: SiAdobeindesign, color: "#FF3366", name: "InDesign" },
      { icon: SiAdobelightroom, color: "#00A8E1", name: "Lightroom" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { icon: VscVscode, color: "#007ACC", name: "VS Code" },
      { icon: FaGithub, color: "#181717", name: "GitHub" },
      { icon: SiPostman, color: "#FF6C37", name: "Postman" },
      { icon: FaGitAlt, color: "#F05032", name: "Git" },
    ],
  },
];

const Skill = () => {
  const [hoveredIndices, setHoveredIndices] = useState({});

  const handleMouseEnter = (categoryIndex, itemIndex) => {
    setHoveredIndices((prev) => ({
      ...prev,
      [`${categoryIndex}-${itemIndex}`]: true,
    }));
  };

  return (
    // <div className="min-h-screen bg-black text-white py-12 px-6 md:px-12">
    <div className="">
      <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h4 className="text-primary font-semibold md:text-xl text-lg mb-2 uppercase">
            Skill
          </h4>
          <h4 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
            What I Bring to the Table
          </h4>
        </div>

        {/* Skill Sections */}
        {skills.map((skill, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="font-bold text-xl text-white mt-10">
              {skill.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-6 text-secondary">
              {skill.items.map(({ icon: Icon, color, name }, itemIndex) => {
                const key = `${categoryIndex}-${itemIndex}`;
                const isHovered = hoveredIndices[key];

                return (
                  <div
                    key={key}
                    className="tooltip tooltip-bottom transition-transform duration-300 ease-in-out hover:scale-110"
                    data-tip={name}
                    onMouseEnter={() =>
                      handleMouseEnter(categoryIndex, itemIndex)
                    }
                  >
                    <Icon
                      className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl transition-all duration-300 ease-in-out"
                      style={{ color: isHovered ? color : "#6B7280" }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
