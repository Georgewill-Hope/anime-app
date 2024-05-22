import { Prop } from "@/_types";
import Image from "next/image";
import React from "react";
import { MdOutlineStarBorder } from "react-icons/md";
import { GoStack } from "react-icons/go";
import { MotionDiv } from "./MotionDiv";


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimeCard = ({ anime, index }: Prop) => {
  return (
    <MotionDiv
      className="max-w-sm "
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          placeholder="blur"
          blurDataURL={`https://shikimori.one${anime.image.original}`}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
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
    </MotionDiv>
  );
};

export default AnimeCard;
