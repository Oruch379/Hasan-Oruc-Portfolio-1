import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="h-20 w-full p-5 md:px-16 md:pr-24 bg-bgdarkgray text-bgwhite flex justify-center md:justify-between items-center fixed top-0 z-10 opacity-90 drop-shadow-md">
      <div>
        <Link className="cursor-pointer" to="top">Hasan Oruc</Link>
      </div>
      <div className="hidden md:block">
        <Link className="cursor-pointer" to="info">Info</Link>
      </div>
    </div>
  );
}
