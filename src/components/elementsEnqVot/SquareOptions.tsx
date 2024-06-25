'use client';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import InputCustom from '@/components/InputCustom/InputCustom';
import OptionConfig from './OptionConfig';

const SquareOptions = () => {
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
            <InputCustom
              label="Pergunta"
              alturaInput="[60px]"
            />
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
