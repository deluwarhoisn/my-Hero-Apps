import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import appData from "../../public/Data2.json";
import { toast } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const app = appData.find((a) => a.id === Number(id));
  const [installed, setInstalled] = useState(false);

  if (!app) {
    return <p className="text-center mt-10 text-red-500">App not found! </p>;
  }

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to="/" className="text-[#00D390] font-semibold hover:underline">
        ← Back to Apps
      </Link>

      <div className="flex flex-col md:flex-row items-center mt-8 gap-8">
        <img
          src={app.image}
          alt={app.title}
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />

        <div>
          <h1 className="text-4xl font-bold mb-2">{app.title}</h1>
          <p className="text-gray-600 mb-4">{app.description}</p>

          <div className="flex gap-5 mb-4">
            <span className="badge badge-outline text-[#00D390]">
              ⭐ {app.ratingAvg} / 5
            </span>
            <span className="badge badge-outline">📥 {app.reviews} Reviews</span>
            <span className="badge badge-outline">💾 {app.size} MB</span>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn ${
              installed
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#00D390] text-white hover:bg-[#00b87a]"
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
