'use server';

import { revalidatePath } from 'next/cache';
import { userService } from '../../../lib/user';

interface FormResponse {
  message: string;
  codeStaus: number;
}

export async function onSubimitActionProfile(data: FormData): Promise<FormResponse> {
  const values = Object.fromEntries(data.entries());
  const response = await userService.updateCurrentUser(data);
  if (response instanceof Error) {
    return { message: response.message, codeStaus: 400 };
  }
  return { message: 'Perfil atualizado com sucesso', codeStaus: 200 };
}
