import React from "react";
import { FaHeart, FaPlay, FaEllipsisH } from "react-icons/fa";

const Music1 = () => {
  const cardData = [
    {
      title: "Epoch",
      artist: "Tycho",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/f1/Tycho_-_Epoch.jpg",
    },
    {
      title: "Awake",
      artist: "Tycho",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png",
    },
    {
      title: "Dive",
      artist: "Tycho",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/1/11/Dive_tycho_album.jpg",
    },
  ];

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-t from-blue-200 to-indigo-900 p-5">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-5">
          Music Cards
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <div key={index} className="bg-gray-900 shadow-lg rounded p-3">
              <div className="group relative">
                <img
                  className="w-full md:w-72 block rounded"
                  src={card.imageUrl}
                  alt=""
                />
                <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <FaHeart />
                  </button>

                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <FaPlay />
                  </button>

                  <button className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white text-lg">{card.title}</h3>
                <p className="text-gray-400">{card.artist}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Music1;
