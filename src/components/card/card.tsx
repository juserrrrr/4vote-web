import React, { use } from 'react';
import icon1 from './icon/VectorBlue.png';
import icon2 from './icon/VectorRed.png';
import Image from 'next/image';
import Butao from '../buttons/button';
import { useRouter } from 'next/navigation';

type Variant = 'VOTAÇÃO' | 'ENQUETE';

interface CardProps {
  code: string;
  title: string;
  description: string;
  variant: Variant;
  hashtags: string[];
  imageUrl: string | null;
  codeUser?: string;
  criador?: string;
}

export const Card: React.FC<CardProps> = ({
  code,
  title,
  description,
  variant,
  hashtags,
  imageUrl,
  codeUser,
  criador,
}) => {
  const router = useRouter();
  return (
    <div
      className="h-96 bg-white rounded-lg shadow-md flex flex-col cursor-pointer"
      onClick={() => router.push(`/resposta/${code}`)}
    >
      {/* Barra com cor do topo */}
      <div className={`rounded-t-lg h-3 ${variant === 'ENQUETE' ? 'bg-blue-700' : 'bg-red-600'}`} />
      <div className="relative h-36 w-full bg-corPrincipal">
        <Image
          src={
            imageUrl
              ? imageUrl
              : 'https://nydqbchcfgkevfdmbifx.supabase.co/storage/v1/object/public/Files4vote/4voteCard.png'
          }
          fill
          alt="Imagem da enquete"
          className="object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col relative overflow-hidden">
        <h2 className="text-base font-bold py-1 px-3">{title}</h2>
        <p className="text-sm font-bold px-3">{description}</p>
      </div>
      <div className="flex flex-col justify-end">
        <div className="flex items-center justify-center z-10">
          <Image
            src={variant === 'ENQUETE' ? icon1 : icon2}
            alt="Icon"
            className="w-4 h-4 mx-1"
            width={4}
            height={4}
          />
          <p className="text-base text-center font-bold py-1">{variant}</p>
        </div>

        <p className="text-xs h-6 bg-corPrincipal text-white py-1 rounded-b-lg text-center lowercase whitespace-nowrap truncate">
          {hashtags.length > 0 ? hashtags.map((hashtag) => `#${hashtag} `) : 'Sem Tags'}
        </p>
      </div>
    </div>
  );
};
