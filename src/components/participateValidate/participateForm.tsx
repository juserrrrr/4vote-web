'use client';
import Butao from '@/components/buttons/button';
import InputCustom from '@/components/InputCustom/InputCustom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { onSubmitParticipate, onSubmitValidate } from './participateValidateActions';
import { useRouter } from 'next/navigation';
import { ValidationResult } from '../validation/validationResult';

interface ParticipateFormProps {
  type: 'participate' | 'validate';
}

interface FormValues {
  code: string;
}

const defaultSchema = yup.object().shape({
  code: yup.string().required('Campo obrigatório'),
});

function ParticipateForm({ type }: ParticipateFormProps) {
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

  const router = useRouter();

  const onSubimitAction = async (data: FormValues) => {
    const formData = new FormData();
    formData.append('code', data.code);

    if (type === 'validate') {
      // const response = await onSubmitValidate(formData);
      if (true) {
        return <ValidationResult isCorrect />;
      }
      return <ValidationResult isCorrect={false} />;
    } else {
      // const response = await onSubmitParticipate(formData);
      // if (!response.error) {
      //   return router.push(`/responder/${data.code}`);
      // }
    }
  };
  return (
    <>
      <form
        className="w-full sm:w-96 space-y-3"
        onSubmit={handleSubmit(onSubimitAction)}
      >
        <InputCustom
          label="Código"
          {...register('code')}
          error={!!errors.code}
          helperText={errors.code?.message}
        />
        <Butao
          className="w-full h-12 "
          texto="Participar"
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
