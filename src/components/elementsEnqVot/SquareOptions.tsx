'use client';
import React from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Divider from '../divider/Divider';
import { ArrowUpTrayIcon, PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { Control, FieldErrors, UseFormRegister, useFieldArray } from 'react-hook-form';
import { TrashIcon } from '@heroicons/react/24/solid';
import { PesquisaDto } from '@/lib/pesquisa';

interface SquareOptionsProps {
  register: UseFormRegister<PesquisaDto>;
  control: Control<PesquisaDto, any>;
  errors?: FieldErrors<PesquisaDto>;
  type?: 'votacao' | 'enquete';
}

interface RenderOptionsProps extends SquareOptionsProps {
  index: number;
}

interface NewButtonProps {
  onClick: () => void;
  text: string;
}

function NewButton({ onClick, text }: NewButtonProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-row justify-center items-center gap-2 uppercase text-center font-bold text-corPrincipal hover:text-corSecundaria cursor-pointer px-32"
    >
      <span>{text}</span>
      <div className="w-7 h-7 rounded-full bg-corPrincipal text-white flex justify-center items-center">
        <PlusIcon
          strokeWidth={2}
          className="h-6 cursor-pointer"
        />
      </div>
    </div>
  );
}

function RenderOptions({ index, control, register, errors, type = 'votacao' }: RenderOptionsProps) {
  const {
    fields: optionsFields,
    append: optionsAppend,
    remove: optionsRemove,
  } = useFieldArray({
    control: control,
    name: `perguntas.${index}.opcoes`,
  });
  return (
    <>
      <div className="flex-grow overflow-y-auto scrollbar-thin ">
        <div className="flex flex-col gap-2 px-5 pb-5">
          {optionsFields.map((_, indexOption) => (
            <div
              key={indexOption}
              className="h-auto flex flex-row gap-2 justify-normal items-center"
            >
              <XCircleIcon
                onClick={() => optionsRemove(indexOption)}
                className="h-12 text-red-500 hover:text-red-700 cursor-pointer"
              />
              <InputCustom
                {...register(`perguntas.${index}.opcoes.${indexOption}.texto`)}
                label={`Opção ${indexOption + 1}`}
                error={!!errors?.perguntas?.[0]?.opcoes?.[indexOption]?.texto}
                helperText={errors?.perguntas?.[0]?.opcoes?.[indexOption]?.texto?.message}
              />
              <span className="text-center w-16">Enviar Imagem</span>
              <div>
                <button className="w-12 h-12 rounded-full bg-corPrincipal text-white flex items-center justify-center hover:bg-corSecundaria focus:outline-none">
                  <ArrowUpTrayIcon className="h-6" />
                </button>
              </div>
            </div>
          ))}
          <div className="flex w-full justify-end items-center">
            <NewButton
              onClick={() => optionsAppend({ texto: '' })}
              text="nova Opção"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function RenderQuestions({ control, register, errors, type = 'votacao' }: SquareOptionsProps) {
  const {
    fields: questionFields,
    append: questionAppend,
    remove: questionRemove,
  } = useFieldArray({
    control: control,
    name: 'perguntas',
  });
  return (
    <>
      <div className="flex flex-col gap-8">
        {questionFields.map((_, indexQuestion) => (
          <div
            key={indexQuestion}
            className="w-full h-96 bg-white rounded-xl drop-shadow-xl flex flex-col"
          >
            <div>
              <div className="px-5 pt-5 flex flex-row gap-2 justify-center items-center">
                <InputCustom
                  {...register(`perguntas.${indexQuestion}.texto`)}
                  label={`${type === 'enquete' ? `Pergunta ${indexQuestion + 1}` : 'Pergunta'}`}
                  error={!!errors?.perguntas?.[0]?.texto}
                  helperText={errors?.perguntas?.[0]?.texto?.message}
                />
                {type === 'enquete' && (
                  <>
                    <span className="text-center text-sm w-16">Remover Pergunta</span>
                    <div>
                      <button
                        onClick={() => {
                          questionRemove(indexQuestion);
                        }}
                        className="w-12 h-12 rounded-full bg-corErro text-white flex items-center justify-center hover:bg-rose-700 focus:outline-none"
                      >
                        <TrashIcon className="h-6 text-white" />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <Divider />
            </div>
            <RenderOptions
              index={indexQuestion}
              control={control}
              register={register}
              errors={errors}
            />
          </div>
        ))}
        {type === 'enquete' && (
          <NewButton
            onClick={() => questionAppend({ texto: '', opcoes: [{ texto: '' }, { texto: '' }] })}
            text="nova Pergunta"
          />
        )}
      </div>
    </>
  );
}

function SquareOptions({ register, control, errors, type = 'votacao' }: SquareOptionsProps) {
  return (
    <div className="w-full mt-2">
      <h1 className="text-4xl text-corPrincipal font-bold mb-4">PERGUNTAS</h1>
      <RenderQuestions
        control={control}
        register={register}
        errors={errors}
        type={type}
      />
    </div>
  );
}

export default SquareOptions;
