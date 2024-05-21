import Image from "next/image";
import React from "react";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="py-5 px-8 sm:px-16 flex flex-wrap items-center justify-between bg-anime-ash2">
        <p className="text-white text-base font-bold">@2023 EpicAnimeVault</p>
        <div className="relative w-14 h-14">
          <Image
            src="/logo.svg"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            alt="log"
            className="object-cover"
          />
        </div>
        <div className="flex gap-6">
          <FaTiktok size={22} color="white" />
          <FaInstagram size={22} color="white" />
          <BsTwitterX size={21} color="white" />
        </div>
      </footer>
    );
};

export default Footer;
