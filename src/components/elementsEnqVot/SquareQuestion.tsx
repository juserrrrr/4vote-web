import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';

const SquareQuestion = () => {
  const backgraund = 'w-[1400px] h-[550px]';
  const titleForm = 'text-5xl text-corPrincipal font-bold mb-4';
  const square = 'w-[1300px] h-[500px] inline-flex bg-gray-100 p-8 rounded-xl justify-center items-center';

  return (
    <div className={backgraund}>
      <h1 className={titleForm}>{'PERGUNTA'}</h1>
      <div className={square}></div>
    </div >
  )
}

export default SquareQuestion;
