'use server';
import { PencilIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { ProfileConfig } from '@/components/profileConfig/profileConfig';
import { userService } from '@/lib/user';
import ErrorSurvey from '@/components/showSurveys/ErrorSurveys';

async function getProfile() {
  const response = await userService.findMe();
  return response;
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
