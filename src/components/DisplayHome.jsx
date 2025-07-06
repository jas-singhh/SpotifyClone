import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      {/* Main Content */}
      <div className="mt-4 py-2 ">
        <h1 className="font-bold text-lg">Featured Charts</h1>
        <div className="flex overflow-auto space-x-2">
          {albumsData.map((album, index) => (
            <AlbumItem key={index} image={album.image} name={album.name} desc={album.desc} id={album.id} />
          ))}
        </div>
      </div>

      <div className="mt-4 py-2">
        <h1 className="font-bold text-lg">Hot Today</h1>
        <div className="flex overflow-auto space-x-2">
          {songsData.map((song, index) => (
            <SongItem key={index} image={song.image} name={song.name} desc={song.desc} id={song.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
