import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white w-[25%] h-full p-2 flex-col gap-2 hidden lg:flex">
      {/* Home and Search */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer" onClick={() => navigate("/")}>
          <img className="w-6" src={assets.home_icon} alt="Home icon" />
          <p className="font-semibold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search icon" />
          <p className="font-semibold">Search</p>
        </div>
      </div>

      {/* Your library */}
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack icon" />
            <p className="font-semibold">Your Library</p>
          </div>

          <div className="flex items-center gap-3 cursor-pointer">
            <img className="w-4" src={assets.plus_icon} alt="Plus icon" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create a playlist</h1>
          <p className="font-light">It's easy to get started</p>
          <button className="px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer">Create playlist</button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-3">
          <h1>Find a podcast</h1>
          <p className="font-light">We will help you find the perfect podcast</p>
          <button className="px-4 py-1 bg-white text-[15px] text-black rounded-full mt-4 cursor-pointer">Browse podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
