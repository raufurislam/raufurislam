// // import React from "react";
// // import { FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
// // import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
// // import { IoLogoFigma, IoLogoFirebase } from "react-icons/io5";
// // import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
// // import {
// //   SiAdobeillustrator,
// //   SiAdobeindesign,
// //   SiAdobelightroom,
// //   SiAdobephotoshop,
// //   SiAdobexd,
// //   SiExpress,
// //   SiMongodb,
// //   SiPostman,
// // } from "react-icons/si";
// // import { VscVscode } from "react-icons/vsc";

// // const Skill = () => {
// //   return (
// //     <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
// //       {/* Heading */}
// //       <div className="text-center mb-10">
// //         <h4 className="text-primary font-semibold text-xl mb-2">Skill</h4>
// //         <h4 className="text-white text-4xl font-bold">
// //           What I Bring to the Table
// //         </h4>
// //       </div>

// //       {/* Skill */}
// //       {/* frontend */}
// //       <div>
// //         <h3 className="font-bold text-xl text-white">Frontend Development</h3>
// //         <div className="mt-4 flex gap-6 text-secondary">
// //           <div>
// //             <FaHtml5 size={52} />
// //           </div>
// //           <div>
// //             <IoLogoCss3 size={52} />
// //           </div>
// //           <div>
// //             <RiTailwindCssFill size={52} />
// //           </div>
// //           <div>
// //             <FaJs size={52} />
// //           </div>
// //           <div>
// //             <FaReact size={52} />
// //           </div>
// //           <div>
// //             <RiNextjsFill size={52} />
// //           </div>
// //         </div>
// //       </div>
// //       {/* backend */}
// //       <div>
// //         <h3 className="font-bold text-xl text-white mt-10">
// //           Backend Development
// //         </h3>
// //         <div className="mt-4 flex gap-6 text-secondary">
// //           <div>
// //             <IoLogoNodejs size={52} />
// //           </div>
// //           <div>
// //             <SiExpress size={52} />
// //           </div>
// //           <div>
// //             <SiMongodb size={52} />
// //           </div>
// //           <div>
// //             <IoLogoFirebase size={52} />
// //           </div>
// //         </div>
// //       </div>
// //       {/* Graphic */}
// //       <div>
// //         <h3 className="font-bold text-xl text-white mt-10">
// //           UI/UX & Graphics Design
// //         </h3>
// //         <div className="mt-4 flex gap-6 text-secondary">
// //           <div>
// //             <IoLogoFigma size={52} />
// //           </div>
// //           <div>
// //             <SiAdobexd size={52} />
// //           </div>
// //           <div>
// //             <SiAdobephotoshop size={52} />
// //           </div>
// //           <div>
// //             <SiAdobeillustrator size={52} />
// //           </div>
// //           <div>
// //             <SiAdobeindesign size={52} />
// //           </div>
// //           <div>
// //             <SiAdobelightroom size={52} />
// //           </div>
// //         </div>
// //       </div>
// //       {/* Dev Tool */}
// //       <div>
// //         <h3 className="font-bold text-xl text-white mt-10">DevOps & Tools</h3>
// //         <div className="mt-4 flex gap-6 text-secondary">
// //           <div>
// //             <VscVscode size={52} />
// //           </div>
// //           <div>
// //             <FaGithub size={52} />
// //           </div>
// //           <div>
// //             <SiPostman size={52} />
// //           </div>
// //           <div>
// //             <FaGitAlt size={52} />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skill;

import React from "react";
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
      { icon: FaHtml5, color: "orange-500" },
      { icon: IoLogoCss3, color: "blue-500" },
      { icon: RiTailwindCssFill, color: "cyan-400" },
      { icon: FaJs, color: "yellow-400" },
      { icon: FaReact, color: "blue-400" },
      { icon: RiNextjsFill, color: "gray-400" },
    ],
  },
  {
    category: "Backend Development",
    items: [
      { icon: IoLogoNodejs, color: "green-500" },
      { icon: SiExpress, color: "gray-400" },
      { icon: SiMongodb, color: "green-400" },
      { icon: IoLogoFirebase, color: "yellow-500" },
    ],
  },
  {
    category: "UI/UX & Graphics Design",
    items: [
      { icon: IoLogoFigma, color: "purple-400" },
      { icon: SiAdobexd, color: "pink-500" },
      { icon: SiAdobephotoshop, color: "blue-600" },
      { icon: SiAdobeillustrator, color: "orange-500" },
      { icon: SiAdobeindesign, color: "pink-600" },
      { icon: SiAdobelightroom, color: "blue-400" },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      { icon: VscVscode, color: "blue-500" },
      { icon: FaGithub, color: "gray-300" },
      { icon: SiPostman, color: "orange-500" },
      { icon: FaGitAlt, color: "red-500" },
    ],
  },
];

const Skill = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h4 className="text-primary font-semibold text-xl mb-2">Skill</h4>
        <h4 className="text-white text-4xl font-bold">
          What I Bring to the Table
        </h4>
      </div>

      {/* Skill Sections */}
      {skills.map((skill, index) => (
        <div key={index} className="mt-10">
          <h3 className="font-bold text-xl text-white">{skill.category}</h3>
          <div className="mt-4 flex flex-wrap gap-6 text-secondary">
            {skill.items.map((item, idx) => (
              <div
                key={idx}
                className={`transition-transform transform hover:scale-110 duration-300 
                hover:text-${item.color} 
                hover:shadow-none hover:ring-0 hover:ring-${item.color} hover:ring-opacity-50
                hover:text-shadow-[0_0_10px]`}
              >
                <item.icon size={52} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skill;
