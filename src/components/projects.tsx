import React from "react";
import Project from "./projectsCard";

export default function Projects() {
  return (
    <>
      <h1 className="flex justify-center mt-20 mb-14 text-xl font-semibold hover:scale-110 hover:text-bgred transition">
        Projects
      </h1>
      <div id="projects" className="flex md:px-10 p-5 mb-16 justify-evenly flex-wrap gap-4">
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
    </>
  );
}
