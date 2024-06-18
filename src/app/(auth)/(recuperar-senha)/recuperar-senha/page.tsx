import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recuperar Senha',
  description: 'Página de Recuperação de Senha',
};

export default function RecuperarSenha() {
  return (
    <>
      <div className="text-corPrincipal text-center">
        <h2 className="font-bold text-2xl">Esqueci minha senha</h2>
        <p className="text-xl">Informe seu e-mail cadastrado para enviarmos as instruções de redefinição de senha.</p>
      </div>

      <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
        <div className="w-full flex flex-col justify-between gap-5">
          <InputCustom label="Email" />
        </div>
        <div className="w-full">
          <Butao
            texto="Enviar"
            variant="rounded"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}
