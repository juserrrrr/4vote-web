/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface SquareInformationsProps {
  title?: 'VOTAÇÃO' | 'ENQUETE';
  subtitle: string;
  date: string;
  acess?: 'Privado' | 'Público';
  description?: string;
  imageUrl?: string;
}

const SquareInformations: React.FC<SquareInformationsProps> = ({
  title,
  subtitle,
  date,
  acess,
  description,
  imageUrl,
}) => {
  const formattedDate = new Date(date);
  const backgraund = 'w-[1260px] h-[305px]';
  const squareWhite = 'w-[1225px] h-[260px] inline-flex bg-white rounded-xl justify-center items-center';

  const title1 = 'text-4xl text-corPrincipal font-bold mb-2';
  const container1 = 'w-[700x] h-[240px] mt-10';
  const title2 = 'text-3xl text-corPrincipal font-bold mb-2';
  const title3 = 'text-2xl text-corPrincipal font-bold mb-5';
  const title4 = 'text-2xl text-corPrincipal font-bold';
  const title5 = 'text-1xl text-corPrincipal font-sans-pro';
  const containerClass = 'w-[800px] h-[100] inline-flex';
  const containerClass2 = 'w-[800px] h-[218px]';

  return (
    <div className={backgraund}>
      <h1 className={title1}>{title}</h1>
      <div className={squareWhite}>
        <div className={container1}>
          <h1 className={title2}>{subtitle}</h1>
          <div className={containerClass}>
            <h1 className={title3}>Data Limite: {formattedDate?.toLocaleDateString('pt-BR')}</h1>
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
