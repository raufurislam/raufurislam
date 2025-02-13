import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const link = (
    <>
      <li className="text-secondary hover:text-white">
        <a href="#social">Social</a>
      </li>
      <li className="text-secondary hover:text-white">
        <a href="#aboutme">About Me</a>
      </li>
      <li className="text-secondary hover:text-white">
        <a href="#skills">Skills</a>
      </li>
      <li className="text-secondary hover:text-white">
        <a href="#education">Education</a>
      </li>
      {/* <li className="text-secondary hover:text-white">
        <a href="#experience">Experience</a>
      </li> */}
      <li className="text-secondary hover:text-white">
        <a href="#projects">Projects</a>
      </li>
    </>
  );
  return (
    <div className="shadow-md fixed top-0 w-full z-50 bg-[#0D1117]">
      <div className="navbar max-w-screen-2xl mx-auto md:px-4 lg:px-20 px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost px-0 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm px-0 dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost text-xl text-white px-4 lg:px-0"
          >
            {" "}
            <img
              src="https://i.ibb.co.com/qYC6YkKw/logo-12.png"
              className="w-8"
              alt=""
            />
            Raufur Islam
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a href="#contact" className="text-primary font-bold">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
