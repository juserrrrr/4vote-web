'use server';

import { revalidatePath } from 'next/cache';
import { userService } from '../../../lib/user';

interface FormResponse {
  message: string;
  codeStaus: number;
}

export async function onSubimitActionProfile(data: FormData): Promise<FormResponse> {
  const values = Object.fromEntries(data.entries());
  const formatedData = {
    ...(values.nome && { nome: String(values.nome) }),
    ...(values.email && { email: String(values.email) }),
  };
  const reponse = await userService.updateCurrentUser(formatedData);
  if (reponse instanceof Error) {
    return { message: reponse.message, codeStaus: 400 };
  }
  revalidatePath('/(aplicacao)/perfil', 'page');
  return { message: 'Perfil atualizado com sucesso', codeStaus: 200 };
}
