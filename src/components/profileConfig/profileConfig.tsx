'use client';

import { useForm } from 'react-hook-form';
import Butao from '../buttons/button';
import InputCustom from '../InputCustom/InputCustom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { onSubimitActionProfile } from '../../app/(aplicacao)/perfil/page';
import { useMemo, useState } from 'react';
interface UpdateProfile {
  nome: string;
  email: string;
  cpf?: string;
}

interface ProfileConfigProps {
  initialdefaultValues: UpdateProfile;
}

function createSchemaProfile(defaultValues: UpdateProfile) {
  return yup.object({
    nome: yup
      .string()
      .required('Nome é obrigatório')
      .test('modified email', 'Necessário pelo menos um campo diferente', function (_, { parent }) {
        return parent.nome !== defaultValues.nome || parent.email !== defaultValues.email;
      }),
    email: yup
      .string()
      .email('Email inválido')
      .required('Email é obrigatório')
      .test('modified email', 'Necessário pelo menos um campo diferente', function (_, { parent }) {
        return parent.nome !== defaultValues.nome || parent.email !== defaultValues.email;
      }),
  });
}

export function ProfileConfig({ initialdefaultValues }: ProfileConfigProps) {
  const [defaultValues, setDefaultValues] = useState<UpdateProfile>(initialdefaultValues);
  let schemaProfile = useMemo(() => createSchemaProfile(defaultValues), [defaultValues]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UpdateProfile>({
    defaultValues,
    resolver: yupResolver(schemaProfile),
  });

  async function submitForm(data: UpdateProfile) {
    const formData = new FormData();
    if (data.nome !== defaultValues.nome) {
      formData.append('nome', data.nome);
    }
    if (data.email !== defaultValues.email) {
      formData.append('email', data.email);
    }
    const response = await onSubimitActionProfile(formData);
    if (response.codeStaus === 200) {
      setDefaultValues(data);
      reset(data);
      alert(response.message);
    } else {
      alert(response.message);
    }
  }
  return (
    <div className="w-80">
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
      >
        <InputCustom
          {...register('nome')}
          label="Nome"
          error={!!errors.nome}
          helperText={errors.nome?.message}
        />
        <InputCustom
          {...register('email')}
          label="Email"
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <InputCustom
          value={defaultValues.cpf}
          disabled
          label="CPF"
        />
        <Butao
          className="w-full h-12"
          type="submit"
          variant="default"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          texto="Salvar alterações"
        />
      </form>
    </div>
  );
}
