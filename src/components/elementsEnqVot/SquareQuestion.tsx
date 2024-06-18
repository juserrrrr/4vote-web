import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';

interface SquareQuestionPropos {
  question: string;
}

const SquareQuestion: React.FC<SquareQuestionPropos> = ({ question }) => {
  const backgraund = 'w-[1260px] h-[550px] justify-center items-center';
  const titleForm = 'text-4xl text-corPrincipal font-bold mb-4';
  const questionForm = 'text-2xl text-corPrincipal font-semibold mb-4';
  const square = 'w-[1225px] h-[385px] inline-flex bg-gray-100  rounded-xl p-10';
  const container1 = 'flex flex-col';
  const line = 'w-[1150px] h-[1px] inline-flex bg-corPrincipal';
  return (
    <div className={backgraund}>
      <h1 className={titleForm}>{'PERGUNTA'}</h1>
      <div className={square}>
        <div className={container1}>
          <h2 className={questionForm}>{question}</h2>
          <div className={line}></div>
        </div>
      </div>
    </div>
  );
};

export default SquareQuestion;
