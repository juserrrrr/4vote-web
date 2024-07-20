'use client';

import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import SquareQuestion from './SquareQuestion';
import SquareInformations from './SquareInformations';
import Butao from '../buttons/button';
import { PesquisaDtoTemp } from '@/lib/pesquisa';
import * as yup from 'yup';
import { FormProvider, useFieldArray, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import api, { headerAutorization } from '@/lib/api';
import axios from 'axios';

const optionVoteSchema = yup.object({
  votes: yup.array().of(
    yup
      .object({
        idOption: yup.number().required('Opção é obrigatória'),
      })
      .required('Opção é obrigatória'),
  ),
});

interface OptionVotes {
  votes: [{ idOption: number }];
}

function SurveyResponse({
  titulo,
  descricao,
  dataTermino,
  ehPublico,
  ehVotacao,
  URLimagem,
  perguntas,
}: PesquisaDtoTemp) {
  const title = ehVotacao ? 'VOTAÇÃO' : 'ENQUETE';
  const subtitle = titulo;
  const date = dataTermino;
  const acess = ehPublico ? 'Público' : 'Privado';
  const description = descricao;
  const imageUrl = 'https://picsum.photos/300/104';

  const background = 'flex flex-col w-full justify-center items-center';
  const container1 = 'w-[90%] p-5';
  const container2 = 'w-[90%] p-5';
  const container3 = 'w-full flex justify-end mt-4';

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(perguntas[0]);
  useEffect(() => {
    if (!ehVotacao) {
      setCurrentData(perguntas[currentPage - 1]);
    }
  }, [currentPage, ehVotacao, perguntas]);

  const formMethods = useForm<OptionVotes>({
    resolver: yupResolver(optionVoteSchema) as any,
  });

  const { handleSubmit } = formMethods;

  const onSubmit = async (data: OptionVotes) => {
    // Handle form submission here
    console.log(data);
    try {
      const payload = { voto: { opcoesVotadas: data.votes } };
      const response = await api.post('/opcaovotada', payload, headerAutorization);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        const codeError = error.response?.status;
        if (codeError === 401) {
          return new Error('Usuário não autorizado');
        }
        if (codeError === 500) {
          return new Error('Erro interno no servidor');
        }
        if (codeError === 400) {
          return new Error('Requisição inválida');
        }
      }
      return new Error('Serviço fora do ar');
    }
  };

  return (
    <div className={'flex flex-col justify-center items-center min-h-screen p-4'}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={background}>
            <div className={container1}>
              <SquareInformations
                title={title}
                subtitle={subtitle}
                date={date}
                acess={acess}
                description={description}
                imageUrl={imageUrl}
              />
            </div>
            <div className={container2}>
              <SquareQuestion
                texto={currentData.texto}
                opcoes={currentData.opcoes}
              />
              {!ehVotacao && (
                <div className="flex justify-center mt-4">
                  <Pagination
                    totalPages={perguntas.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              )}
            </div>
            <div className={container3}>
              <Butao
                texto="VOTAR"
                variant="rounded"
                type="submit"
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default SurveyResponse;
