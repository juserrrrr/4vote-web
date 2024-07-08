'use client';
import Butao from '@/components/buttons/button';
import SquareInfos from '@/components/elementsEnqVot/SquareInfos';
import SquareOptions from '@/components/elementsEnqVot/SquareOptions';
import { PesquisaDto } from '@/lib/pesquisa';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { onSubimitAction } from './formSubmit';
import { useFormState, useFormStatus } from 'react-dom';

const defaultValues: PesquisaDto = {
  titulo: '',
  dataTermino: '2024-07-20 15:30:00',
  ehPublico: true,
  descricao: '',
  ehVotacao: false,
  perguntas: [
    {
      texto: '',
      opcoes: [{ texto: '' }, { texto: '' }],
    },
  ],
  tags: [
    {
      nome: 'Politica',
    },
  ],
};

function ButtonSubmit() {
  const status = useFormStatus();
  console.log(status);
  return (
    <Butao
      type="submit"
      disabled={status.pending}
      texto="CRIAR VOTAÇÃO"
      variant="default"
    />
  );
}

function CriarVotacao() {
  const opcaoSchema = yup.object({
    texto: yup.string().required('Opção é obrigatória'),
  });

  const perguntaSchema = yup.object({
    texto: yup.string().required('Pergunta é obrigatória'),
    opcoes: yup.array().of(opcaoSchema).required('Opções são obrigatórias').min(2, 'Mínimo de 2 opções'),
  });

  const tagSchema = yup.object({
    nome: yup.string().required('Nome é obrigatório'),
  });

  const pesquisaSchema = yup.object({
    titulo: yup.string().required('Título é obrigatório'),
    descricao: yup.string(),
    dataTermino: yup.string().required('Data de término é obrigatória'),
    ehPublico: yup.boolean().required('É público é obrigatório'),
    ehVotacao: yup.boolean().required('É votação é obrigatório'),
    perguntas: yup.array().of(perguntaSchema).required('Perguntas são obrigatórias'),
    tags: yup.array().of(tagSchema),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PesquisaDto>({
    resolver: yupResolver(pesquisaSchema),
    defaultValues: defaultValues,
  });

  const [state, formAction] = useFormState(onSubimitAction, { message: '' });

  async function onSubmit(data: PesquisaDto) {
    const formData = new FormData();
    formData.append('titulo', data.titulo);
    formData.append('descricao', data.descricao || '');
    formData.append('dataTermino', data.dataTermino);
    formData.append('ehPublico', data.ehPublico.toString());
    formData.append('ehVotacao', data.ehVotacao.toString());
    formData.append('perguntas', JSON.stringify(data.perguntas));
    formData.append('tags', JSON.stringify(data.tags));
    formAction(formData);
  }

  return (
    <div className="mx-20">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SquareInfos
          register={register}
          title="CRIAR VOTAÇÃO"
          errors={errors}
        />
        <SquareOptions
          control={control}
          register={register}
          errors={errors}
        />
        <div className="w-full flex justify-end items-center mt-6">
          <ButtonSubmit />
        </div>
      </form>
    </div>
  );
}

export default CriarVotacao;
