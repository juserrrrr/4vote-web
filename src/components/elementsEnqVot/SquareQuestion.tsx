'use client';

import React, { useState } from 'react';
import Button from '../option/Option';

interface SquareQuestionProps {
  texto: string;
  opcoes: string[];
}

const SquareQuestion = ({ texto, opcoes }: SquareQuestionProps) => {
  const backgraund = 'w-[1260px] h-[430px] justify-center items-center';
  const titleForm = 'text-4xl text-corPrincipal font-bold mb-2';
  const questionForm = 'text-2xl text-corPrincipal font-semibold mb-2';
  const square = 'w-[1225px] h-[370px] inline-flex bg-white rounded-xl p-8';
  const container1 = 'flex flex-col';
  const line = 'w-[1150px] h-[1px] inline-flex bg-corPrincipal';

  const ButtonGroup = () => {
    const [activeButton, setActiveButton] = useState<string>('');

    return (
      <div className="flex flex-col space-y-2">
        {opcoes.map((opcao, index) => (
          <Button
            key={index}
            label={opcao}
            isActive={activeButton === opcao}
            onClick={() => setActiveButton(opcao)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={backgraund}>
      <h1 className={titleForm}>PERGUNTA</h1>
      <div className={square}>
        <div className={container1}>
          <h2 className={questionForm}>{texto}</h2>
          <div className={line}></div>
          <div className="mt-5">
            <ButtonGroup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareQuestion;
