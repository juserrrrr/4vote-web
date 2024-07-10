'use client';
import React from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import SelectCustom from '../selectBox';
import { useFormContext } from 'react-hook-form';
import { PesquisaDto } from '../../lib/pesquisa';

interface SquareInfosProps {
  title?: 'CRIAR VOTAÇÃO' | 'CRIAR ENQUETE';
}

const options = [
  { label: 'Pública', value: true },
  { label: 'Privada', value: false },
];

//Função para transformar as tags entre espaços em um array de strings
function transformTags(tags: string): { nome: string }[] | undefined {
  if (typeof tags !== 'string') return undefined;
  //Transforma a string em um array de strings
  const splitArray = tags.split(' ');
  //Mapeia o array de strings e transforma em um objeto com a propriedade nome
  const mappedArray = splitArray.map((tag) => ({ nome: tag.trim() }));
  //Filtra o array para remover as strings vazias
  const filteredArray = mappedArray.filter((tag) => tag.nome !== '');
  return filteredArray;
}
const SquareInfos: React.FC<SquareInfosProps> = ({ title }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<PesquisaDto>();
  return (
    <div className="w-full h-72 flex flex-col">
      <h1 className="text-4xl text-corPrincipal font-bold mb-4 text-">{title}</h1>
      <div className="w-full h-full p-5 bg-white rounded-xl drop-shadow-xl">
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
              {...register('tags', { setValueAs: (value: string) => transformTags(value) })}
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
              alturaInput="20"
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
