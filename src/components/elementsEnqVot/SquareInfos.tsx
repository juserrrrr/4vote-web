'use client';
import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import InputCustom from '@/components/InputCustom/InputCustom';
import SelectCustom from '../selectBox';
import { VotacaoDto } from '@/app/(aplicacao)/criar/Votacao';

interface SquareInfosProps {
  title?: 'CRIAR VOTAÇÃO' | 'CRIAR ENQUETE';
  register: UseFormRegister<VotacaoDto>;
  errors?: FieldErrors<VotacaoDto>;
}

const options = [
  { label: 'Pública', value: 1 },
  { label: 'Privada', value: 0 },
];

const SquareInfos: React.FC<SquareInfosProps> = ({ title, register, errors }) => {
  return (
    <div className="w-full h-72">
      <h1 className="text-4xl text-corPrincipal font-bold mb-4 text-">{title}</h1>
      <div className="w-full h-56 p-5 bg-white rounded-xl drop-shadow-xl">
        <div className="w-full h-full flex flex-col justify-between">
          <div className="w-full flex flex-row justify-between">
            <InputCustom
              {...register('titulo')}
              label="Título"
              error={!!errors?.titulo}
              helperText={errors?.titulo?.message}
            />
            <InputCustom
              {...register('dataTermino')}
              label="Data Limite"
              larguraInput="40px"
              error={!!errors?.dataTermino}
              helperText={errors?.dataTermino?.message}
            />
            <InputCustom
              {...register('tags')}
              label="Tags"
              larguraInput="40px"
              error={!!errors?.tags}
              helperText={errors?.tags?.message}
            />
            <SelectCustom
              {...register('ehPublico')}
              options={options}
            />
          </div>
          <div className="w-full h-auto">
            <InputCustom
              {...register('descricao')}
              label="Descrição..."
              alturaInput="24"
              error={!!errors?.descricao}
              helperText={errors?.descricao?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareInfos;
