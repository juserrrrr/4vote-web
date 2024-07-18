'use server';
import { PencilIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { ProfileConfig } from '@/components/profileConfig/profileConfig';
import { userService } from '@/lib/user';
import ErrorSurvey from '@/components/showSurveys/ErrorSurveys';
import FileUploadCustom from '@/components/InputCustom/FileUploadCustom';

async function getProfile() {
  const response = await userService.findMe();
  return response;
}

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
  return { message: 'Perfil atualizado com sucesso', codeStaus: 200 };
}

export default async function Home() {
  const data = await getProfile();
  if (data instanceof Error) {
    return ErrorSurvey({ message: data.message });
  }

  return (
    <div className="w-full h-full flex flex-col">
      <ProfileConfig initialdefaultValues={data} />
    </div>
  );
}
