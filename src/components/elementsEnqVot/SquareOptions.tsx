'use client';
import React from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Divider from '../divider/Divider';
import { ArrowUpTrayIcon, PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Control, UseFormRegister, useFieldArray } from 'react-hook-form';
import { VotacaoDto } from '@/app/(aplicacao)/criar/Votacao';

interface SquareOptionsProps {
  register: UseFormRegister<VotacaoDto>;
  control: Control<VotacaoDto, any>;
}

function SquareOptions({ register, control }: SquareOptionsProps) {
  const {
    fields: opcoesFields,
    append: opcoesAppend,
    remove: opcoesRemove,
  } = useFieldArray({
    control,
    name: 'perguntas.0.opcoes',
  });
  return (
    <div className="w-full mt-3">
      <h1 className="text-4xl text-corPrincipal font-bold mb-4">PERGUNTAS</h1>
      <div className="w-full h-96 bg-white rounded-xl drop-shadow-xl flex flex-col">
        <div className="px-5 pt-5">
          <InputCustom
            {...register('perguntas.0.pergunta')}
            label="Pergunta"
          />
          <Divider />
        </div>
        <div className="flex-grow overflow-y-auto scrollbar-thin ">
          <div className="flex flex-col gap-4 px-5 pb-5">
            {opcoesFields.map((_, index) => (
              <>
                <div
                  key={index}
                  className="h-14 flex flex-row gap-2 justify-center items-center"
                >
                  <XCircleIcon
                    onClick={() => opcoesRemove(index)}
                    className="h-12 text-red-500 cursor-pointer"
                  />
                  <InputCustom
                    {...register(`perguntas.0.opcoes.${index}.texto`)}
                    label={`Opção ${index + 1}`}
                  />
                  <span className="text-center w-16">Enviar Imagem</span>
                  <div>
                    <button className="w-12 h-12 rounded-full bg-corPrincipal text-white flex items-center justify-center hover:bg-corSecundaria focus:outline-none">
                      <ArrowUpTrayIcon className="h-6" />
                    </button>
                  </div>
                </div>
              </>
            ))}
            <div className="flex w-full justify-end items-center">
              <div
                onClick={() => opcoesAppend({ texto: '' })}
                className="flex flex-row justify-center items-center gap-2 uppercase text-center font-bold text-corPrincipal hover:text-corSecundaria cursor-pointer px-32"
              >
                <span>nova opção</span>
                <div className="w-7 h-7 rounded-full bg-corPrincipal text-white flex justify-center items-center">
                  <PlusIcon
                    strokeWidth={2}
                    className="h-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SquareOptions;
