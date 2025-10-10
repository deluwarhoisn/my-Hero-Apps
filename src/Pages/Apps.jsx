import React, { useState } from 'react';
import appData from '../../public/Data2.json';
import dawn from '../assets/icon-downloads.png';
import error from '../assets/App-Error.png'
import { Link } from 'react-router';
const Apps = () => {
  const [search, setSearch] = useState('');

 
  const term = search.trim().toLowerCase();

  
  const searchedProducts = term
    ? appData.filter(app => app.title.toLowerCase().includes(term))
    : appData;

  console.log(searchedProducts);

  return (
    <div>
   
      <div className="text-center">
        <h1 className="text-[48px] font-bold">Our All Applications</h1>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

     
      <div className="flex justify-between p-8 items-center">
        <p className="text-2xl font-semibold">
          ({searchedProducts.length}) Apps Found 
        </p>

        <label className="input input-bordered flex items-center gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Apps"
            className="grow p-2  rounded"
          />
        </label>
      </div>

     
      <div className="card pt-4 p-8">
        <div className="md:grid grid-cols-4 gap-9">
          {searchedProducts.map((app) => (
            <div key={app.id}>
             <Link to="/AppDetails"> <div className=" card bg-base-100 w-[308px] shadow-sm hover:shadow-md p-5 transition-all duration-200">
                <figure>
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-56 w-full object-cover rounded-md"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{app.title}</h2>

                  <div className="card-actions justify-between mt-3">
                    <div className="badge badge-outline text-[#00D390] font-bold flex items-center gap-1">
                      <img
                        className="h-[16px] w-[16px]"
                        src={dawn}
                        alt="download icon"
                      />
                      {app.size} MB
                    </div>
                    <div className="badge badge-outline bg-amber-500 text-white">
                      {app.ratingAvg} ⭐
                    </div>
                  </div>
                </div>
              </div></Link>
            </div>
          ))}
        </div>

      
        {searchedProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8 text-lg">
            <img className='px-120' src={error} alt="" />  ”<span className='text-[48px] font-semibold'>OPPS!! APP NOT FOUND</span> ”.<p>The App you are requesting is not found on our system.  please try another apps</p>
          <button className='btn bg-linear-to-r from-[#6337E5] to-[#9865F3] text-white'> <a href="/apps">Go Back!</a></button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Apps;
