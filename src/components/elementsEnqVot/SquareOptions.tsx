'use client';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import InputCustom from '@/components/InputCustom/InputCustom';
import OptionConfig from './OptionConfig';
import Image from 'next/image';

const SquareOptions = () => {
  const IconTrash: React.FC = () => (
    <svg
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="27.5"
        cy="27.5"
        r="27.5"
        fill="#FF4444"
      />
      <path
        d="M18 21H20H36"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M34 21V35C34 35.5304 33.7893 36.0391 33.4142 36.4142C33.0391 36.7893 32.5304 37 32 37H22C21.4696 37 20.9609 36.7893 20.5858 36.4142C20.2107 36.0391 20 35.5304 20 35V21M23 21V19C23 18.4696 23.2107 17.9609 23.5858 17.5858C23.9609 17.2107 24.4696 17 25 17H29C29.5304 17 30.0391 17.2107 30.4142 17.5858C30.7893 17.9609 31 18.4696 31 19V21"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25 26V32"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M29 26V32"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const backgraund = 'w-[1260px] h-[400px] mt-3';
  const squareWhite = 'w-[1225px] h-[380px] p-5 inline-flex bg-gray-100 rounded-xl ';
  const title = 'PERGUNTAS';
  const title1 = 'text-4xl text-corPrincipal font-bold mb-4';
  const line = 'w-[1150px] h-[1px] inline-flex bg-corPrincipal';

  return (
    <div className={backgraund}>
      <h1 className={title1}>{title}</h1>
      <div className={squareWhite}>
        <div className="w-[394px] flex flex-col">
          <div className="w-[1188px] h-[80px] inline-flex"></div>
          <div className="w-[1000px]">
            <div className="inline-flex">
              <div className="w-[1180px] mr-4 inline-flex">
                <InputCustom
                  label="Pergunta"
                  alturaInput="[60px]"
                />
                <h2 className="font-semibold mt-3 text-corPrincipal ml-4"> Remover Pergunta</h2>
                <div className="mt-">
                  <IconTrash />
                </div>
              </div>
            </div>
            <div className={line}></div>
            <div className="w-[900px]">
              <OptionConfig title="opção 1" />
              <OptionConfig title="opção 2" />
              <OptionConfig title="opção 3" />
              <OptionConfig title="opção 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareOptions;
