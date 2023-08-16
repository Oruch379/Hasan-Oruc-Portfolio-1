import React from "react";
import Card from "./card"

export default function Info() {
  return (
    <div id="info" className="md:p-10 p-5 pt-24" >
      <div className="flex justify-center mb-6"><p className="text-xl font-semibold hover:scale-110 hover:text-bgred transition">Technologies that I know</p></div>
      <div className="flex justify-evenly flex-wrap gap-4">
        <Card title="HTML" description="Good at it :)" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" />
        <Card title="CSS" description="Not bad at all" imageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" />
        <Card title="Typescript" description="Actually not too much but learning" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" />
        <Card title="React" description="Average knowledge" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
        <Card title="Python" description="Not too much" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" />
        <Card title="Ruby" description="Actually nothing" imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png" />
      </div>
    </div>
  );
}
