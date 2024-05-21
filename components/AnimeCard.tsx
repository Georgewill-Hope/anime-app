import { Prop } from "@/_types";
import Image from "next/image";
import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { GoStack } from "react-icons/go";

const AnimeCard = ({ anime }: Prop) => {
  return (
    <div className="max-w-sm ">
      <div className="relative w-full h-[37vh]">
        <Image
          src={anime.image.original}
          alt={anime.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 30vw"
          className="object-cover object-bottom rounded-xl"
        />
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center text-white text-lg py-2">
          <h2 className="font-bold capitalize">{anime.name}</h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="font-bold uppercase">{anime.kind}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center justify-center gap-2">
            <GoStack size={20} className="text-red-700" />
            <span className="text-white font-bold">
              {anime.episodes || anime.episodes_aired}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MdOutlineStarBorder size={23} className="text-yellow-600" />
            <span className="font-semibold text-yellow-600">{anime.score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
