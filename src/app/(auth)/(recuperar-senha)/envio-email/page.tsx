import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Envio de Email',
  description: 'Página de Envio de Email para Recuperar Senha',
};

export default function EnvioEmail() {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col justify-center items-center gap-5 px-10">
          <CheckBadgeIcon className="w-1/2 h-1/2 text-corPrincipal" />
          <h2 className="font-bold text-center text-corPrincipal text-3xl">
            Enviamos um link para seu e-mail cadastrado
          </h2>
          <p className="text-corPrincipal text-xl">Cheque sua caixa de entrada. :)</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 px-10">
          <p className="text-center">
            Caso não tenha recebido a mensagem, verifique se digitou o endereço de e-mail correto ou verifique sua caixa
            de spam
          </p>
          <div className="underline text-corSecundaria">
            <Link href="">Reenviar email</Link>
          </div>
        </div>
      </div>
    </>
  );
}
