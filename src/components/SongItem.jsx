import React from "react";

const SongItem = ({ image, name, desc, id }) => {
  return (
    <div className="min-w-[180px] py-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SongItem;
