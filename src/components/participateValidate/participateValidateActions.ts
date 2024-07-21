'use server';

import { participationService } from '@/lib/participacoes';
import { surveyService } from '@/lib/pesquisa';

interface formResponse {
  token?: string;
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

// export async function onSubmitParticipate(data: FormData): Promise<formResponse> {
//   const values = Object.fromEntries(data.entries());
//   const formValues: IParticipateDto = {
//     code: values.code as string,
//   };
//   const response = await surveyService.(formValues);
//   if (response instanceof Error) {
//     return { error: { message: response.message } };
//   }
//   return { token: response.accessToken };
// }

// export async function onSubmitValidate(data: FormData): Promise<formResponse> {
//   const values = Object.fromEntries(data.entries());
//   const formValues: IValidateDto = {
//     code: values.code as string,
//   };
//   const response = await participationService.(formValues);
//   if (response instanceof Error) {
//     return { error: { message: response.message } };
//   }

//   return { token: response.accessToken };
// }
