import React from "react";
import Project from "./projectsCard";

export default function Projects() {
  return (
    <div id="projects" className="pt-24"> 
      <h1 className="flex justify-center mb-14 text-xl font-semibold hover:scale-110 hover:text-bgred transition">
        Projects
      </h1>
      <div className="flex md:px-10 p-5 mb-16 justify-evenly flex-wrap gap-4 md:gap-y-5">
        <Project
          title="Deneme"
          description="sldhnfnljd snbk jsdbfjlbdsf jklbsdklfbjsldbfsbdfbn"
          imgUrl="https://upload.wikimedia.org/wikipedia/tr/thumb/f/f5/MustafaKemalUniversitesiHatay.png/200px-MustafaKemalUniversitesiHatay.png"
        />
        <Project
          title="Deneme"
          description="sldhnfnljd snbk jsdbfjlbdsf jklbsdklfbjsldbfsbdfbn"
          imgUrl="https://upload.wikimedia.org/wikipedia/tr/thumb/f/f5/MustafaKemalUniversitesiHatay.png/200px-MustafaKemalUniversitesiHatay.png"
        />
        <Project
          title="Deneme"
          description="sldhnfnljd snbk jsdbfjlbdsf jklbsdklfbjsldbfsbdfbn"
          imgUrl="https://upload.wikimedia.org/wikipedia/tr/thumb/f/f5/MustafaKemalUniversitesiHatay.png/200px-MustafaKemalUniversitesiHatay.png"
        />
      </div>
    </div>
  );
}
