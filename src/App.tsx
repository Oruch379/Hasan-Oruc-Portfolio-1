import React from "react";
import ProfileImg from "./assets/profile.jpg";
import Info from "./components/info"

export default function App() {
  return (
    <div className="bg-bgblack relative text-bgwhite m-5">
      <div className="flex flex-col p-20 pt-36 md:p-40 gap-20 md:flex-row md:justify-between items-center h-screen w-full" id="top">
        <img
          src={ProfileImg}
          alt="profile"
          className="rounded-full h-52 w-52 object-cover drop-shadow-md"
        />
        <p className="break-words max-w-sm text-center">
          Designed and coded as a portfolio website by Hasan Oruc -a very novice coder-.
        </p>
      </div>
      <div className="flex justify-center mt-5"><button><a href="https://youtu.be/03Ya2AL8EDg?t=4" className="text-bgdarkgray">Hasan</a></button></div>
      <Info />
    </div>
  );
}
