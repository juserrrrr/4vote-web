/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';

interface SquareInformationsProps {
  title?: 'VOTAÇÃO' | 'ENQUENTE';
  subtitle: string;
  date?: Date;
  acess?: 'Privado' | 'Público';
  description: string;
  imageUrl: string;
}

const SquareInformations: React.FC<SquareInformationsProps> = ({
  title,
  subtitle,
  date,
  acess,
  description,
  imageUrl,
}) => {
  const square = 'w-[1400px] h-[350px]';
  const title1 = 'text-5xl text-corPrincipal font-bold mb-4';
  const square2 = 'w-[700x] h-[320px] p-4';
  const title2 = 'text-4xl text-corPrincipal font-bold mb-5';
  const title3 = 'text-3xl text-corPrincipal font-bold mb-5';
  const title4 = 'text-3xl text-corPrincipal font-bold';
  const title5 = 'text-2xl text-corPrincipal font-sans-pro';
  const containerClass = 'w-[900px] h-[100] inline-flex';
  const containerClass2 = 'w-[900px] h-[218px]';
  const containerClass3 = 'w-[1300] h-[330px] inline-flex bg-gray-100 p-8 rounded-xl justify-center items-center';

  return (
    <div className={square}>
      <h1 className={title1}>{title}</h1>
      <div className={containerClass3}>
        <div className={square2}>
          <h1 className={title2}>{subtitle}</h1>
          <div className={containerClass}>
            <h1 className={title3}>Data Limite: {date?.toLocaleDateString('pt-BR')}</h1>
            <p className={`${title3} ml-20`}>Tipo de Acesso: {acess}</p>
          </div>
          <div className={containerClass2}>
            <p className={title4}>Descrição:</p>
            <p className={title5}>{description}</p>
          </div>
        </div>
        <img
          src={imageUrl}
          alt="Icon"
          className="w-[310px] h-[192px] object-center rounded-xl"
        />
      </div>
    </div>
  );
};

export default SquareInformations;
