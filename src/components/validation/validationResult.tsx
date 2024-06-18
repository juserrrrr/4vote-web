import React from 'react';
import iconCorrect from './icons/check-circle.png';
import iconIncorrect from './icons/alert-circle.png';
import Image from 'next/image';

interface Props {
  isCorrect: boolean;
}

export const ValidationResult: React.FC<Props> = ({ isCorrect = false }) => {
  const fontStyle = "text-center text-sky-900 text-[29px] font-bold font-['Open Sans']";

  return (
    <div className="w-[750px] h-[180px] bg-white rounded-[7px] flex-col justify-center items-center gap-2 inline-flex">
      <div className="w-[750px] h-3.5 bg-sky-900 rounded-tl-[7px] rounded-tr-[7px]" />
      <Image
        src={isCorrect ? iconCorrect : iconIncorrect}
        alt="Icon"
      />
      <div className={fontStyle}>{isCorrect ? 'VOTO VÁLIDO' : 'VOTO INVÁLIDO'}</div>
      <div className="w-[750px] h-3.5 bg-sky-900 rounded-tl-[7px] rounded-tr-[7px] rotate-180" />
    </div>
  );
};
