'use client';

import { useState } from 'react';
import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import Button from '../option/Option';

interface SquareQuestionPropos {
  question: string;
}

const SquareQuestion: React.FC<SquareQuestionPropos> = ({
  question = 'Quem você escolhe para ser o novo Diretório Acadêmico do curso?',
}) => {
  const backgraund = 'w-[1260px] h-[430px] justify-center items-center';
  const titleForm = 'text-4xl text-corPrincipal font-bold mb-2';
  const questionForm = 'text-2xl text-corPrincipal font-semibold mb-2';
  const square = 'w-[1225px] h-[370px] inline-flex bg-white  rounded-xl p-8';
  const container1 = 'flex flex-col';
  const line = 'w-[1150px] h-[1px] inline-flex bg-corPrincipal';

  const ButtonGroup = () => {
    const [activeButton, setActiveButton] = useState<string>('');

    return (
      <div className="flex flex-col space-y-2">
        {['BitMasters', 'CyberSquad', 'TechTitans'].map((label) => (
          <Button
            key={label}
            label={label}
            isActive={activeButton === label}
            onClick={() => setActiveButton(label)}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={backgraund}>
      <h1 className={titleForm}>{'PERGUNTA'}</h1>
      <div className={square}>
        <div className={container1}>
          <h2 className={questionForm}>{question}</h2>
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
