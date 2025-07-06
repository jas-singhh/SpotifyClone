import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img onClick={() => navigate(-1)} src={assets.arrow_left} alt="" className="w-7 bg-black rounded-2xl cursor-pointer p-2" />
          <img onClick={() => navigate(1)} src={assets.arrow_right} alt="" className="w-7 bg-black rounded-2xl cursor-pointer p-2" />
        </div>

        <div className="flex items-center gap-2">
          <p className="hidden lg:block text-black bg-white px-4 py-1 rounded-2xl text-[14px] font-semibold cursor-pointer">
            Explore Premium
          </p>

          <p className="hidden lg:block text-white bg-black px-4 py-1 rounded-2xl text-[14px] cursor-pointer">Install App</p>

          <p className="flex bg-purple-500 justify-center items-center rounded-full w-7 h-7 text-black">S</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="bg-white text-black px-4 py-1 mt-3 rounded-2xl text-sm cursor-pointer">All</p>
        <p className="bg-[#0000004d] text-white px-4 py-1 mt-3 rounded-2xl text-sm cursor-pointer">Music</p>
        <p className="bg-[#0000004d] text-white px-4 py-1 mt-3 rounded-2xl text-sm cursor-pointer">Podcasts</p>
      </div>
    </>
  );
};

export default Navbar;
