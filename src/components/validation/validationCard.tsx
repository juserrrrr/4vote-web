import React from 'react';

export const ValidationCard: React.FC<{}> = () => (
  <div className="w-[750px] h-[310px] px-2.5 pt-7 pb-3.5 bg-white rounded-[7px] flex-col justify-start items-center gap-[38px] inline-flex">
    <div className="flex-col justify-start items-center flex">
      <div className="w-[410px] h-11 text-sky-900 text-[32px] font-bold font-['Open Sans']">VALIDAÇÃO DO SEU VOTO</div>
      <div className="text-sky-900 text-xs font-extrabold font-['Open Sans']">
        (A chave de verificação foi encaminhado para o e-mail cadastrado)
      </div>
    </div>
    <div className="flex-col justify-start items-start gap-[5px] flex">
      <div className="text-sky-900 text-sm font-bold font-['Inter']">Insira a chave no campo abaixo:</div>
      <div className="w-[394px] px-7 py-3.5 bg-sky-900 rounded-[7px] justify-start items-center gap-2.5 inline-flex">
        <div className="text-white text-[22px] font-bold font-['Inter']">a3b6f0e8d1c7d2b0a1e9f7c3b8</div>
      </div>
    </div>
    <div className="self-stretch grow shrink basis-0 justify-end items-end gap-2.5 inline-flex">
      <div className="grow shrink basis-0 h-[37px] pr-5 justify-end items-center gap-[17px] flex">
        <div className="text-red-500 text-[15px] font-bold font-['Open Sans']">SAIR</div>
        <div className="w-[120px] h-[37px] px-[34px] rounded-[7px] border-2 border-sky-900 justify-center items-center flex">
          <div className="text-sky-900 text-[15px] font-bold font-['Open Sans']">CONFIRMAR</div>
        </div>
      </div>
    </div>
  </div>
);
