import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="text-white h-[140vh] lg:h-[65vh] relative">
      <Image
        src="/hero.png"
        alt="pic"
        fill
        priority
        className="object-cover object-center"
      />{" "}
      <div className="absolute flex flex-col lg:flex-row sm:justify-center items-center top-0 bottom-0 left-0 right-0 px-8 sm:px-16 py-10">
        <div className="flex-1">
          <div className="mb-10 relative w-28 h-24">
            <Image
              src="./logo.svg"
              alt="logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
              className="w-auto h-auto"
            />
          </div>
          <h1 className="sm:text-6xl text-5xl text-white font-bold leading-[60px]">
            Explore The{" "}
            <span className="bg-gradient-to-tr from-orange-300 to-orange-900 bg-clip-text text-transparent">
              Diverse Realms
            </span>{" "}
            of Anime Magic
          </h1>
        </div>
        <div className="relative flex-1  w-full h-[50vh]">
          <Image
            src="/anime.png"
            alt="anime"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 30vw"
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
