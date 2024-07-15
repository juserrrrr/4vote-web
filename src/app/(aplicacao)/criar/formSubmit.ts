'use server';
import { PesquisaData, PesquisaDto, surveyService } from '@/lib/pesquisa';

interface formResponse {
  message: string;
  code?: string;
  statusCode: number;
}

export async function onSubimitAction(data: FormData): Promise<formResponse> {
  const values = Object.fromEntries(data.entries());
  const formValues: PesquisaDto = {
    titulo: values.titulo as string,
    descricao: values.descricao as string,
    dataTermino: values.dataTermino as string,
    ehPublico: values.ehPublico === 'true',
    ehVotacao: values.ehVotacao === 'true',
    perguntas: JSON.parse(values.perguntas as string),
    ...(values.tags && { tags: JSON.parse(values.tags as string) }),
  };
  const response = await surveyService.createPesquisa(formValues);
  if (response instanceof Error) {
    return { message: response.message, statusCode: 400 };
  }
  return { code: response.codigo, message: 'Pesquisa criada com sucesso', statusCode: 200 };
}
