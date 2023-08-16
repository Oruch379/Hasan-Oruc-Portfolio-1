import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="flex flex-col max-w-sm w-44 bg-bgdarkgray p-4 rounded-md shadow-md items-center gap-3 hover:scale-105 transition">
      {imageUrl && <img src={imageUrl} alt={title} className="max-h-14 object-fill" />}
      <h2 className="text-xl font-semibold text-bgred">{title}</h2>
      <p className="break-words text-center">{description}</p>
    </div>
  );
};

export default Card;
