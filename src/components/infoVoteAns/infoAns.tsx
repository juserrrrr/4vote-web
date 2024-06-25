/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface InfoAnsProps {
  title: string;
  description: string;
  date: string;
  hours: string;
  imageUrl: string;
}

const InfoAns: React.FC<InfoAnsProps> = ({ title, description, date, hours, imageUrl }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col place-items-start">
        <span className="font-bold text-corPrincipal text-3xl uppercase">{title}</span>
        <span className="text-corPrincipal text-xl">{description}</span>
        <span className="text-corPrincipal text-base">{'Aberto até o dia ' + date + ' às ' + hours}</span>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="justify-self-end w-40 h-40 object-cover"
      />
    </div>
  );
};

export default InfoAns;
