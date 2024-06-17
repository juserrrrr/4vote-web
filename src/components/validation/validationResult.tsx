import React from 'react';
import iconCorrect from './icons/check-circle.png';
import iconIncorrect from './icons/alert-circle.png';
import Image from 'next/image';

interface Props {
  answer: boolean;
}

export const ValidationResult: React.FC<Props> = ({ answer }) => {
  const fontStyle = "text-center text-sky-900 text-[29px] font-bold font-['Open Sans']";

  const render = () => {
    if (answer === true) {
      return (
        <>
          <Image
            src={iconCorrect}
            alt="Icon"
          />
          <div className={fontStyle}>VOTO VÁLIDO</div>
        </>
      );
    } else if (answer === false) {
      return (
        <>
          <Image
            src={iconIncorrect}
            alt="Icon"
          />
          <div className={fontStyle}>VOTO INVÁLIDO</div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="w-[750px] h-[180px] bg-white rounded-[7px] flex-col justify-center items-center gap-2 inline-flex">
      <div className="w-[750px] h-3.5 bg-sky-900 rounded-tl-[7px] rounded-tr-[7px]" />
      {render()}
      <div className="w-[750px] h-3.5 bg-sky-900 rounded-tl-[7px] rounded-tr-[7px] rotate-180" />
    </div>
  );
};
