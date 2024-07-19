'use client';

import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import SquareQuestion from './SquareQuestion';
import SquareInformations from './SquareInformations';
import Butao from '../buttons/button';
import { PesquisaDtoTemp } from '@/lib/pesquisa';
import * as yup from 'yup';
import { useFieldArray, useForm, useFormContext } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

interface OptionVote {
  option_index: number[];
}

const optionVoteSchema = yup.object({
  option_index: yup.array().of(yup.number()).required('Selecionar uma opção é obrigatório'),
});

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

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext<OptionVote>();
  const {
    fields: optionFields,
    append: optionAppend,
    remove: optionRemove,
  } = useFieldArray({
    control: control,
    name: 'option_index',
  });

  return (
    <div className={'flex flex-col justify-center items-center min-h-screen p-4'}>
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
          />
        </div>
      </div>
    </div>
  );
}

export default SurveyResponse;
