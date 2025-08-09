import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import BlurText from "./BlurText";

export const GridStream = () => {
  const [selectedVideo, setSelectedVideo] = useState(
    "/videos/jennie-video.mp4"
  );
  const [name, setName] = useState("Jennie");
  const [linkSpotify, setLinkSpotify] = useState(
    "https://open.spotify.com/artist/250b0Wlc5Vk0CoUsaCY84M"
  );
  const [linkYoutube, setLinkYoutube] = useState(
    "https://www.youtube.com/@jennierubyjane"
  );

  const handleVideoSelect = (video, nombre, spotify, youtube) => {
    setSelectedVideo(video);
    setName(nombre);
    setLinkSpotify(spotify);
    setLinkYoutube(youtube);
  };
  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};


  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4 m-5 h-screen relative">
      {/* VIDEO PRINCIPAL */}
      <div className="col-span-3 row-span-5 h-full relative">
        <video
          
          src={selectedVideo}
          loop
          autoPlay
          muted
          className="w-full h-full object-cover rounded"
        />
        {/* Overlay con nombre y links */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-white text-center px-4">
          {/* {<h2 className="text-8xl font-bold mb-4">{name}</h2>} */}
          <BlurText
            key={name}
            text={name}
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-8xl font-bold mb-4"
          />

          <div className="flex gap-4">
            <a
              href={linkSpotify}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm"
            >
              <FaSpotify className=" text-4xl " />
            </a>
            <a
              href={linkYoutube}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm"
            >
              <FaYoutube className=" text-4xl " />
            </a>
          </div>
        </div>
      </div>

      {/* MINIATURAS */}
      <div
        className="row-span-2 col-start-4 cursor-pointer"
        onClick={() =>
          handleVideoSelect(
            "/videos/jennie-video.mp4",
            "Jennie",
            "https://open.spotify.com/artist/250b0Wlc5Vk0CoUsaCY84M",
            "https://www.youtube.com/@jennierubyjane"
          )
        }
      >
        <img
          src="/jennie-album.jpg"
          alt="Jennie"
          className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
        />
      </div>

      <div
        className="row-span-2 col-start-5 cursor-pointer"
        onClick={() =>
          handleVideoSelect(
            "/videos/lisa-video.mp4",
            "Lisa",
            "https://open.spotify.com/artist/5L1lO4eRHmJ7a0Q6csE5cT",
            "https://www.youtube.com/@wearelloud"
          )
        }
      >
        <img
          src="/lisa-album.jpg"
          alt="Lisa"
          className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
        />
      </div>

      <div
        className="row-span-2 col-start-4 row-start-3 cursor-pointer"
        onClick={() =>
          handleVideoSelect(
            "/videos/rose-video.mp4",
            "Rosé",
            "https://open.spotify.com/artist/3eVa5w3URK5duf6eyVDbu9",
            "https://www.youtube.com/@roses_are_rosie"
          )
        }
      >
        <img
          src="/rose-album.jpg"
          alt="Rosé"
          className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
        />
      </div>

      <div
        className="row-span-2 col-start-5 row-start-3 cursor-pointer"
        onClick={() =>
          handleVideoSelect(
            "/videos/jisoo-video.mp4",
            "Jisoo",
            "https://open.spotify.com/artist/6UZ0ba50XreR4TM8u322gs",
            "https://www.youtube.com/@sooyaaa__"
          )
        }
      >
        <img
          src="/jisoo-album.jpg"
          alt="Jisoo"
          className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
        />
      </div>

      <div
        className="col-span-2 col-start-4 row-start-5 cursor-pointer"
        onClick={() =>
          handleVideoSelect(
            "/videos/blackpink-video.mp4",
            "BLACKPINK",
            "https://open.spotify.com/artist/41MozSoPIsD1dJM0CLPjZF",
            "https://www.youtube.com/@BLACKPINK"
          )
        }
      >
        <img
          src="/blackpink-album.jpg"
          alt="BLACKPINK"
          className="w-full h-full object-cover rounded transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-110"
        />
      </div>
    </div>
  );
};
