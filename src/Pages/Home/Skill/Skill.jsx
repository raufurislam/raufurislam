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
      { icon: FaHtml5, color: "#E34F26" },
      { icon: IoLogoCss3, color: "#1572B6" },
      { icon: RiTailwindCssFill, color: "#06B6D4" },
      { icon: FaJs, color: "#F7DF1E" },
      { icon: FaReact, color: "#61DAFB" },
      { icon: RiNextjsFill, color: "#FFFFFF" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { icon: IoLogoNodejs, color: "#8CC84B" },
      { icon: SiExpress, color: "#808080" },
      { icon: SiMongodb, color: "#4DB33D" },
      { icon: IoLogoFirebase, color: "#FFCA28" },
    ],
  },
  {
    category: "UI/UX & Graphics Design",
    items: [
      { icon: IoLogoFigma, color: "#F24E1E" },
      { icon: SiAdobexd, color: "#FF61F6" },
      { icon: SiAdobephotoshop, color: "#31A8FF" },
      { icon: SiAdobeillustrator, color: "#FF9A00" },
      { icon: SiAdobeindesign, color: "#FF3366" },
      { icon: SiAdobelightroom, color: "#00A8E1" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { icon: VscVscode, color: "#007ACC" },
      { icon: FaGithub, color: "#181717" },
      { icon: SiPostman, color: "#FF6C37" },
      { icon: FaGitAlt, color: "#F05032" },
    ],
  },
];

const Skill = () => {
  return (
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
      {skills.map((skill, index) => (
        <div key={index}>
          <h3 className="font-bold text-xl text-white mt-10">
            {skill.category}
          </h3>
          <div className="mt-4 flex flex-wrap gap-6 text-secondary">
            {skill.items.map(({ icon: Icon, color }, idx) => {
              const [isHovered, setIsHovered] = useState(false);
              return (
                <div
                  key={idx}
                  className="transition-transform duration-300 ease-in-out hover:scale-110"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <Icon
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl transition-all duration-300 ease-in-out"
                    style={{ color: isHovered ? color : "secondary" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;

// import React, { useState } from "react";
// import { FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
// import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
// import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
// import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
// import {
//   SiAdobeillustrator,
//   SiAdobeindesign,
//   SiAdobelightroom,
//   SiAdobephotoshop,
//   SiAdobexd,
//   SiExpress,
//   SiMongodb,
//   SiPostman,
// } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";

// const skills = [
//   {
//     category: "Frontend Development",
//     items: [
//       { icon: FaHtml5, color: "#E34F26" },
//       { icon: IoLogoCss3, color: "#1572B6" },
//       { icon: RiTailwindCssFill, color: "#06B6D4" },
//       { icon: FaJs, color: "#F7DF1E" },
//       { icon: FaReact, color: "#61DAFB" },
//       { icon: RiNextjsFill, color: "#FFFFFF" },
//     ],
//   },
//   {
//     category: "Backend Development",
//     items: [
//       { icon: IoLogoNodejs, color: "#8CC84B" },
//       { icon: SiExpress, color: "#808080" },
//       { icon: SiMongodb, color: "#4DB33D" },
//       { icon: IoLogoFirebase, color: "#FFCA28" },
//     ],
//   },
//   {
//     category: "UI/UX & Graphics Design",
//     items: [
//       { icon: IoLogoFigma, color: "#F24E1E" },
//       { icon: SiAdobexd, color: "#FF61F6" },
//       { icon: SiAdobephotoshop, color: "#31A8FF" },
//       { icon: SiAdobeillustrator, color: "#FF9A00" },
//       { icon: SiAdobeindesign, color: "#FF3366" },
//       { icon: SiAdobelightroom, color: "#00A8E1" },
//     ],
//   },
//   {
//     category: "DevOps & Tools",
//     items: [
//       { icon: VscVscode, color: "#007ACC" },
//       { icon: FaGithub, color: "#181717" },
//       { icon: SiPostman, color: "#FF6C37" },
//       { icon: FaGitAlt, color: "#F05032" },
//     ],
//   },
// ];

// const Skill = () => {
//   const [hoveredIcon, setHoveredIcon] = useState(null);

//   return (
//     <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h4 className="text-primary font-semibold md:text-xl text-lg mb-2 uppercase">
//           Skill
//         </h4>
//         <h4 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
//           What I Bring to the Table
//         </h4>
//       </div>

//       {/* Skill Sections */}
//       {skills.map((skill, categoryIndex) => (
//         <div key={categoryIndex}>
//           <h3 className="font-bold text-xl text-white mt-10">
//             {skill.category}
//           </h3>
//           <div className="mt-4 flex flex-wrap gap-6 text-secondary">
//             {skill.items.map(({ icon: Icon, color }, iconIndex) => {
//               const iconId = `${categoryIndex}-${iconIndex}`;

//               return (
//                 <div
//                   key={iconId}
//                   className="transition-transform duration-300 ease-in-out hover:scale-110"
//                   onMouseEnter={() => setHoveredIcon(iconId)}
//                   onMouseLeave={() => setHoveredIcon(null)}
//                 >
//                   <Icon
//                     className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl transition-all duration-300 ease-in-out"
//                     style={{
//                       color: hoveredIcon === iconId ? color : "secondary",
//                     }}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Skill;
