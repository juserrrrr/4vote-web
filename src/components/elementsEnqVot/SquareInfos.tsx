'use client';
import React from 'react';
import { useState } from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import InputCustom from '@/components/InputCustom/InputCustom';
import DateInput from '../dateInput/dateInput';
import SingleSelect from '../selectBox';

interface SquareInfosProps {
  title?: 'CRIAR VOTAÇÃO' | 'CRIAR ENQUETE';
}

const options = [
  { label: 'Privada', value: 'Privada' },
  { label: 'Pública', value: 'Pública' },
];

const SquareInfos: React.FC<SquareInfosProps> = ({ title }) => {
  const backgraund = 'w-[1260px] h-[316px]';
  const squareWhite = 'w-[1225px] h-[250px] p-5 inline-flex bg-white rounded-xl ';

  const title1 = 'text-4xl text-corPrincipal font-bold mb-4';
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <div className={backgraund}>
      <h1 className={title1}>{title}</h1>
      <div className={squareWhite}>
        <div className="w-[394px] flex flex-col">
          <div className="w-[1188px] h-[80px] inline-flex">
            <InputCustom label="Nome" />
            <div className="mt-4">
              <DateInput />
            </div>
            <InputCustom
              label="Tags"
              larguraInput="40px"
            />
            <div className="mt-2 p-1">
              <SingleSelect
                options={options}
                selectedValue={selectedValue}
                onChange={setSelectedValue}
              />
            </div>
          </div>
          <div className="w-[1188px] h-[100px]">
            <InputCustom
              label="Descrição..."
              alturaInput="[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareInfos;
