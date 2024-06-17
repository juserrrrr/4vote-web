/* eslint-disable @next/next/no-img-element */
import React from 'react';
import icon1 from './icon/VectorBlue.png';
import icon2 from './icon/VectorRed.png';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  variant: 'VOTAÇÃO' | 'ENQUETE';
  hashtags: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, variant, hashtags, imageUrl }) => {
  const cardStyles = 'bg-white w-300 h-250 rounded-lg shadow-md flex flex-col mx-2 my-1';
  // Função para renderizar o ícone com base na variante
  const renderIcon = () => {
    return variant === 'VOTAÇÃO' ? (
      <Image
        src={icon2}
        alt="Icon"
        width={4}
        height={4}
      />) : (
      <Image
        src={icon1}
        alt="Icon"
        className="w-4 h-4 mx-1"
        width={4}
        height={4}
      />
    );
  };
  const colorLine = () => {
    return variant === 'VOTAÇÃO' ?
      (<p className="rounded-t-lg bg-red-600 text-transparent text-xs h-3">linha</p>) : (<p className="rounded-t-lg bg-blue-700 text-transparent text-xs h-3">linha</p>);
  };
  return (
    <div className={cardStyles}>
      {colorLine()}
      <img
        src={imageUrl}
        alt="Card Image"
        className="w-60 h-20 object-cover"
      />
      <h2 className="text-base font-bold my-1 mx-3">{title}</h2>
      <p className="text-sm font-bold mx-3">{description}</p>
      <a
        href="cardPage"
        className="text-center text-xs my-1"
      ></a>
      <div className="flex items-center justify-center">
        {renderIcon()} {/* Renderiza o ícone aqui */}
        <p className="text-base text-center font-bold py-1">{variant}</p>
      </div>
      <p className="text-xs bg-blue-900 text-white py-1 rounded-b-lg text-center"> {hashtags} </p>
    </div>
  );
};
