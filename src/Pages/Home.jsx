import React from 'react';
import hero from '../assets/hero.png'
import appsData from '../../public/Data.json'
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import dawn from '../assets/icon-downloads.png'
import { Link } from 'react-router';


const Home = () => {
    return (
        <div>
            <div>
 
  <div className="text-center px-4 md:px-10 lg:px-20">
    <h1 className="lg:text-[72px] md:text-[60px] sm:text-[42px] text-3xl font-bold leading-tight">
      We Build
      <br />
      <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
        Productive
      </span>{' '}
      Apps
    </h1>

    <p className="mt-4 text-gray-600 text-sm md:text-base">
      At <span className="font-semibold">HERO.IO</span>, we craft innovative apps designed to make everyday life
      simpler, smarter, and more exciting.
      <br />
      Our goal is to turn your ideas into digital experiences that truly make an impact.
    </p>

 
    <div className="pt-10 md:pt-14 space-y-4 md:space-y-0 md:space-x-6 flex flex-col md:flex-row justify-center items-center">
      <button className="btn h-[56px] w-[200px] text-[18px] font-semibold flex items-center justify-center gap-2 bg-gray-200">
        <a href="https://play.google.com/store/games?hl=en" className="flex items-center gap-2">
          <FaGooglePlay /> Google Play
        </a>
      </button>
      <button className="btn h-[56px] w-[200px] text-[18px] font-semibold flex items-center justify-center gap-2 bg-gray-200">
        <a href="https://www.apple.com/app-store/" className="flex items-center gap-2">
          <GrAppleAppStore /> App Store
        </a>
      </button>
    </div>

    
    <div className="pt-10 md:pt-10 ">
      <img src={hero} alt="hero" className=" mx-auto max-w-full h-auto rounded-xl" />
    </div>

   
    <div className=" rounded-2xl bg-gradient-to-r from-[#6337E5] to-[#9865F3] text-white py-10 md:py-16 px-6">
      <h1 className="lg:text-[48px] md:text-[36px] text-2xl font-semibold">
        Trusted by Millions, Built for You
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mt-10">
        <div>
          <p className="opacity-80"> Total Downloads</p>
          <h1  className="lg:text-[64px] md:text-[48px] text-4xl font-bold"> 29.6M</h1>
          <p className="text-sm opacity-80">21% more than last month</p>
        </div>
        <div>
          <p className="opacity-80">Total Reviews</p>
          <h1 className="lg:text-[64px] md:text-[48px] text-4xl font-bold">906K</h1>
          <p className="text-sm opacity-80">46% more than last month</p>
        </div>
        <div>
          <p className="opacity-80">Active Apps</p>
          <h1 className="lg:text-[64px] md:text-[48px] text-4xl font-bold">132+</h1>
          <p className="text-sm opacity-80">31 more will launch</p>
        </div>
      </div>
    </div>
  </div>

 
  <div className="text-center mt-10 px-4 md:px-10 lg:px-20">
    <h1 className="lg:text-[64px] md:text-[48px] text-3xl font-bold">Trending Apps</h1>
    <p className="text-gray-600 text-sm md:text-base mt-2">
      Explore all trending apps on the market developed by us.
    </p>


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-6">
      {appsData.map((app) => (
        <div key={app.id} className="card bg-base-100 shadow-sm w-full h-[400px]">
          <figure>
            <img className="rounded-t-xl w-full h-[200px] object-cover" src={app.image} alt={app.title} />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg font-semibold">{app.title}</h2>
            <div className="card-actions justify-between pt-7">
              <div className="badge badge-outline text-[#00D390] font-semibold flex items-center gap-1">
                <img className="h-[16px] w-[16px]" src={dawn} alt="" /> {app.size}
              </div>
              <div className="bg-amber-500 badge badge-outline text-white font-medium">
                {app.ratingAvg} ⭐
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  
    <div className="text-center p-10">
      <button className="p btn bg-gradient-to-r from-[#6337E5] to-[#9865F3] text-white w-[180px] h-[50px] text-lg">
        <Link to="/apps">Show All</Link>
      </button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Home;