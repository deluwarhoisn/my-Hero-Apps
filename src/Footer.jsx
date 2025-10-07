import React from 'react';

const Footer = () => {
    return (
        <div>
              <div className='pt-10 bg-black h-[183px]'>
                <div className='text-white flex justify-center gap-250 '>
                    <p>HERO.IO</p>
                    <div><p>Social Links</p>
                        <div className='flex gap-2 pt-3'>
                            <FaFacebookF />
                            <CiLinkedin />
                            <FaXTwitter />
                        </div>
                    </div>
                </div>
                <p className='text-white text-center pt-10'>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Footer;