'use client';
import React, { ElementRef, useEffect, useRef } from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { modalVariants } from './variantesModal';

interface ModalInterface {
  variant: 'hash' | 'key';
}

const ModalKey: React.FC<ModalInterface> = ({ variant }) => {
  const dialogRef = useRef<ElementRef<'dialog'>>(null);
  const variantModal = variant === 'hash' ? modalVariants.modalHash : modalVariants.modalCodigo;

  useEffect(() => {
    if (dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onConfirm() {}

  function onDismiss() {
    if (dialogRef.current?.open) {
      dialogRef.current?.close();
    }
  }

  return (
    <div
      id="overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <dialog
        ref={dialogRef}
        onClose={onDismiss}
        className={
          'bg-corNeutro w-[750px] h-[310px] rounded-md border-corPrincipal border-2 text-center text-corPrincipal flex flex-col items-center justify-center font-sans relative '
        }
      >
        {' '}
        <div className="font-bold text-center">
          <h1 className={'mb-0  text-[32px] -mt-20'}>{variantModal.title}</h1>
          <h2 className={'mb-8 text-[12px] w-full'}>{variantModal.subtitle}</h2>
        </div>
        <div className="w-[394px] font-sans font-bold">
          <p className="text-left text-[14px] -mb-3 pl-1">{variantModal.instruction}</p>
          <InputCustom
            id="id"
            className="p-2 h-10 mt-3 rounded-[7px] w-full  border-2 border-blue-950 focus:outline-none bg-corPrincipal text-corNeutro text-[22px]"
          ></InputCustom>
        </div>
        <div className="absolute bottom-4 right-8 flex justify-end items-end flex-1 self-stretch font-sans">
          <Butao
            onClick={onDismiss}
            texto={'SAIR'}
            variant="rounded"
            textColor="primaria"
            bgColor="transparente"
            className="text-corErro text-[15px] flex w-[120px] h-[37px] py-0 pr-58 px-[38px] justify-center items-center font-bold gap-0.5 pl-1"
          ></Butao>
          <Butao
            onClick={onConfirm}
            texto={'CONFIRMAR'}
            variant="outlined"
            textColor="terciaria"
            bgColor="transparente"
            className="w-[120px] h-[37px] text-corPrincipal font-bold font-sans"
          ></Butao>
        </div>
      </dialog>
    </div>
  );
};

export default ModalKey;
