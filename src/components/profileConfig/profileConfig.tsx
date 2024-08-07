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
import { ProfileContext } from '../../contexts/profileContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface UpdateProfile {
  nome: string;
  email: string;
  cpf?: string;
  image?: FileList;
}

function createSchemaProfile(defaultValues: UpdateProfile) {
  return yup.object({
    nome: yup
      .string()
      .required('Nome é obrigatório')
      .test('modified email', 'Necessário pelo menos um campo diferente', function (_, { parent }) {
        return parent.nome !== defaultValues.nome || parent.email !== defaultValues.email || parent.image.length > 0;
      }),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),

    image: yup.mixed(),
  });
}

export function ProfileConfig() {
  const { profile, updateProfile } = useContext(ProfileContext);
  let schemaProfile = useMemo(() => createSchemaProfile(profile), [profile]);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfile>({
    defaultValues: profile,
    resolver: yupResolver(schemaProfile),
  });

  const [image, setImage] = useState<string | null>(profile.URLimagem);

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
    if (data.image && data.image.length > 0) {
      formData.append('file', data.image[0]);
    }

    const response = await onSubimitActionProfile(formData);
    if (response.codeStaus === 200) {
      updateProfile({
        ...profile,
        nome: data.nome,
        email: data.email,
        URLimagem: response.URLimage ?? null,
      });
      return toast.success(response.message);
    } else {
      return toast.error(response.message);
    }
  }
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
      />
      <form
        onSubmit={handleSubmit(submitForm)}
        autoComplete="off"
      >
        <div className="h-52 mb-16 bg-corPrincipal relative flex flex-col justify-center items-center">
          <div className="w-40 h-40 rounded-full absolute top-28 flex justify-center items-center">
            <FileUploadCustom
              className="absolute rounded-full top-28 left-28 z-10"
              haveLabel={false}
              onChangeImage={onChangeFile}
              icon={<PencilIcon className="text-corPrincipal w-6" />}
              {...register('image')}
            />
            <Image
              src={
                image
                  ? image
                  : 'https://nydqbchcfgkevfdmbifx.supabase.co/storage/v1/object/public/Files4vote/Screenshot%202024-07-22%20212810.png'
              }
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
