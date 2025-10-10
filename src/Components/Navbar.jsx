import React from 'react';
import { Link } from 'react-router';
import img from '../assets/logo.png'
import { IoLogoGithub } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa6";
import { MdOutlineInstallDesktop } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
     <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 lg:px-16">
  
  <div className="navbar-start">

    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <Link to="/" className="flex items-center gap-2">
            <IoHomeOutline /> Home
          </Link>
        </li>
        <li>
          <Link to="/apps" className="flex items-center gap-2">
            <FaAppStore /> Apps
          </Link>
        </li>
        <li>
          <Link to="/installation" className="flex items-center gap-2">
            <MdOutlineInstallDesktop /> Installation
          </Link>
        </li>
      </ul>
    </div>

  
    <div className="flex items-center gap-2">
      <img className="w-[40px] h-[40px]" src={img} alt="Logo" />
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"
      >
        HERO.IO
      </Link>
    </div>
  </div>

  
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      <li className="hover:bg-[#00b87a] rounded-md transition-all duration-200">
        <Link to="/" className="flex items-center gap-2">
          <IoHomeOutline /> Home
        </Link>
      </li>
      <li className="hover:bg-[#00b87a] rounded-md transition-all duration-200">
        <Link to="/apps" className="flex items-center gap-2">
          <FaAppStore /> Apps
        </Link>
      </li>
      <li className="hover:bg-[#00b87a] rounded-md transition-all duration-200">
        <Link to="/installation" className="flex items-center gap-2">
          <MdOutlineInstallDesktop /> Installation
        </Link>
      </li>
    </ul>
  </div>


  <div className="navbar-end">
    <a
      href="https://github.com/deluwarhoisn"
      className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none flex items-center gap-2 h-10 md:h-12 lg:h-14"
    >
      <IoLogoGithub /> Contribute
    </a>
  </div>
</div>

    </div>
  );
};

export default Navbar;