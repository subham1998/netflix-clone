import React, { useState } from "react";
import { fetchImage } from "../Request";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={fetchImage(item?.backdrop_path)}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="text-xs md:text-sm font-bold flex justify-center items-center h-full text-center whitespace-normal">
          {item?.title}
        </p>
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300"></FaHeart>
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300"></FaRegHeart>
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
