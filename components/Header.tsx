"use client";

import Image from "next/image";
import MusicStreamLine from "./MusicStreamLine";

const Header = () => {
  return (
    <div className="fixed z-10 flex justify-between items-center w-full md:pt-6 pt-3 md:px-8 px-5">
      <div className="flex items-center gap-16">
        <Image
          src="/logo.png"
          alt="logo"
          width={1366}
          height={689}
          className={"w-10 h-10 object-contain"}
        />
        <p className="text-sm text-white">
          Premium & Immersive Apps for
          <br />
          Artists, Creators & Brands
        </p>
      </div>
      <MusicStreamLine color={"bg-white"} />
    </div>
  );
};

export default Header;
