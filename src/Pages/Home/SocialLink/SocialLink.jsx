// import React from "react";
// import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FiGithub } from "react-icons/fi";

// const SocialLink = () => {
//   return (
//     <div>
//       <div className="text-center">
//         <h4 className="text-primary font-semibold text-xl mb-[10px]">Social</h4>
//         <h4 className="text-white text-4xl font-bold">Let's Stay Connected</h4>
//       </div>

//       <div className="flex justify-center mt-10 gap-5">
//         <button className="px-4 py-4 rounded-xl bg-neutral text-white hover:">
//           <FaFacebookF size={32} />
//         </button>
//         <button className="px-4 py-4 rounded-xl bg-neutral text-white hover:">
//           <FiGithub size={32} />
//         </button>
//         <button className="px-4 py-4 rounded-xl bg-neutral text-white hover:">
//           <FaLinkedinIn size={32} />
//         </button>
//         <button className="px-4 py-4 rounded-xl bg-neutral text-white hover:">
//           <FaXTwitter size={32} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SocialLink;

import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const SocialLink = () => {
  return (
    <div>
      {/* Heading */}
      <div className="text-center">
        <h4 className="text-primary font-semibold text-xl mb-2">Social</h4>
        <h4 className="text-white text-4xl font-bold">Let's Stay Connected</h4>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center mt-10 gap-5">
        <a
          href="https://web.facebook.com/raufurislam.nayem"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-4 rounded-xl bg-neutral text-secondary transition duration-300 hover:bg-[#1877F2]"
        >
          <FaFacebookF size={32} />
        </a>
        <a
          href="https://github.com/raufurislam"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-4 rounded-xl bg-neutral text-secondary transition duration-300 hover:bg-[#333]"
        >
          <FiGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/raufur-islam-698030319/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-4 rounded-xl bg-neutral text-secondary transition duration-300 hover:bg-[#0077B5]"
        >
          <FaLinkedinIn size={32} />
        </a>
        <a
          href="https://x.com/raufurNayem"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-4 rounded-xl bg-neutral text-secondary transition duration-300 hover:bg-[#1DA1F2]"
        >
          <FaXTwitter size={32} />
        </a>
      </div>
    </div>
  );
};

export default SocialLink;
