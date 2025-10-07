import React from 'react';
import hero from '../assets/hero.png';
const Home = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-[72px] '>We Build<br /><span className='h-14 '>Productive</span>Apps</h1>
                <p className=''>At.HERO.IO. we craft innovative apps designed to make everyday life simpler, smarter, and more exciting <br />.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='pt-16 space-x-6 '>
                    <button className='h-[56px] w-[200px] border-2 '>Google Play</button>
                    <button className='border-2 h-[56px] w-[200px]'> App Store</button>
                </div>
                <div className='pt-4 px-50'>
                    <img src={hero} alt="" />

                </div>
                <div className='pt-10 bg-h-14 bg-linear-to-r from-[#6337E5] to-[#9865F3] h-[410px]'>
                    <h1 className='text-[48px] text-white pt-5'>Trusted by Millions, Built for You</h1>
                    <div className='flex justify-center items-center gap-[24px] pt-10'>
                         <div className='text-white'>
                        <p>Total Downloads</p>
                        <h1 className='text-[64px] text-white font-semibold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <p>Total Reviews</p>
                        <h1 className='text-[64px] text-white font-semibold'>906K</h1>
                        <p>46% more than last month</p>
                    </div>
                    <div className='text-white'>
                        <p>Active Apps</p>
                        <h1 className='text-[64px] text-white font-semibold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;