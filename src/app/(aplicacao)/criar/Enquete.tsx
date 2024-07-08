'use client';
import Butao from '@/components/buttons/button';
import SquareInfos from '@/components/elementsEnqVot/SquareInfos';
import SquareOptions from '@/components/elementsEnqVot/SquareOptions';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

export interface EnqueteDto {
  titulo: string;
  dataTermino: string;
  ehPublico: number;
  descricao: string;
  perguntas: {
    pergunta: string;
    opcoes: {
      texto: string;
    }[];
  }[];
  tags?: string;
}

const defaultValues: EnqueteDto = {
  titulo: '',
  dataTermino: '',
  ehPublico: 1,
  descricao: '',
  perguntas: [
    {
      pergunta: '',
      opcoes: [{ texto: '' }, { texto: '' }],
    },
  ],
  tags: '',
};

function CriarEnquete() {
  const enqueteSchema = yup.object({
    titulo: yup.string().required('Nome é obrigatório'),
    dataTermino: yup.string().required('Data é obrigatória'),
    ehPublico: yup.number().required('Tipo é obrigatório'),
    descricao: yup.string().required('Descrição é obrigatória'),
    perguntas: yup
      .array()
      .of(
        yup.object({
          pergunta: yup.string().required('Pergunta é obrigatória'),
          opcoes: yup
            .array()
            .of(
              yup.object({
                texto: yup.string().required('Opção é obrigatória'),
              }),
            )
            .required('Opções são obrigatórias')
            .min(2, 'Mínimo de 2 opções'),
        }),
      )
      .required('Perguntas são obrigatórias'),
    tags: yup.string(),
  });
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EnqueteDto>({
    resolver: yupResolver(enqueteSchema),
    defaultValues: defaultValues,
  });

  return (
    <div className="mx-20 pb-4">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <SquareInfos
          register={register}
          title="CRIAR ENQUETE"
          errors={errors}
        />
        <SquareOptions
          control={control}
          type="enquete"
          register={register}
          errors={errors}
        />
        <div className="w-full flex justify-end items-center">
          <Butao
            type="submit"
            texto="CRIAR ENQUETE"
            variant="default"
            onClick={handleSubmit((data) => console.log(data))}
          />
        </div>
      </form>
    </div>
  );
}

export default CriarEnquete;
