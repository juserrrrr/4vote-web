'use client';
import Butao from '@/components/buttons/button';
import SquareInfos from '@/components/elementsEnqVot/SquareInfos';
import SquareOptions from '@/components/elementsEnqVot/SquareOptions';
import { PesquisaDto } from '@/lib/pesquisa';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import * as yup from 'yup';
import { onSubimitAction } from './formSubmit';
import { useState } from 'react';

const opcaoSchema = yup.object({
  texto: yup.string().required('Opção é obrigatória'),
  imagemOpcao: yup.mixed(),
});

const perguntaSchema = yup.object({
  texto: yup.string().required('Pergunta é obrigatória'),
  opcoes: yup.array().of(opcaoSchema).required('Opções são obrigatórias').min(2, 'Mínimo de 2 opções'),
});

const tagSchema = yup.object({
  nome: yup.string().required('Nome é obrigatório'),
});

const votacaoSchema = yup.object({
  titulo: yup.string().required('Título é obrigatório'),
  descricao: yup.string(),
  imagemPesquisa: yup.mixed(),
  dataTermino: yup.string().required('Data de término é obrigatória'),
  ehPublico: yup.boolean().required('É público é obrigatório'),
  ehVotacao: yup.boolean().required('É votação é obrigatório'),
  perguntas: yup.array().of(perguntaSchema).required('Perguntas são obrigatórias'),
  tags: yup.array().of(tagSchema),
});

const enqueteSchema = yup.object({
  titulo: yup.string().required('Título é obrigatório'),
  descricao: yup.string(),
  dataTermino: yup.string().required('Data de término é obrigatória'),
  ehPublico: yup.boolean().required('É público é obrigatório'),
  ehVotacao: yup.boolean().required('É votação é obrigatório'),
  perguntas: yup.array().of(perguntaSchema).required('Perguntas são obrigatórias'),
  tags: yup.array().of(tagSchema),
});

function ButtonSubmit({ isSuccess, type }: { isSuccess: boolean; type: 'votacao' | 'enquete' }) {
  const { formState } = useFormContext();
  const { isSubmitting } = formState;
  const textButton = type === 'votacao' ? 'CRIAR VOTAÇÃO' : 'CRIAR ENQUETE';
  return (
    <Butao
      type="submit"
      disabled={isSubmitting}
      className={`${isSuccess && 'bg-corSucesso'}`}
      texto={isSubmitting ? 'CRIANDO...' : textButton}
      variant="default"
    />
  );
}
interface CriarVotacaoProps {
  type: 'votacao' | 'enquete';
}

function CriarPesquisa({ type }: CriarVotacaoProps) {
  const defaultValues: PesquisaDto = {
    titulo: '',
    dataTermino: '',
    ehPublico: true,
    descricao: '',
    ehVotacao: type === 'votacao' ? true : false,
    perguntas: [
      {
        texto: '',
        opcoes: [{ texto: '' }, { texto: '' }],
      },
    ],
    tags: [],
  };

  const methods = useForm<PesquisaDto>({
    resolver: yupResolver(type === 'votacao' ? votacaoSchema : enqueteSchema),
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  async function onSubmit(data: PesquisaDto) {
    console.log(data);
    const formData = new FormData();
    formData.append('titulo', data.titulo);
    formData.append('descricao', data.descricao || '');
    formData.append('dataTermino', data.dataTermino);
    formData.append('ehPublico', data.ehPublico.toString());
    formData.append('ehVotacao', data.ehVotacao.toString());
    formData.append('perguntas', JSON.stringify(data.perguntas));
    if (data.tags?.length) formData.append('tags', JSON.stringify(data.tags));
    const response = await onSubimitAction(formData);
    if (response.statusCode === 201) {
      setIsSuccess(true);
    }
  }

  return (
    <div className="px-3 md:mx-20 pb-4">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
          <SquareInfos title={type === 'votacao' ? 'CRIAR VOTAÇÃO' : 'CRIAR ENQUETE'} />
          <SquareOptions type={type} />
          <div className="w-full flex justify-center md:justify-end items-center mt-6">
            <ButtonSubmit
              isSuccess={isSuccess}
              type={type}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default CriarPesquisa;
