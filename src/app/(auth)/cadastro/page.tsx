import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cadastro',
  description: 'Página de Cadastro',
};

export default function Cadastro() {
  return (
    <>
      <h2 className="text-corPrincipal text-center font-bold text-5xl">CADASTRO</h2>
      <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
        <div className="w-full flex flex-col justify-between gap-5">
          <InputCustom label="Nome" />
          <InputCustom label="Email" />
          <InputCustom label="CPF" />
          <InputCustom label="Senha" />
          <InputCustom label="Confirmar Senha" />
        </div>
        <div className="w-full">
          <Butao
            texto="Confirmar Cadastro"
            variant="rounded"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
