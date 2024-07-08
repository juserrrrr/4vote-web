'use client';
import Butao from '@/components/buttons/button';
import SquareInfos from '@/components/elementsEnqVot/SquareInfos';
import SquareOptions from '@/components/elementsEnqVot/SquareOptions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFieldArray, useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface VotacaoDto {
  nome: string;
  dataTermino: string;
  ehPublico: number;
  descricao: string;
  perguntas: {
    pergunta: string;
    opcoes: {
      texto: string;
    }[];
  }[];
  tags?: string;
}

const defaultValues: VotacaoDto = {
  nome: '',
  dataTermino: '',
  ehPublico: 1,
  descricao: '',
  perguntas: [
    {
      pergunta: '',
      opcoes: [{ texto: '' }, { texto: '' }],
    },
  ],
  tags: '',
};

function CriarVotacao() {
  const votacaoSchema = yup.object({
    nome: yup.string().required('Nome é obrigatório'),
    dataTermino: yup.string().required('Data é obrigatória'),
    ehPublico: yup.number().required('Tipo é obrigatório'),
    descricao: yup.string().required('Descrição é obrigatória'),
    perguntas: yup
      .array()
      .of(
        yup.object({
          pergunta: yup.string().required('Pergunta é obrigatória'),
          opcoes: yup
            .array()
            .of(
              yup.object({
                texto: yup.string().required('Opção é obrigatória'),
              }),
            )
            .required('Opções são obrigatórias')
            .min(2, 'Mínimo de 2 opções'),
        }),
      )
      .required('Perguntas são obrigatórias')
      .max(1, 'Máximo de 1 pergunta'),
    tags: yup.string(),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VotacaoDto>({
    resolver: yupResolver(votacaoSchema),
    defaultValues: defaultValues,
  });

  return (
    <div className="mx-20">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <SquareInfos
          register={register}
          title="CRIAR VOTAÇÃO"
        />
        <SquareOptions
          control={control}
          register={register}
        />
        <div className="w-full flex justify-end items-center mt-6">
          <Butao
            type="submit"
            texto="CRIAR VOTAÇÃO"
            variant="rounded"
            onClick={handleSubmit((data) => console.log(data))}
          />
        </div>
      </form>
    </div>
  );
}

export default CriarVotacao;
