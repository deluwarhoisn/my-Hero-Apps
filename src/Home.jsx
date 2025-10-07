import React from 'react';
import hero from '../assets/hero.png';
import { BiLogoPlayStore } from "react-icons/bi";
import { FaAppStoreIos } from "react-icons/fa";
import appsData from '../public/Data.json'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
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
                {/* <div className='md:grid grid-cols-4 gap-4'>
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
                </div> */}
                <div className='md:grid grid-cols-4 gap-8 pt-6 px-10 '>
                    {appsData.map((app) => (
                        <div key={app.id}>
                            <div className="card bg-base-100 w-80  shadow-sm h-[435px]">
                                <figure>
                                    <img className='rounded ' src={app.image} alt={app.title} />
                                </figure>
                                <div className=" card-body">
                                    <h2 className="card-title">{app.title}</h2>

                                    <div className="card-actions justify-between">
                                        <div className="badge badge-outline">{app.size}</div>
                                        <div className="bg-amber-500 badge badge-outline">{app.ratingAvg} ⭐</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='md:pt-10 bg-black md:h-[183px]'>
                <div className='text-white flex justify-center md:gap-250 '>
                    <p>HERO.IO</p>
                    <div><p>Social Links</p>
                        <div className='flex gap-2 pt-3'>
                            <FaFacebookF />
                            <CiLinkedin />
                            <FaXTwitter />
                        </div>
                    </div>
                </div>
                <p className='text-white text-center md:pt-10'>Copyright © 2025 - All right reserved</p>
            </div>
        </div>
    );
};

export default Home;