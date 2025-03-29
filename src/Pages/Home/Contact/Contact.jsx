import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div className="max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h4 className="text-primary font-semibold md:text-xl text-lg mb-2 uppercase">
          Contact
        </h4>
        <h4 className="text-white lg:text-4xl md:text-3xl text-2xl font-bold">
          Reach Out to Me
        </h4>

        <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-5">
          <div className="flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-neutral-500 pb-5 md:pb-0 md:pr-5">
            <a
              href="tel:+8801648068834"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-4 flex flex-col items-center rounded-xl bg-neutral text-secondary transition duration-300 
      hover:bg-green-500 hover:text-white"
            >
              <FaPhoneAlt size={32} />
            </a>
            <p className="mt-2">Phone</p>
            <p className="mt-1 text-secondary">+8801648068834</p>
          </div>

          <div className="flex flex-col items-center justify-center border-b-2 md:border-b-0 md:border-r-2 border-neutral-500 pb-5 md:pb-0 md:pr-5">
            <a
              href="mailto:raufurislam@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-4 flex flex-col items-center rounded-xl bg-neutral text-secondary transition duration-300 
      hover:bg-[#007bff] hover:text-white"
            >
              <BiLogoGmail size={32} />
            </a>
            <p className="mt-2">Email</p>
            <p className="mt-1 text-secondary">raufurislam@gmail.com</p>
          </div>

          <div className="flex flex-col items-center justify-center pb-5 md:pb-0">
            <a
              href="https://wa.me/+8801648068834"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-4 flex flex-col items-center rounded-xl bg-neutral text-secondary transition duration-300 
      hover:bg-[#128c7e] hover:text-white"
            >
              <IoLogoWhatsapp size={32} />
            </a>
            <p className="mt-2">Whatsapp</p>
            <p className="mt-1 text-secondary">+8801648068834</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
