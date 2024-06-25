'use client';
import { useState } from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { Metadata } from 'next';
import Link from 'next/link';
import { entrar, setCookie } from '@/lib/auth';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

// retirei o export daqui
const metadata: Metadata = {
  title: 'Login',
  description: 'Página de Login',
};

export default function Login() {
  const [email, setNewEmail] = useState('');
  const [senha, setNewSenha] = useState('');
  const [alerta, setNewAlerta] = useState('Usuário ou senha inválidos');
  const [showAlerta, setNewShowAlerta] = useState(false);
  const router = useRouter();

  const sendSignIn = async (email: string, senha: string) => {
    const token = await entrar(email, senha);

    if (token) {
      setCookie('accessToken', token);
      router.push('/inicio');
    } else {
      setNewShowAlerta(true);
      setTimeout(() => {
        setNewShowAlerta(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">LOGIN</h2>
        <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
          <div className="w-full flex flex-col justify-between gap-5">
            <InputCustom
              label="Email"
              helperText="Campo Obrigatório"
              onChange={(e) => setNewEmail(e.target.value)}
              error={true}
            />
            <InputCustom
              label="Senha"
              helperText="Campo Obrigatório"
              type="password"
              onChange={(e) => setNewSenha(e.target.value)}
              error={true}
            />
          </div>
          <div className="w-full">
            <Butao
              onClick={() => sendSignIn(email, senha)}
              texto="Fazer Login"
              variant="rounded"
              className="w-full"
            />
          </div>
        </div>
        <div
          className={clsx('bg-orange-100 border-orange-500 text-orange-700', {
            hidden: !showAlerta,
            block: showAlerta,
          })}
          role="alert"
        >
          <p className="font-bold">{alerta}</p>
        </div>

        <div className="flex flex-col justify-center text-gray-500 text-center font-open-sans font-bold text-lg underline">
          <Link
            href="../recuperar-senha"
            target=""
          >
            Esqueci a senha
          </Link>
          <Link
            href="../cadastro"
            target=""
          >
            Novo aqui? Fazer Cadastro
          </Link>
        </div>
      </div>
    </>
  );
}
