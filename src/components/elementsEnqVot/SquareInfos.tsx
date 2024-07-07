'use client';
import React from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import InputCustom from '@/components/InputCustom/InputCustom';
import SelectCustom from '../selectBox';

interface SquareInfosProps {
  title?: 'CRIAR VOTAÇÃO' | 'CRIAR ENQUETE';
  register: UseFormRegister<FieldValues>;
}

const options = [
  { label: 'Pública', value: 1 },
  { label: 'Privada', value: 0 },
];

const SquareInfos: React.FC<SquareInfosProps> = ({ title, register }) => {
  return (
    <div className="w-[1260px] h-[316px]">
      <h1 className="text-4xl text-corPrincipal font-bold mb-4">{title}</h1>
      <div className="w-[1225px] h-[250px] p-5 inline-flex bg-white rounded-xl ">
        <div className="w-[394px] flex flex-col">
          <div className="w-[1188px] h-[80px] inline-flex">
            <InputCustom
              {...register('nome')}
              label="Nome"
            />
            <InputCustom
              {...register('dataTermino')}
              label="Data Limite"
              larguraInput="40px"
            />
            <InputCustom
              {...register('tags')}
              label="Tags"
              larguraInput="40px"
            />
            <SelectCustom
              {...register('ehPublico')}
              options={options}
            />
          </div>
          <div className="w-[1188px] h-[100px]">
            <InputCustom
              {...register('descricao')}
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
