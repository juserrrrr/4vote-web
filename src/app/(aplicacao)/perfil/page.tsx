'use server';
import { PencilIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { ProfileConfig } from '@/components/profileConfig/profileConfig';
import { userService } from '../../../lib/user';
import ErrorSurvey from '../../../components/showSurveys/ErrorSurveys';

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
      <div className="h-52 mb-16 bg-corPrincipal relative flex flex-col justify-center items-center">
        <div className="w-40 h-40 rounded-full bg-black absolute top-28 flex justify-center items-center">
          <Image
            src="https://i.imgur.com/MtvqmTU.png"
            alt="Profile"
            fill
            className="object-cover rounded-full"
          />
          <button className="w-10 h-10 absolute bg-white rounded-full top-28 left-28 flex justify-center items-center ">
            <PencilIcon className="text-corPrincipal w-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-grow justify-center py-6 px-4">
        <ProfileConfig initialdefaultValues={data} />
      </div>
    </div>
  );
}
