import React from 'react';
import hero from '../assets/hero.png';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='lg:text-[]72px md:text-[72px] sm:text-[50px] text-3xl'>We Build<br /><span className='h-14 '>Productive</span>Apps</h1>
                <p className=''>At.HERO.IO. we craft innovative apps designed to make everyday life simpler, smarter, and more exciting <br />.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='lg:pt-16 md:pt-16 pt-10 space-x-6 '>
                    <button className='h-[56px] w-[200px] btn font-semibold'><BiLogoPlayStore /> Google Play</button>
                    <button className='btn h-[56px] w-[200px] font-semibold'><FaAppStoreIos /> App Store</button>
                </div>
                <div className='md:pt-4 md:px-50 lg:px-50 lg:pt-4 '>
                    <img src={hero} alt="" />

                </div>
                <div className='md:pt-10 bg-h-14 bg-linear-to-r from-[#6337E5] to-[#9865F3] md:h-[410px]'>
                    <h1 className='lg:text-[48px] md:text-[40px] text-3xl  text-white pt-5'>Trusted by Millions, Built for You</h1>
                    <div className='lg:flex md:flex  justify-center items-center gap-[24px] pt-10'>
                        <div className='text-white'>
                            <p>Total Downloads</p>
                            <h1 className='lg:text-[64px] md:text-[60px] text-4xl text-white font-semibold'>29.6M</h1>
                            <p>21% more than last month</p>
                        </div>
                        <div className='text-white'>
                            <p>Total Reviews</p>
                            <h1 className='lg:text-[64px] md:text-[60px] text-4xl text-white font-semibold'>906K</h1>
                            <p>46% more than last month</p>
                        </div>
                        <div className='text-white'>
                            <p>Active Apps</p>
                            <h1 className='lg:text-[64px] md:text-[60px] text-4xl text-white font-semibold'>132+</h1>
                            <p>31 more will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center pt-5'>
                    <h1 className='lg:text-[64px] md:text-[60px] text-4xl'>Trending Apps</h1>
                    <p>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='md:grid grid-cols-4 gap-4'>
                    <div>
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Card Title

                                </h2>

                                <div className="card-actions justify-between">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;