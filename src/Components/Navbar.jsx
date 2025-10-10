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
           <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
    <Link to="/home"><IoHomeOutline /> Home</Link>
      <Link to="/Apps"><FaAppStore />Apps</Link>
      <Link to="/Installation"><MdOutlineInstallDesktop />Installation</Link>
      </ul>
    </div>
    <img className='w-[40px] h-[40px]' src={img} alt="" />
    <a className='btn btn-ghost text-xl  bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent' href="/">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='hover:bg-[#00b87a]'>  <Link to="/"><IoHomeOutline /> Home</Link></li>
      <li className='hover:bg-[#00b87a]'>
      
         <Link to="/Apps"><FaAppStore />Apps</Link>
          
      
      </li>
      <li className='hover:bg-[#00b87a]'><Link to="/Installation"><MdOutlineInstallDesktop />Installation</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className='btn lg:h-14 md:h-14 h-10 bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white' href="https://github.com/deluwarhoisn"><IoLogoGithub /> Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;