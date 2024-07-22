'use server';

import { IParticipateDto, participationService } from '../../../../lib/participacoes';

interface FormResponse {
  message?: string;
  error?: {
    message: string;
  };
}

export async function onSubimitActionVote(data: FormData): Promise<FormResponse> {
  const values = Object.fromEntries(data.entries());
  const surveyId = values.pesquisaId as string;

  //passando idOption para number
  const dataVote: IParticipateDto = {
    voto: {
      opcoesVotadas: JSON.parse(values.opcoesVotadas as string).map((option: { idOption: number }) => ({
        idOption: Number(option.idOption),
      })),
    },
  };
  const response = await participationService.createParticipation(surveyId, dataVote);
  if (response instanceof Error) {
    return { error: { message: response.message } };
  }
  return { message: 'Voto computado com sucesso!' };
}
