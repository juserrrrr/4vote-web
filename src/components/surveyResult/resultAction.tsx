'use server';

import { surveyService } from '../../lib/pesquisa';

interface formResponseValidate {
  message?: 'Pesquisa sem fraudes' | 'Pesquisa Fraudada!';
  error?: {
    message: string;
  };
}

export async function onSubmitAudit(data: FormData): Promise<formResponseValidate> {
  const values = Object.fromEntries(data.entries());
  const code = values.codigo as string;
  const response = await surveyService.auditSurvey(code);
  if (response instanceof Error) {
    return { error: { message: response.message } };
  }

  return { message: response.message };
}
export async function onSubmitArchived(data: FormData): Promise<formResponseValidate> {
  const values = Object.fromEntries(data.entries());
  const code = values.codigo as string;
  const response = await surveyService.setArquivado(code);
  if (response instanceof Error) {
    return { error: { message: response.message } };
  }

  return { message: response.message };
}
