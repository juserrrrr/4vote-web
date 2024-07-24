'use client';
import Butao from '@/components/buttons/button';
import InputCustom from '@/components/InputCustom/InputCustom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { useRouter } from 'next/navigation';

interface ParticipateFormProps {
  onSubmitAction: (values: FormValues) => void;
  type: 'participate' | 'validate';
}

export interface FormValues {
  code: string;
}

const defaultSchema = yup.object().shape({
  code: yup.string().required('Campo obrigatório'),
});

function ParticipateForm({ onSubmitAction, type }: ParticipateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      code: '',
    },
    resolver: yupResolver(defaultSchema),
  });

  return (
    <>
      <form
        className="w-full sm:w-96 space-y-3"
        onSubmit={handleSubmit(onSubmitAction)}
      >
        <InputCustom
          label="Código"
          {...register('code')}
          error={!!errors.code}
          helperText={errors.code?.message}
        />
        <Butao
          className="w-full h-12 "
          texto={type === 'validate' ? 'VALIDAR' : 'PARTICIPAR'}
          type="submit"
          variant="outlined"
          disabled={isSubmitting}
          isLoading={isSubmitting}
        />
      </form>
    </>
  );
}

export default ParticipateForm;
