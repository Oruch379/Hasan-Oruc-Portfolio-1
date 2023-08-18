import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="h-20 w-full p-5 md:px-16 md:pr-24 bg-bgdarkgray text-bgwhite text-md flex justify-center md:justify-between items-center fixed top-0 z-10 opacity-90 drop-shadow-md">
      <div>
        <Link className="cursor-pointer font-bold" to="top">Hasan Oruc.</Link>
      </div>
      <div className="hidden md:flex md:gap-5 font-semibold">
        <Link className="cursor-pointer hover:text-orange-500 transition" to="info">Info</Link>
        <Link className="cursor-pointer hover:text-orange-500 transition" to="projects">Projects</Link>
      </div>
    </div>
  );
}
