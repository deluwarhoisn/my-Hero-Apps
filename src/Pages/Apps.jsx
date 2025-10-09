import React from 'react';
import appData from '../../public/Data2.json'
import dawn from '../assets/icon-downloads.png'

const Apps = () => {
    return (
          <div>
            

            <div className=' text-center'>
                <h1 className='text-[48px] font-bold'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between p-8'>
                <p className='text-4xl font-semibold'>(132) Apps Found</p>
                <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
            </div>
            <div className='card pt-4 p-8'>

                  <div className="md:grid grid-cols-4 gap-9">
      {appData.map((app) => (
        <div key={app.id}>
          <div className="card bg-base-100 w-[308px] shadow-sm hover:shadow-md p-5">
            <figure>
              <img
                src={app.image}
                alt={app.title}
                className="h-56 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {app.title}
                
              </h2>
            


              <div className="card-actions justify-between mt-3">
                <div className="badge badge-outline text-[#00D390] font-bold"><img className='h-[16px] w-[16px]' src={dawn} alt="" /> {app.size}</div>
                <div className="badge badge-outline bg-amber-500">{app.ratingAvg} ⭐</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
                
            </div>
        </div>
    );
};

export default Apps;