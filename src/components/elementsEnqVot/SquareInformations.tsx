'use client';
import React, { useState } from 'react';
import Butao from '../buttons/button';
import Image from 'next/image';

interface SquareInformationsProps {
  title?: 'VOTAÇÃO' | 'ENQUETE';
  subtitle: string;
  date: string;
  acess?: 'Privado' | 'Público';
  description?: string;
  imageUrl?: string;
  buttonShareText: string;
}

const SquareInformations: React.FC<SquareInformationsProps> = ({
  title,
  subtitle,
  date,
  acess,
  description,
  imageUrl,
  buttonShareText,
}) => {
  const formattedDate = new Date(date);
  const [copySuccess, setCopySuccess] = useState<string>(''); // Estado para controlar mensagem de sucesso
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setCopySuccess('Copiado com sucesso!');
        setTimeout(() => setCopySuccess(''), 3000); // Limpa a mensagem após 3 segundos
      })
      .catch((_) => {
        setCopySuccess('Falha ao copiar!');
        setTimeout(() => setCopySuccess(''), 3000);
      });
  };

  return (
    <>
      <h1 className={'text-4xl text-corPrincipal font-bold truncate'}>{title}</h1>
      <div className={'w-full h-auto md:h-72'}>
        <div className={'w-full h-full bg-white rounded-xl flex flex-col md:flex-row p-4'}>
          <div
            id="texts"
            className="flex-grow flex flex-col md:w-[20rem] gap-1"
          >
            <div>
              <h1 className={'text-3xl text-corPrincipal font-bold text truncate uppercase'}>{subtitle}</h1>
            </div>

            <div className="w-full flex-grow text-1xl text-corPrincipal font-sans-pro overflow-auto scrollbar-thin">
              <p className="w-full h-full break-words">{description ? description : 'Não possui descrição.'}</p>
            </div>

            <div className={`${description ? 'h-10' : 'flex-grow'} flex items-end justify-center md:justify-normal`}>
              <Butao
                texto={copySuccess ? copySuccess : buttonShareText}
                onClick={handleCopyLink}
                variant="outlined"
                className="text-md p-2 h-10"
              />
            </div>
          </div>
          <div
            id="image"
            className="md:w-80 flex flex-col justify-center items-center md:items-end"
          >
            <div className="text-center flex flex-col justify-center items-center">
              <h1 className={'text-lg text-corPrincipal'}>
                Encerra: {formattedDate?.toLocaleDateString('pt-BR')} às{' '}
                {formattedDate.toLocaleTimeString('pt-br', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: false, // Formato de 24 horas
                })}
              </h1>
              <h1 className={'text-lg text-corPrincipal font-bold'}>
                Tipo de Acesso: <span className="font-normal">{acess}</span>
              </h1>
              <div className="w-64 h-44 md:w-72 md:h-48 relative">
                <Image
                  src={imageUrl ? imageUrl : 'https://picsum.photos/300/104'}
                  alt="Imagem da pesquisa"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SquareInformations;
