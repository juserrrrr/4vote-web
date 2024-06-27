'use client';
import React from 'react';
import SquareInfos from '@/components/elementsEnqVot/SquareInfos';
import Butao from '@/components/buttons/button';
import SquareOptions from '@/components/elementsEnqVot/SquareOptions';
import IconButton from '@/components/IconButton/IconButton';

const CreatePage: React.FC = () => {
  const title = 'CRIAR ENQUETE';
  const backgraund = 'flex flex-col w-[1438px] h-[1000px] justify-center items-center';
  const container1 = 'w-[1260px] h-[825px] p-3 mb-10';
  const container2 = 'w-[350px] h-[10px] absolute right-0 mt-10 p-5';

  const IconMais: React.FC = () => (
    <svg
      width="34"
      height="33"
      viewBox="0 0 34 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="17"
        cy="16.5"
        rx="17"
        ry="16.5"
        fill="#052A76"
      />
      <path
        d="M17 6V26M7 16H27"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );

  return (
    <div className="flex justify-center items-center">
      <div className={backgraund}>
        <div className={container1}>
          <SquareInfos title={title} />
          <SquareOptions />
          <div className={container2}>
            <div className="w-[500px] inline-flex mb-4 absolute right-0">
              <div className="font-bold text-corPrincipal mr-1 mt-5"> NOVA PERGUNTA</div>
              <IconButton
                icon={<IconMais />}
                ariaLabel="add nova opção"
                onClick={() => console.log('add option clicked')}
              />
            </div>
            <div className="ml-8">
              <Butao
                texto="CRIAR ENQUETE"
                variant="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
