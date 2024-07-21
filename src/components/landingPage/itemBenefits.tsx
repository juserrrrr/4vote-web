import Image from 'next/image';
import check from '@/components/landingPage/assets/check.svg';
import { ReactNode } from 'react';

type Props = {
  texto: ReactNode;
};

export function ItemBenefits({ texto }: Props) {
  return (
    <div className="flex items-center justify-between w-full md:w-[607px] mt-10 opacity-100 hover:opacity-70">
      <Image
        src={check}
        alt="check"
      />
      <p className="ml-2 text-xl md:text-3xl font-medium">{texto}</p>
    </div>
  );
}
