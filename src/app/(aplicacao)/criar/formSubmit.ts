'use server';
import { PesquisaDto, PesquisaResponse, surveyService } from '@/lib/pesquisa';

export async function onSubimitAction(data: FormData): Promise<PesquisaResponse> {
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
  return response;
}
