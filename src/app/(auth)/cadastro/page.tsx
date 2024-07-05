'use client';
import { useState } from 'react';
import InputCustom from '@/components/InputCustom/InputCustom';
import Butao from '@/components/buttons/button';
import { Metadata } from 'next';
import clsx from 'clsx';
import api from '@/lib/api';
import { authService } from '@/lib/auth';
import { triggerAsyncId } from 'async_hooks';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// retirei o export daqui
const metadata: Metadata = {
  title: 'Cadastro',
  description: 'Página de Cadastro',
};

interface RegisterValues {
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}

export default function Cadastro() {
  const schema = yup.object().shape({
    name: yup.string().max(255).required('Campo Obrigatório'),
    email: yup.string().email('Email inválido').required('Campo Obrigatório'),
    cpf: yup.string().length(11, 'CPF inválido ').required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Senhas não conferem')
      .required('Campo Obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<RegisterValues>({
    resolver: yupResolver(schema),
  });

  const sendSignUp: SubmitHandler<RegisterValues> = async (data: {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
  }) => {
    const { name, email, cpf, password, confirmPassword } = data;
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">CADASTRO</h2>
        <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-1">
          <div className="w-full flex flex-col justify-between gap-3">
            <InputCustom
              label="Nome"
              {...register('name')}
            />
            <div className="text-orange-700">{errors.name?.message}</div>
            <InputCustom
              label="Email"
              {...register('email')}
            />
            <div className="text-orange-700">{errors.email?.message}</div>
            <InputCustom
              label="CPF"
              {...register('cpf')}
            />
            <div className="text-orange-700">{errors.cpf?.message}</div>
            <InputCustom
              label="Senha"
              type="password"
              {...register('password')}
            />
            <div className="text-orange-700">{errors.password?.message}</div>
            <InputCustom
              label="Confirmar Senha"
              type="password"
              {...register('confirmPassword')}
            />
            <div className="text-orange-700">{errors.confirmPassword?.message}</div>
          </div>
          <div className="w-full py-5">
            <Butao
              onClick={handleSubmit(sendSignUp)}
              texto="Confirmar Cadastro"
              variant="rounded"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
