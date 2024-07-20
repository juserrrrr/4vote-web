/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState } from 'react';

interface SquareInformationsProps {
  title?: 'VOTAÇÃO' | 'ENQUETE';
  subtitle: string;
  date?: Date;
  acess?: 'Privado' | 'Público';
  description: string;
  imageUrl: string;
  buttonShareText: string;
}

const SquareInformations: React.FC<SquareInformationsProps> = ({
  title = 'VOTAÇÃO',
  subtitle = 'Eleição do Diretorio Academico de Ecomp',
  date = new Date(),
  acess = 'Privado',
  description = 'Essa é uma eleição aprovada pelo conselho para leger os mais novos menbros do DA do curso de ECOMP.',
  imageUrl = 'https://picsum.photos/300/104',
  buttonShareText,
}) => {
  const [copySuccess, setCopySuccess] = useState<string>(''); // Estado para controlar mensagem de sucesso
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
  const buttonShare = 'bg-corPrincipal hover:opacity-80 text-white font-bold py-2 px-4 rounded-lg mt-1';
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess('Copiado com sucesso!');
        setTimeout(() => setCopySuccess(''), 3000); // Limpa a mensagem após 3 segundos
      })
      .catch((err) => {
        setCopySuccess('Falha ao copiar!');
        setTimeout(() => setCopySuccess(''), 3000);
      });
  };

  return (
    <div className={backgraund}>
      <h1 className={title1}>{title}</h1>
      <div className={squareWhite}>
        <div className={container1}>
          <h1 className={title2}>{subtitle}</h1>
          <div className={containerClass}>
            <h1 className={title3}>Data Limite: {date?.toLocaleDateString('pt-BR')}</h1>
            <p className={`${title3} ml-20`}>Tipo de Acesso: {acess}</p>
          </div>
          <div className={containerClass2}>
            <p className={title4}>Descrição:</p>
            <p className={title5}>{description}</p>
            <button
              className={buttonShare}
              onClick={handleCopyLink}
            >
              {copySuccess ? copySuccess : buttonShareText}
            </button>
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
