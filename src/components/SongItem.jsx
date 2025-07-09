import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ image, name, desc, id }) => {
  const { playTrackId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playTrackId(id)}
      className="min-w-[180px] py-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SongItem;
