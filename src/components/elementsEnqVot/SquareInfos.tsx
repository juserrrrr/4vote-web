'use client';
import React from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import SelectCustom from '../selectBox';
import { useFormContext } from 'react-hook-form';
import { PesquisaDto } from '../../lib/pesquisa';
import FileUploadCustom from '../InputCustom/FileUploadCustom';

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
    <div className="w-full h-full flex flex-col justify-center items-center lg:justify-normal lg:items-start">
      <h1 className="text-3xl lg:text-4xl text-corPrincipal font-bold mb-4 text-">{title}</h1>
      <div className="w-full h-full p-5 bg-white rounded-xl drop-shadow-xl">
        <div className="w-full h-full flex flex-col gap-3">
          <div className="w-full flex flex-col lg:flex-row gap-3">
            <InputCustom
              {...register('titulo')}
              label="Título"
              error={!!errors?.titulo}
              helperText={errors?.titulo?.message}
            />
            <InputCustom
              {...register('dataTermino')}
              label="Data Limite"
              type="datetime-local"
              error={!!errors?.dataTermino}
              helperText={errors?.dataTermino?.message}
            />
            <InputCustom
              {...register('tags', { setValueAs: (value: string) => transformTags(value) })}
              label="Tags"
              error={!!errors?.tags}
              helperText={errors?.tags?.message}
            />
            <SelectCustom
              {...register('ehPublico')}
              options={options}
            />
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-3">
            <InputCustom
              {...register('descricao')}
              label="Descrição..."
              error={!!errors?.descricao}
              helperText={errors?.descricao?.message}
            />
            <FileUploadCustom {...register('imagemPesquisa')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquareInfos;
