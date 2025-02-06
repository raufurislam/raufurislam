import React from "react";

const Navbar = () => {
  const link = (
    <>
      <li>
        <a>Social</a>
      </li>
      <li>
        <a>About Me</a>
      </li>
      <li>
        <a>Skills</a>
      </li>
      <li>
        <a>Education</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
    </>
  );
  return (
    <div className="shadow-md">
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
                className="h-5 w-5"
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
              className="menu menu-sm px-0 dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl px-4 lg:px-0">Raufur Islam</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a className="text-primary font-bold">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
