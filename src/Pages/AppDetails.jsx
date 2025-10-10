import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import appData from "../../public/Data2.json";
import { toast } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const app = appData.find((a) => a.id === Number(id));
  const [installed, setInstalled] = useState(false);

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <p className="text-red-500 text-lg font-semibold mb-4">
          App not found!
        </p>
        <Link
          to="/apps"
          className="text-[#00D390] hover:underline font-medium"
        >
          ← Back to Apps
        </Link>
      </div>
    );
  }

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-10">
    
      <Link
        to="/apps"
        className="text-[#00D390] font-semibold hover:underline text-sm md:text-base"
      >
        ← Back to Apps
      </Link>

   
      <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-6 text-center md:text-left">
        App Information
      </h1>

  
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-base-100 shadow-md rounded-2xl p-6 md:p-10">
      
        <div className="flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-xl shadow-lg"
          />
        </div>

      
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-2">{app.title}</h2>
          <p className="text-gray-600 mb-6">{app.description}</p>

         
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8 text-sm md:text-base">
            <div className="bg-gray-50 p-3 rounded-md shadow-sm">
              <p className="font-semibold text-gray-700">⭐ Rating</p>
              <p className="text-[#00D390] font-bold">{app.ratingAvg} / 5</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md shadow-sm">
              <p className="font-semibold text-gray-700">📥 Downloads</p>
              <p className="text-[#00D390] font-bold">
                {app.reviews.toLocaleString()}
              </p>
            </div>
            <div className="bg-gray-50 p-3 rounded-md shadow-sm">
              <p className="font-semibold text-gray-700">💾 Size</p>
              <p className="text-[#00D390] font-bold">{app.size} MB</p>
            </div>
          </div>

          
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn w-[160px] ${
              installed
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#00D390] hover:bg-[#00b87a] text-white"
            }`}
          >
            {installed ? "✅ Installed" : "⬇ Install"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
