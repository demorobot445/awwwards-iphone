"use client";

import MusicStreamLine from "./MusicStreamLine";

const Header = () => {
  return (
    <div className="fixed z-10 flex justify-between items-center w-full md:pt-10 pt-3 md:px-20 px-5">
      <div className={"md:w-44 w-40 h-16 hover-animation bg-transparent"} />
      <MusicStreamLine color={"bg-white"} />
    </div>
  );
};

export default Header;
