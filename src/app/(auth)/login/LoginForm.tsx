'use client';
import Butao from '@/components/buttons/button';
import InputCustom from '@/components/InputCustom/InputCustom';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { onSubmitLogin } from '../actionsAuth';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

const loginSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

interface LoginValues {
  email: string;
  password: string;
}

function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (data: LoginValues) => {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('senha', data.password);
    const response = await onSubmitLogin(formData);
    if (response.error) {
      return toast.error(response.error.message);
    }
    return router.push('/inicio');
  };
  return (
    <>
      <ToastContainer
        autoClose={5000}
        position="bottom-right"
      />
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <h2 className="text-corPrincipal text-center font-bold text-5xl">LOGIN</h2>
        <form
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10">
            <div className="w-full flex flex-col justify-between gap-5">
              <InputCustom
                label="Email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <InputCustom
                label="Senha"
                type="password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            </div>
            <div className="w-full">
              <Butao
                texto="Fazer Login"
                type="submit"
                variant="rounded"
                className="w-full"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col justify-center text-gray-500 text-center font-open-sans font-bold text-lg underline">
          <Link
            href="../recuperar-senha"
            type="button"
            target=""
          >
            Esqueci a senha
          </Link>
          <Link
            href="../cadastro"
            type="button"
            target=""
          >
            Novo aqui? Fazer Cadastro
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
