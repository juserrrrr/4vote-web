'use client';

import { useForm } from 'react-hook-form';
import Butao from '../buttons/button';
import InputCustom from '../InputCustom/InputCustom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext, useMemo, useState } from 'react';
import FileUploadCustom from '../InputCustom/FileUploadCustom';
import { PencilIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { onSubimitActionProfile } from '../../app/(aplicacao)/perfil/actionProfile';
import { revalidatePath } from 'next/cache';
import { ProfileContext } from '../../contexts/profileContext';
interface UpdateProfile {
  nome: string;
  email: string;
  cpf?: string;
  URLPerfil?: string | null;
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
  const { profile, updateProfile } = useContext(ProfileContext);
  let schemaProfile = useMemo(() => createSchemaProfile(profile), [profile]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<UpdateProfile>({
    defaultValues: profile,
    resolver: yupResolver(schemaProfile),
  });

  const [image, setImage] = useState<string | null>(null);

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  async function submitForm(data: UpdateProfile) {
    const formData = new FormData();
    if (data.nome !== profile.nome) {
      formData.append('nome', data.nome);
    }
    if (data.email !== profile.email) {
      formData.append('email', data.email);
    }
    const response = await onSubimitActionProfile(formData);
    if (response.codeStaus === 200) {
      updateProfile({
        ...profile,
        nome: data.nome,
        email: data.email,
      });
      alert(response.message);
    } else {
      alert(response.message);
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
      >
        <div className="h-52 mb-16 bg-corPrincipal relative flex flex-col justify-center items-center">
          <div className="w-40 h-40 rounded-full absolute top-28 flex justify-center items-center">
            <FileUploadCustom
              className="absolute rounded-full top-28 left-28 z-10"
              haveLabel={false}
              onChange={onChangeFile}
              icon={<PencilIcon className="text-corPrincipal w-6" />}
            />
            <Image
              src={image || 'https://i.imgur.com/MtvqmTU.png'}
              alt="Profile"
              fill
              className="object-cover rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-grow z-0 justify-center py-6 px-4">
          <div className="w-80 flex flex-col gap-6">
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
              value={profile.cpf}
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
          </div>
        </div>
      </form>
    </>
  );
}
