import React from "react";
import react from "../assets/react.svg";

const installations = [
  {
    id: 1,
    name: "Forest: Focus for Productivity",
    downloads: "9M",
    rating: 5,
    size: "258 MB",
  },
  {
    id: 2,
    name: "TodoMaster: Task Manager Pro",
    downloads: "5M",
    rating: 4.8,
    size: "175 MB",
  },
  {
    id: 3,
    name: "FitLife Tracker",
    downloads: "12M",
    rating: 4.9,
    size: "210 MB",
  },
];

const Installation = () => {
  return (
    <div className="px-4 md:px-10 lg:px-16 py-10">
    
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 mt-2 text-base md:text-lg">
          Explore All Trending Apps on the Market developed by us.
        </p>
      </div>

      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-700">
          ({installations.length}) Apps Found
        </h1>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-outline">
            Sort By Size
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow-md z-10"
          >
            <li><a>Smallest First</a></li>
            <li><a>Largest First</a></li>
          </ul>
        </div>
      </div>

    
      <div className="space-y-5">
        {installations.map((app) => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row justify-between items-center border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 bg-white"
          >
          
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <img
                className="h-16 w-16 rounded-lg border object-contain bg-gray-50"
                src={react}
                alt={app.name}
              />

              <div>
                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                  {app.name}
                </h2>
                <div className="flex justify-center sm:justify-start gap-4 text-gray-500 text-sm md:text-base mt-1">
                  <p>{app.downloads} Downloads</p>
                  <p>{app.rating}⭐</p>
                  <p>{app.size}</p>
                </div>
              </div>
            </div>

            
            <button className="btn bg-[#00D390] hover:bg-[#00b57a] text-white px-6 mt-3 sm:mt-0">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
