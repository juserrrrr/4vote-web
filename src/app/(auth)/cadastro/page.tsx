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
    name: yup.string().max(255, 'O nome deve ser menor').required('Campo Obrigatório'),
    email: yup.string().email('Email inválido').required('Campo Obrigatório'),
    cpf: yup.string().required('Campo Obrigatório').length(11, 'CPF inválido'),
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
  }) => {
    const { name, email, cpf, password } = data;
    const response = await authService.cadastrar(name, email, cpf, password);
  };

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">CADASTRO</h2>
        <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-1">
          <div className="w-full flex flex-col justify-between gap-3">
            <InputCustom
              label="Nome"
              helperText={errors.name ? errors.name.message : 'Campo Obrigatório'}
              {...register('name')}
              error={errors.name ? true : false}
            />
            <InputCustom
              label="Email"
              helperText={errors.email ? errors.email.message : 'Campo Obrigatório'}
              {...register('email')}
              error={errors.email ? true : false}
            />
            <InputCustom
              label="CPF"
              helperText={errors.cpf ? errors.cpf.message : 'Campo Obrigatório'}
              {...register('cpf')}
              error={errors.cpf ? true : false}
            />
            <InputCustom
              label="Senha"
              helperText={errors.password ? errors.password.message : 'Campo Obrigatório'}
              type="password"
              {...register('password')}
              error={errors.password ? true : false}
            />
            <InputCustom
              label="Confirmar Senha"
              helperText={errors.confirmPassword ? errors.confirmPassword.message : 'Campo Obrigatório'}
              type="password"
              {...register('confirmPassword')}
              error={errors.confirmPassword ? true : false}
            />
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
