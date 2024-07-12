'use client';
import React from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Divider from '../divider/Divider';
import { PlusIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { TrashIcon } from '@heroicons/react/24/solid';
import { PesquisaDto } from '@/lib/pesquisa';
import FileUploadCustom from '../InputCustom/FileUploadCustom';

interface SquareOptionsProps {
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
      className="w-auto flex flex-row justify-center items-center gap-2 uppercase text-center font-bold text-corPrincipal hover:text-corSecundaria cursor-pointer md:px-32"
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

function RenderOptions({ index }: RenderOptionsProps) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<PesquisaDto>();

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
        <div className="flex flex-col gap-3 pt-2 px-2 md:px-5 pb-3">
          {optionsFields.map((_, indexOption) => (
            <div
              key={indexOption}
              className="flex flex-row md:gap-2 justify-normal items-center"
            >
              <div>
                <XCircleIcon
                  onClick={() => optionsRemove(indexOption)}
                  className="h-10 md:h-12 text-red-500 hover:text-red-700 cursor-pointer"
                />
              </div>
              <InputCustom
                {...register(`perguntas.${index}.opcoes.${indexOption}.texto`)}
                label={`Opção ${indexOption + 1}`}
                error={!!errors?.perguntas?.[index]?.opcoes?.[indexOption]?.texto}
                helperText={errors?.perguntas?.[index]?.opcoes?.[indexOption]?.texto?.message}
              />

              <FileUploadCustom {...register(`perguntas.${index}.opcoes.${indexOption}.imagemOpcao`)} />
            </div>
          ))}
          <div className="flex w-full justify-center items-center">
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

function RenderQuestions({ type = 'votacao' }: SquareOptionsProps) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<PesquisaDto>();

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
      <div className="w-full h-full flex flex-col gap-6">
        {questionFields.map((_, indexQuestion) => (
          <div
            key={indexQuestion}
            className="w-full h-96 bg-white rounded-xl drop-shadow-xl flex flex-col"
          >
            <div>
              <div className="w-full px-2 md:px-5 pt-5 flex flex-row md:gap-2 justify-center items-center">
                <InputCustom
                  {...register(`perguntas.${indexQuestion}.texto`)}
                  label={`${type === 'enquete' ? `Pergunta ${indexQuestion + 1}` : 'Pergunta'}`}
                  error={!!errors?.perguntas?.[indexQuestion]?.texto}
                  helperText={errors?.perguntas?.[indexQuestion]?.texto?.message}
                />
                {type === 'enquete' && (
                  <div className="flex flex-row justify-center items-center gap-2">
                    <span className="text-center text-sm w-16 hidden md:block">Remover Pergunta</span>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          questionRemove(indexQuestion);
                        }}
                        className="w-10 h-10 md:w-12 md:h-12 mx-1 rounded-full bg-corErro text-white flex items-center justify-center hover:bg-rose-700 focus:outline-none"
                      >
                        <TrashIcon className="h-6 text-white" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <Divider />
            </div>
            <RenderOptions index={indexQuestion} />
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

function SquareOptions({ type = 'votacao' }: SquareOptionsProps) {
  return (
    <div className="w-full mt-2 flex flex-col justify-center items-center md:justify-start md:items-start">
      <h1 className="text-4xl text-corPrincipal font-bold mb-4">PERGUNTAS</h1>
      <RenderQuestions type={type} />
    </div>
  );
}

export default SquareOptions;
