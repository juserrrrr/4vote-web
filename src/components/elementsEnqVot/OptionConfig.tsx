import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import InputCustom from '@/components/InputCustom/InputCustom';

interface OptionConfigPropos {
  title: String;
}

const OptionConfig: React.FC<OptionConfigPropos> = ({ title }) => {
  const backgraund = 'flex flex-line w-[1000px] justify-center items-center';
  const Icon: React.FC = () => (
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
  return (
    <div className={backgraund}>
      <Icon />
      <InputCustom
        label={title}
        alturaInput="[60px]"
      />
    </div>
  );
};

export default OptionConfig;
