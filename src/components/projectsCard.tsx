import React from "react";

interface PCardProps {
  title: string;
  description: string;
  imgUrl?: string;
}

const Project: React.FC<PCardProps> = ({ title, description, imgUrl }) => {
  return (
    <div className="flex flex-row max-w-md justify-evenly bg-bgdarkgray p-4 rounded-md shadow-md items-center gap-3 hover:scale-105 hover:shadow-md hover:shadow-bgred transition">
      {imgUrl && <img src={imgUrl} alt={title} className="w-32"/>}
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold text-bgred">{title}</h2>
        <p className="max-w-md break-words text-center">{description}</p>
      </div>
    </div>
  );
};

export default Project;
