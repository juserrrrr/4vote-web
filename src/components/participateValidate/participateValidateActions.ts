'use server';

import { participationService } from '@/lib/participacoes';
import { surveyService } from '@/lib/pesquisa';

interface formResponse {
  titulo?: string;
  error?: {
    message: string;
  };
}

interface IParticipateDto {
  code: string;
}

interface IValidateDto {
  code: string;
}

export async function onSubmitParticipate(data: FormData): Promise<formResponse> {
  const values = Object.fromEntries(data.entries());
  const formValues: IParticipateDto = {
    code: values.code as string,
  };
  const response = await surveyService.getByCode(formValues.code);
  if (response instanceof Error || response.length === 0) {
    return { error: { message: 'Não foi possivel encotnrar' } };
  }
  return { titulo: response[0].titulo };
}

interface formResponseValidate {
  message?: 'Seu voto não está validado' | 'Seu voto está validado';
}

export async function onSubmitValidate(data: FormData): Promise<formResponseValidate> {
  const values = Object.fromEntries(data.entries());
  const hash = values.code as string;
  const response = await participationService.validateHash(hash);

  return { message: response };
}
