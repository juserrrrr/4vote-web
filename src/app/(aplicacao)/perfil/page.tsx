import { EyeSlashIcon, PencilIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { ProfileConfig } from '@/components/profileConfig/profileConfig';

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-[190px] bg-corPrincipal border-none my-5">
        <div className="top-20 relative inline-block">
          <div className="absolute top-28 left-28 bg-white p-2 rounded-full">
            <PencilIcon className="text-corPrincipal w-6" />
          </div>
          <Image
            width={150}
            height={150}
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
      </div>

      <ProfileConfig />
    </div>
  );
}
