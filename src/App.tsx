import React from "react";
import ProfileImg from "./assets/profile.jpg";
import Info from "./components/info";
import { FaGithubAlt, FaArrowRight } from "react-icons/fa";

export default function App() {
  return (
    <div className="relative text-bgwhite m-5">
      <div
        className="flex flex-col p-20 pt-36 md:p-40 gap-20 md:flex-row md:justify-between items-center h-screen w-full"
        id="top"
      >
        <img
          src={ProfileImg}
          alt="profile"
          className="rounded-full h-52 w-52 object-cover drop-shadow-md"
        />
        <div className="flex flex-col gap-5">
          <p className="break-words max-w-sm text-center">
            Designed and coded as a portfolio website by Hasan Oruc -a very
            novice coder-.
          </p>
          <a href="https://github.com/Oruch379" target="_blank" rel="noopener noreferrer" className="flex h-16 w-48 self-center bg-bgdarkgray justify-center items-center rounded-md text-bgwhite text-md font-semibold gap-4 hover:bg-bgred hover:text-bgblack transition">
            <FaGithubAlt className="text-xl" />
            <p className="flex items-center gap-2">Github sayfam<FaArrowRight /></p>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button>
          <a
            href="https://youtu.be/03Ya2AL8EDg?t=4"
            className="text-bgdarkgray"
          >
            Hasan
          </a>
        </button>
      </div>
      <Info />
    </div>
  );
}
