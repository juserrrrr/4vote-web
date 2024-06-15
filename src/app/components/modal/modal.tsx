import React, { useId, useState } from 'react';
import ReactModal from 'react-modal';

interface status {
  isOpennow: boolean;
  closeModal: () => void;
  title: string;
  subtitle: string;
  instruction: string;
}

export default function Modal({ isOpennow, closeModal, title, subtitle, instruction }: status) {
  const id = useId();

  return (
    <ReactModal
      isOpen={isOpennow}
      onRequestClose={closeModal}
      className={
        'bg-corNeutro w-[750px] h-[310px] rounded-md border-corPrincipal border-2 text-center text-corPrincipal flex flex-col items-center justify-center font-sans relative '
      }
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      {' '}
      <div className="font-bold text-center">
        <h1 className={'mb-0  text-[32px] -mt-20'}>{title}</h1>
        <h2 className={'mb-8 text-[12px] w-full'}>{subtitle}</h2>
      </div>
      <div className="w-[394px]">
        <p className="text-left text-[14px] -mb-3 font-inter font-bold">{instruction}</p>
        <input
          id="id"
          className={
            'p-2 h-10 mt-3 rounded-md w-[394px]  border-2  border-solid border-blue-950 focus:outline-none focus:border-blue-900 bg-corPrincipal font-inter font-bold text-corNeutro text-[22px]'
          }
        ></input>
      </div>
      <div className="absolute bottom-4 right-10 flex space-x-4">
        <React.Fragment>
          <button
            onClick={closeModal}
            className={'text-corErro text-[15px] font-bold'}
          >
            Sair
          </button>
          <button
            onClick={closeModal}
            className={
              'text-corPrincipal border-2 border-corPrincipal rounded-[7px] text-[15px] font-bold p-1 flex-row justify-center '
            }
          >
            Confirmar
          </button>
        </React.Fragment>
      </div>
    </ReactModal>
  );
}
