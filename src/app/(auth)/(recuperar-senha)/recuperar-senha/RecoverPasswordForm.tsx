'use client';
import Butao from '@/components/buttons/button';
import InputCustom from '@/components/InputCustom/InputCustom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { onSubmitRecoverPassword } from '../../actionsAuth';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css';

interface RecoverPasswordValues {
  email: string;
}

const recoverSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
});

function RecoverPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RecoverPasswordValues>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(recoverSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: RecoverPasswordValues) => {
    const formData = new FormData();
    formData.append('email', data.email);
    const response = await onSubmitRecoverPassword(formData);
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
      <div className="h-full w-full flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col text-corPrincipal text-center px-10 gap-10">
          <h2 className="font-bold text-3xl">Esqueci minha senha</h2>
          <p className="text-xl">Informe seu e-mail cadastrado para enviarmos as instruções de redefinição de senha.</p>
        </div>
        <form
          className="w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col justify-between items-center flex-shrink-0 px-10 gap-10 ">
            <div className="w-full flex flex-col justify-between gap-5">
              <InputCustom
                label="Email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </div>
            <div className="w-full">
              <Butao
                texto="Enviar"
                type="submit"
                variant="rounded"
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

export default RecoverPasswordForm;
