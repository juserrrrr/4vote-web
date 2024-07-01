'use client';
import { useState } from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { Metadata } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { authService } from '@/lib/auth';
import { setCookie } from '@/lib/utils';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

// retirei o export daqui
const metadata: Metadata = {
  title: 'Login',
  description: 'Página de Login',
};

interface LoginValues {
  email: string;
  password: string;
}

export default function Login() {
  const schema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<LoginValues>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const sendSignIn: SubmitHandler<LoginValues> = async (data: { email: string; password: string }) => {
    const { email, password } = data;
    const response = await authService.entrar(email, password);
    if (response instanceof Error) {
      setError('email', { message: 'Usuário ou senha inválidos' });
      setError('password', { message: 'Usuário ou senha inválidos' });
      setTimeout(() => {
        clearErrors('email');
        clearErrors('password');
      }, 3000);
      return;
    }
    setCookie('accessToken', response.accessToken);
    router.push('/inicio');
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">LOGIN</h2>
        <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
          <div className="w-full flex flex-col justify-between gap-5">
            <InputCustom
              label="Email"
              helperText={errors.email ? errors.email.message : 'Campo Obrigatório'}
              {...register('email')}
              error={errors.email ? true : false}
            />
            <InputCustom
              label="Senha"
              helperText={errors.password ? errors.password.message : 'Campo Obrigatório'}
              type="password"
              {...register('password')}
              error={errors.password ? true : false}
            />
          </div>
          <div className="w-full">
            <Butao
              onClick={handleSubmit(sendSignIn)}
              texto="Fazer Login"
              variant="rounded"
              className="w-full"
            />
          </div>
        </div>
        <div
          className={clsx('bg-orange-100 border-orange-500 text-orange-700', {
            hidden: { errors } ? false : true,
            block: { errors } ? true : false,
          })}
          role="alert"
        >
          <p className="font-bold">{'Usuário ou senha inválidos'}</p>
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
