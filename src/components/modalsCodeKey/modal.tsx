import React, { useId, useState } from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';

interface ModalInterface {
  isOpen: boolean;
  closeModal: () => void;
  title: string;
  subtitle: string;
  instruction: string;
}

const Modal: React.FC<ModalInterface> = ({ isOpen, closeModal, title, subtitle, instruction }) => {
  const id = useId();
  if (!isOpen) return null;

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <div
        className={
          'bg-corNeutro w-[750px] h-[310px] rounded-md border-corPrincipal border-2 text-center text-corPrincipal flex flex-col items-center justify-center font-sans relative '
        }
      >
        {' '}
        <div className="font-bold text-center">
          <h1 className={'mb-0  text-[32px] -mt-20'}>{title}</h1>
          <h2 className={'mb-8 text-[12px] w-full'}>{subtitle}</h2>
        </div>
        <div className="w-[394px] font-sans font-bold">
          <p className="text-left text-[14px] -mb-3 pl-1">{instruction}</p>
          <InputCustom
            id="id"
            className="p-2 h-10 mt-3 rounded-[7px] w-full  border-2 border-blue-950 focus:outline-none bg-corPrincipal text-corNeutro text-[22px]"
          ></InputCustom>
        </div>
        <div className="absolute bottom-4 right-8 flex justify-end items-end flex-1 self-stretch font-sans">
          <Butao
            onClick={closeModal}
            texto={'SAIR'}
            variant="rounded"
            textColor="primaria"
            bgColor="transparente"
            className="text-corErro text-[15px] flex w-[120px] h-[37px] py-0 pr-58 px-[38px] justify-center items-center font-bold gap-0.5 pl-1"
          ></Butao>
          <Butao
            onClick={closeModal}
            texto={'CONFIRMAR'}
            variant="outlined"
            textColor="terciaria"
            bgColor="transparente"
            className="w-[120px] h-[37px] text-corPrincipal font-bold font-sans"
          ></Butao>
        </div>
      </div>
    </div>
  );
};

export default Modal;
