import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Página de Login',
};

export default function Login() {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">LOGIN</h2>
        <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
          <div className="w-full flex flex-col justify-between gap-5">
            <InputCustom
              label="Email"
              helperText="Campo Obrigatório"
              error={true}
            />
            <InputCustom
              label="Senha"
              helperText="Campo Obrigatório"
              error={true}
            />
          </div>
          <div className="w-full">
            <Butao
              texto="Fazer Login"
              variant="rounded"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-gray-500 text-center font-open-sans font-bold text-lg underline">
          <Link
            href="../recuperar-senha"
            target="_blank"
          >
            Esqueci a senha
          </Link>
          <Link
            href="../cadastro"
            target="_blank"
          >
            Novo aqui? Fazer Cadastro
          </Link>
        </div>
      </div>
    </>
  );
}
