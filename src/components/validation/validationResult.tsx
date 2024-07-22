import React from 'react';
import iconCorrect from './icons/check-circle.png';
import iconIncorrect from './icons/alert-circle.png';
import Image from 'next/image';

interface Props {
  isCorrect: boolean;
  titleInvalid?: string;
  titleValid?: string;
}

export const ValidationResult: React.FC<Props> = ({
  isCorrect = false,
  titleInvalid = 'VOTO INVÁLIDO',
  titleValid = 'VOTO VÁLIDO',
}) => {
  return (
    <div className="w-full h-auto max-w-[750px] max-h-60 bg-white rounded-[7px] flex-col justify-center items-center gap-2 inline-flex">
      <div className="w-full h-3.5 bg-sky-900 rounded-tl-[7px] rounded-tr-[7px]" />
      <Image
        src={isCorrect ? iconCorrect : iconIncorrect}
        alt="Icon"
      />
      <div className="text-center text-sky-900 text-[29px] font-bold font-['Open Sans']">
        {isCorrect ? titleValid : titleInvalid}
      </div>
      <div className="w-full h-3.5 bg-sky-900 rounded-tl-[7px] rounded-tr-[7px] rotate-180" />
    </div>
  );
};
