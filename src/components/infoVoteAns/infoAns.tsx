import React from 'react';

interface InfoAnsProps {
  title: string;
  description: string;
  date: string;
  imageUrl: string;
}

const InfoAns: React.FC<InfoAnsProps> = ({ title, description, date, imageUrl }) => {
  return (
    <div className="bg-white flex flex-row">
      <div className="flex flex-col">
        <span className="font-bold text-corPrincipal text-lg">{title}</span>
        <span className="text-corPrincipal text-base">{description}</span>
        <span className="text-corPrincipal text-sm">{date}</span>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="w-12 h-12 object-cover"
      />
    </div>
  );
};

export default InfoAns;
