import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const Display = () => {
  // Get the current pathname
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const mainDisplayRef = useRef(null);

  useEffect(() => {
    if (isAlbum) {
      mainDisplayRef.current.style.background = `linear-gradient(${albumsData[albumId].bgColor}, #121212)`;
    } else {
      mainDisplayRef.current.style.background = "#121212"; // Default background color
    }
  });

  // Change the background color based on the pathname

  return (
    <div ref={mainDisplayRef} className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
