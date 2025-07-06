import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, songsData, assets } from "../assets/assets";
import { Clock } from "lucide-react";

const DisplayAlbum = () => {
  const id = useParams().id;
  console.log(`Album ID: ${id}`);
  const album = albumsData[id];

  return (
    <>
      <Navbar />
      <div className="mt-4 flex flex-col md:flex-row gap-8">
        <img src={album.image} alt="Album Cover" className="w-42 h-42 object-cover" />
        <div className="flex flex-col justify-end">
          <p>Playlist</p>
          <h2 className="text-4xl font-bold mb-4 md:text-3xl">{album.name}</h2>
          <h4>{album.desc}</h4>
          <p className="mt-4 flex gap-2 items-center text-sm text-gray-400">
            <img src={assets.spotify_logo} alt="Spotify Logo" className="w-4 h-4 inline-block " />
            <b>Spotify</b>
            {/* Add circle character before likes */}
            <span> •</span> 1,000,000 likes
            <span> •</span> 50 songs
            <span> •</span> About 2 hr 30 min
          </p>
        </div>
      </div>

      <div className="flex w-full justify-between mt-4 px-2 py-1 text-gray-400 text-sm">
        <p className=""># Title</p>
        <p className="">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <Clock className="w-4 h-4" />
      </div>

      <hr className="my-2 border-t border-gray-600" />

      {songsData &&
        songsData.map((song, index) => (
          <div className="grid grid-cols-3 items-center gap-2 py-1 hover:bg-[#ffffff26] cursor-pointer sm:grid-cols-4" key={index}>
            <p className="text-white flex items-center gap-2">
              <b>{index + 1}</b>
              <img src={song.image} alt={`Image for ${song.name}`} className="inline w-8 mr-5" />
              <b className="text-gray-400 text-sm">{song.name}</b>
            </p>

            <p className="text-gray-400 text-sm text-center">{album.name}</p>

            <p className="text-gray-400 text-sm text-center hidden sm:block">4 days ago</p>

            <p className="text-gray-400 text-sm text-end">{song.duration}</p>
          </div>
        ))}
    </>
  );
};

export default DisplayAlbum;
