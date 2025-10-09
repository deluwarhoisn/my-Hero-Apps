import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import imgg from '../assets/logo.png'
const Footer = () => {
    return (
        <div>
             <div className='pt-10 bg-black h-[183px]'>
                <div className='text-white flex justify-center gap-250 '>
                   
                   <div className='flex items-center gap-2'>
                    <img className='w-[40px] h-[40px] text-white' src={imgg} alt="" />
                     <p>HERO.IO</p>
                   </div>
                    <div><p>Social Links</p>
                        <div className='flex gap-2 pt-3'>
                          <FaLinkedinIn />
                          <FaXTwitter />
                          <FaFacebookF />
                        </div>
                    </div>
                </div>
                <p className='text-white text-center pt-10'>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;