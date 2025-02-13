// import React from "react";

// const Hero = () => {
//   return (
//     <div className="">
//       <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* description */}
//           <div className="h-full md:flex items-center">
//             <div className="text-center md:text-left">
//               <h3 className="text-white text-2xl font-normal mb-1 mt-8 md:mt-0">
//                 Hi all. I am
//               </h3>
//               <h3 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3">
//                 Raufur Islam
//               </h3>
//               <h3 className="text-primary lg:text-xl font-semibold mb-2 leading-relaxed">
//                 {">"} Junior Full stack Developer <br /> & UI/UX and Graphics
//                 Enthusiast
//               </h3>
//               <button className="text-xl font-bold border-b-2 mt-4 text-white">
//                 See Resume
//               </button>
//             </div>
//           </div>
//           {/* image */}
//           <div className="flex justify-center">
//             <img
//               src="https://i.ibb.co.com/3mP81JsF/github-banner-10-09.png"
//               alt=""
//               className="w-[500px] xl:w-[700px]"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-neutral py-8">
//         <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-32 px-4 text-accent font-semibold">
//           {/* Development Tools */}
//           <div className="flex flex-wrap justify-center  md:gap-6 gap-2 lg:text-lg md:text-base text-xs mb-3 border-gray-600">
//             <div>HTML</div>
//             <div>CSS</div>
//             <div>TAILWIND</div>
//             <div>JAVASCRIPT</div>
//             <div>REACT</div>
//             <div>NODEJS</div>
//             <div>EXPRESSJS</div>
//             <div>MONGODB</div>
//             <div>FIREBASE</div>
//           </div>

//           {/* Graphics Tools */}
//           <div className="flex flex-wrap justify-center md:gap-6 gap-2 lg:text-lg md:text-base text-xs">
//             <div>FIGMA</div>
//             <div>XD</div>
//             <div>PHOTOSHOP</div>
//             <div>ILLUSTRATOR</div>
//             <div>INDESIGN</div>
//             <div>LIGHTROOM</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

// import React, { useState } from "react";

// const Hero = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pdfUrl =
//     "https://drive.google.com/file/d/18MwaOJRroQlcc0NK59u8ero1vqBIVf9k/preview";
//   const downloadUrl =
//     "https://drive.google.com/uc?export=download&id=18MwaOJRroQlcc0NK59u8ero1vqBIVf9k";

//   return (
//     <div className="">
//       <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* description */}
//           <div className="h-full md:flex items-center">
//             <div className="text-center md:text-left">
//               <h3 className="text-white text-2xl font-normal mb-1 mt-8 md:mt-0">
//                 Hi all. I am
//               </h3>
//               <h3 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3">
//                 Raufur Islam
//               </h3>
//               <h3 className="text-primary lg:text-xl font-semibold mb-2 leading-relaxed">
//                 {">"} Junior Full stack Developer <br /> & UI/UX and Graphics
//                 Enthusiast
//               </h3>
//               <button
//                 className="text-xl font-bold border-b-2 mt-4 text-white"
//                 onClick={() => setIsOpen(true)}
//               >
//                 See Resume
//               </button>
//             </div>
//           </div>
//           {/* image */}
//           <div className="flex justify-center">
//             <img
//               src="https://i.ibb.co.com/3mP81JsF/github-banner-10-09.png"
//               alt=""
//               className="w-[500px] xl:w-[700px]"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-neutral py-8">
//         <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-32 px-4 text-accent font-semibold">
//           {/* Development Tools */}
//           <div className="flex flex-wrap justify-center  md:gap-6 gap-2 lg:text-lg md:text-base text-xs mb-3 border-gray-600">
//             <div>HTML</div>
//             <div>CSS</div>
//             <div>TAILWIND</div>
//             <div>JAVASCRIPT</div>
//             <div>REACT</div>
//             <div>NODEJS</div>
//             <div>EXPRESSJS</div>
//             <div>MONGODB</div>
//             <div>FIREBASE</div>
//           </div>

//           {/* Graphics Tools */}
//           <div className="flex flex-wrap justify-center md:gap-6 gap-2 lg:text-lg md:text-base text-xs">
//             <div>FIGMA</div>
//             <div>XD</div>
//             <div>PHOTOSHOP</div>
//             <div>ILLUSTRATOR</div>
//             <div>INDESIGN</div>
//             <div>LIGHTROOM</div>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <dialog open className="modal modal-open">
//           <div className="modal-box w-full max-w-4xl lg:max-w-5xl">
//             <iframe
//               src={pdfUrl}
//               className="w-full h-[500px]"
//               allow="autoplay"
//             ></iframe>
//             <div className="flex justify-between mt-4">
//               <button
//                 className="btn btn-error"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Close
//               </button>
//               <a href={downloadUrl} className="btn btn-primary" download>
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         </dialog>
//       )}
//     </div>
//   );
// };

// export default Hero;

// import React, { useState } from "react";
// import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";

// const Hero = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const pdfUrl =
//     "https://drive.google.com/file/d/18MwaOJRroQlcc0NK59u8ero1vqBIVf9k/preview";
//   const downloadUrl =
//     "https://drive.google.com/uc?export=download&id=18MwaOJRroQlcc0NK59u8ero1vqBIVf9k";

//   return (
//     <div className="">
//       <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* description */}
//           <div className="h-full md:flex items-center">
//             <div className="text-center md:text-left">
//               <h3 className="text-white text-2xl font-normal mb-1 mt-8 md:mt-0">
//                 Hi all. I am
//               </h3>
//               <h3 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3">
//                 Raufur Islam
//               </h3>
//               <h3 className="text-primary lg:text-xl font-semibold mb-2 leading-relaxed">
//                 {">"} Junior Full stack Developer <br /> & UI/UX and Graphics
//                 Enthusiast
//               </h3>
//               <button
//                 className="text-xl font-bold border-b-2 mt-4 text-white"
//                 onClick={() => setIsOpen(true)}
//               >
//                 See Resume
//               </button>
//             </div>
//           </div>
//           {/* image */}
//           <div className="flex justify-center">
//             <img
//               src="https://i.ibb.co.com/3mP81JsF/github-banner-10-09.png"
//               alt=""
//               className="w-[500px] xl:w-[700px]"
//             />
//           </div>
//         </div>
//       </div>

//       <div className="bg-neutral py-8">
//         <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-32 px-4 text-accent font-semibold">
//           {/* Development Tools */}
//           <div className="flex flex-wrap justify-center  md:gap-6 gap-2 lg:text-lg md:text-base text-xs mb-3 border-gray-600">
//             <div>HTML</div>
//             <div>CSS</div>
//             <div>TAILWIND</div>
//             <div>JAVASCRIPT</div>
//             <div>REACT</div>
//             <div>NODEJS</div>
//             <div>EXPRESSJS</div>
//             <div>MONGODB</div>
//             <div>FIREBASE</div>
//           </div>

//           {/* Graphics Tools */}
//           <div className="flex flex-wrap justify-center md:gap-6 gap-2 lg:text-lg md:text-base text-xs">
//             <div>FIGMA</div>
//             <div>XD</div>
//             <div>PHOTOSHOP</div>
//             <div>ILLUSTRATOR</div>
//             <div>INDESIGN</div>
//             <div>LIGHTROOM</div>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <dialog open className="modal modal-open">
//           <div className="modal-box w-full max-w-4xl lg:max-w-5xl relative">
//             {/* Buttons at top-right */}
//             <div className="absolute top-4 right-4 flex gap-3">
//               <a
//                 href={downloadUrl}
//                 className="btn btn-primary btn-sm flex items-center"
//                 download
//               >
//                 <AiOutlineDownload size={20} />
//               </a>
//               <button
//                 className="btn btn-error btn-sm flex items-center"
//                 onClick={() => setIsOpen(false)}
//               >
//                 <AiOutlineClose size={20} />
//               </button>
//             </div>
//             {/* PDF Viewer */}
//             <iframe
//               src={pdfUrl}
//               className="w-full h-[500px]"
//               allow="autoplay"
//             ></iframe>
//           </div>
//         </dialog>
//       )}
//     </div>
//   );
// };

// export default Hero;
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pdfUrl =
    "https://drive.google.com/file/d/18MwaOJRroQlcc0NK59u8ero1vqBIVf9k/preview";
  const downloadUrl =
    "https://drive.google.com/uc?export=download&id=18MwaOJRroQlcc0NK59u8ero1vqBIVf9k";

  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* description */}
          <div className="h-full md:flex items-center">
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl font-normal mb-1 mt-8 md:mt-0">
                Hi all. I am
              </h3>
              <h3 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3">
                Raufur Islam
              </h3>
              <h3 className="text-primary lg:text-xl font-semibold mb-2 leading-relaxed">
                {">"} Junior Full stack Developer <br /> & UI/UX and Graphics
                Enthusiast
              </h3>
              <button
                className="text-xl font-bold border-b-2 mt-4 text-white"
                // onClick={() => setIsOpen(true)}
              >
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
          <div className="flex flex-wrap justify-center  md:gap-6 gap-2 lg:text-lg md:text-base text-xs mb-3 border-gray-600">
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
          <div className="flex flex-wrap justify-center md:gap-6 gap-2 lg:text-lg md:text-base text-xs">
            <div>FIGMA</div>
            <div>XD</div>
            <div>PHOTOSHOP</div>
            <div>ILLUSTRATOR</div>
            <div>INDESIGN</div>
            <div>LIGHTROOM</div>
          </div>
        </div>
      </div>

      {isOpen && (
        <dialog open className="modal modal-open">
          <div className="modal-box w-full max-w-4xl lg:max-w-5xl relative">
            {/* Buttons at top-right */}
            <div className="absolute top-4 right-4 flex gap-3">
              <a
                href={downloadUrl}
                className="btn btn-primary btn-sm flex items-center"
                download
              >
                <AiOutlineDownload size={20} />
              </a>
              <button
                className="btn btn-error btn-sm flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
            {/* PDF Viewer */}
            <iframe
              src={pdfUrl}
              className="w-full h-[500px]"
              allow="autoplay"
            ></iframe>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default Hero;
