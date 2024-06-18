import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import Link from 'next/link';

export default function Login() {
  return (
    <>
      <h2 className="text-corPrincipal text-center font-bold text-5xl">LOGIN</h2>
      <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
        <div className="w-full flex flex-col justify-between gap-5">
          <InputCustom label="Email" />
          <InputCustom label="Senha" />
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
        <Link href="../auth/recuperar-senha">Esqueci a senha</Link>
        <Link href="../auth/cadastro">Novo aqui? Fazer Cadastro</Link>
      </div>
    </>
  );
}
