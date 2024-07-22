'use client';
import Butao from '@/components/buttons/button';
import InputCustom from '@/components/InputCustom/InputCustom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { onSubmitRegister } from '../actionsAuth';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import 'react-toastify/ReactToastify.min.css';

interface RegisterValues {
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmPassword: string;
}

const registerScheme = yup.object().shape({
  name: yup.string().max(255, 'O nome deve ser menor').required('Campo Obrigatório'),
  email: yup.string().email('Email inválido').required('Campo Obrigatório'),
  cpf: yup.string().required('Campo Obrigatório').length(11, 'CPF inválido'),
  password: yup.string().required('Campo Obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Senhas não conferem')
    .required('Campo Obrigatório'),
});

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterValues>({
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(registerScheme),
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterValues) => {
    const formData = new FormData();
    formData.append('nome', data.name);
    formData.append('email', data.email);
    formData.append('cpf', data.cpf);
    formData.append('senha', data.password);
    const response = await onSubmitRegister(formData);
    if (response.error) {
      return toast.error(response.error.message);
    }
    return router.push('/envio-email');
  };
  return (
    <>
      <ToastContainer
        autoClose={5000}
        position="bottom-right"
      />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">CADASTRO</h2>
        <form
          className="w-full py-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col justify-between items-center px-10 gap-3">
            <div className="w-full flex flex-col justify-between gap-3">
              <InputCustom
                label="Nome"
                {...register('name')}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <InputCustom
                label="Email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <InputCustom
                label="CPF"
                {...register('cpf')}
                error={!!errors.cpf}
                helperText={errors.cpf?.message}
              />
              <InputCustom
                label="Senha"
                type="password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <InputCustom
                label="Confirmar Senha"
                type="password"
                {...register('confirmPassword')}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
              />
            </div>
            <div className="w-full">
              <Butao
                texto="Confirmar Cadastro"
                variant="rounded"
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
