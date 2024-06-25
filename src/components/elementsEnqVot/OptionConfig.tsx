import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import InputCustom from '@/components/InputCustom/InputCustom';

interface OptionConfigPropos {
  title: string;
}

const OptionConfig: React.FC<OptionConfigPropos> = ({ title }) => {
  const backgraund = 'flex flex-line w-[1180px] justify-center items-center';
  const IconX: React.FC = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="red"
      className="size-10"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const IconSend: React.FC = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="27.5"
        cy="27.5"
        r="27.5"
        fill="#052A76"
      />
      <path
        d="M39 31V36.3333C39 37.0406 38.719 37.7189 38.219 38.219C37.7189 38.719 37.0406 39 36.3333 39H17.6667C16.9594 39 16.2811 38.719 15.781 38.219C15.281 37.7189 15 37.0406 15 36.3333V31M33.6667 21.6667L27 15M27 15L20.3333 21.6667M27 15V31"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div className={backgraund}>
      <IconX />
      <InputCustom
        label={title}
        alturaInput="[60px]"
      />
      <div className="inline-flex">
        <h2 className="font-semibold mt-3 ml-10 mr-5 text-corPrincipal"> Enviar Imagem</h2>
        <div className="mt-4">
          <IconSend />
        </div>
      </div>
    </div>
  );
};

export default OptionConfig;
