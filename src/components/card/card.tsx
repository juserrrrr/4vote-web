/* eslint-disable @next/next/no-img-element */
import React from 'react';
import icon1 from './icon/VectorBlue.png';
import icon2 from './icon/VectorRed.png';
import Image from 'next/image';

type Variant = 'VOTAÇÃO' | 'ENQUETE';

interface CardProps {
  title: string;
  description: string;
  variant: Variant;
  hashtags: string[];
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({ title, description, variant, hashtags, imageUrl }) => {
  return (
    <div className="bg-white min-w-72 max-w-80 h-96 rounded-lg shadow-lg flex flex-col">
      {/* Barra com cor do topo */}
      <div className={`rounded-t-lg h-3 ${variant === 'ENQUETE' ? 'bg-blue-700' : 'bg-red-600'}`} />
      {/* Div para colocar a imagem no tamanho certo */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          fill
          alt="Imagem da enquete"
          objectFit={'cover'}
        />
      </div>
      <div>
        <h2 className="text-base font-bold my-1 mx-3">{title}</h2>
        <p className="text-sm font-bold mx-3">{description}</p>
      </div>
      <div className="h-full flex flex-col justify-end">
        <div className="flex items-center justify-center">
          <Image
            src={variant === 'ENQUETE' ? icon1 : icon2}
            alt="Icon"
            className="w-4 h-4 mx-1"
            width={4}
            height={4}
          />
          <p className="text-base text-center font-bold py-1">{variant}</p>
        </div>
        <p className="text-xs h-6 bg-blue-900 text-white py-1 rounded-b-lg text-center"> {hashtags} </p>
      </div>
    </div>
  );
};
