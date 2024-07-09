'use server';
import { PesquisaDto, PesquisaResponse, surveyService } from '@/lib/pesquisa';

interface FormState extends PesquisaResponse {
  message: string;
}

export async function onSubimitAction(data: FormData): Promise<FormState> {
  const values = Object.fromEntries(data.entries());
  const formValues: PesquisaDto = {
    titulo: values.titulo as string,
    descricao: values.descricao as string,
    dataTermino: values.dataTermino as string,
    ehPublico: values.ehPublico === 'true',
    ehVotacao: values.ehVotacao === 'true',
    perguntas: JSON.parse(values.perguntas as string),
    tags: JSON.parse(values.tags as string),
  };
  const response = await surveyService.createPesquisa(formValues);
  if (response instanceof Error) {
    return { message: response.message };
  }
  return { message: 'Votação criada com sucesso!', ...response };
}
