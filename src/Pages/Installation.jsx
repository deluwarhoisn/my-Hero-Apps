import React from 'react';
import react from '../assets/react.svg'
const Installation = () => {
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-[48px] font-bold'>Your Installed Apps</h1>
        <p className='text-[20px]'>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className='flex items-center justify-between px-6'>
        <h1 className='text-[24px] font-semibold'>1 Apps Found</h1>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">Sort By Size</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
      <div className='h-[300px]'>
    <div className='p-3 flex justify-between items-center shadow-sm'>
   <div> <img className='border-2 ' src={react} alt="" />
    <h1 className='text-[20px] px-10'>Forest: Focus for Productivity</h1>
    <div className='flex gap-4 px-10'>
        <p>9M</p>
    <p>5</p>
    <p>258 MB</p>
    </div>
    </div>

    <div><button className='btn bg-[#00D390] text-white'>Uninstall</button></div>
    </div>
      </div>
    </div>
  );
};

export default Installation;