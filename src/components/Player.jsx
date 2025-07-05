import React from "react";
import { assets, songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="h-[10%] w-full bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-10" src={songsData[0].image} alt="Album image" />
        <div className="flex flex-col">
          <p className="font-semibold">{songsData[0].name}</p>
          <p className="text-sm text-gray-400">{songsData[0].desc.slice(0, 12).concat("...")}</p>
        </div>
      </div>

      <div className="flex flex-col items-center m-auto gap-1">
        <div className="flex  gap-4">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="Shuffle icon" />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="Previous icon" />

          <img className="w-4 cursor-pointer" src={assets.play_icon} alt="Play icon" />

          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="Next icon" />

          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="Loop icon" />
        </div>

        <div className="flex items-center gap-5">
          <p>1:30</p>
          <div className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1 border-none w-0 bg-green-800 rounded-full" />
          </div>
          <p>3:00</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        <img className="w-4" src={assets.plays_icon} alt="Plays icon" />
        <img className="w-4" src={assets.mic_icon} alt="Mic icon" />
        <img className="w-4" src={assets.queue_icon} alt="Queue icon" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker icon" />
        <img className="w-4" src={assets.volume_icon} alt="Volume icon" />
        {/* Volume bar */}
        <div className="w-[100px] h-1 bg-gray-500 rounded-full">
          <hr className="h-1 border-none w-[50%] bg-white rounded-full" />
        </div>

        <img className="w-4" src={assets.mini_player_icon} alt="Mini player icon" />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom icon" />
      </div>
    </div>
  );
};

export default Player;
