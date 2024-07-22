'use client';

import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import SquareQuestion from './SquareQuestion';
import SquareInformations from './SquareInformations';
import Butao from '../buttons/button';
import { PesquisaDtoTemp } from '@/lib/pesquisa';
import InputRadio from '../InputCustom/InputRadio';
import { useForm } from 'react-hook-form';

function SurveyResponse({
  titulo,
  descricao,
  dataTermino,
  ehPublico,
  ehVotacao,
  URLimagem,
  perguntas,
}: PesquisaDtoTemp) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(perguntas[0]);
  useEffect(() => {
    if (!ehVotacao) {
      setCurrentData(perguntas[currentPage - 1]);
    }
  }, [currentPage, ehVotacao, perguntas]);

  const { register, handleSubmit } = useForm();
  const [radioValueSelected, setRadioValueSelected] = useState<string>('');

  return (
    <div className={'w-full h-full flex flex-col p-4 gap-5'}>
      <div className={'w-full flex flex-col items-center md:items-start'}>
        <SquareInformations
          title={ehVotacao ? 'VOTAÇÃO' : 'ENQUETE'}
          subtitle={titulo}
          date={dataTermino}
          acess={ehPublico ? 'Público' : 'Privado'}
          description={descricao}
          imageUrl={URLimagem ? URLimagem : 'https://picsum.photos/300/104'}
          buttonShareText="Compartilhar Pesquisa"
        />
      </div>
      <form
        className="w-full h-full flex flex-col gap-5"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <div className={'w-full space-y-5'}>
          <InputRadio
            {...register('opcao')}
            label="TESTE1"
            onClickBtn={() => setRadioValueSelected('TESTE1')}
            isChecked={radioValueSelected === 'TESTE1'}
            value={currentData.opcoes[0]}
          />
          <InputRadio
            {...register('opcao')}
            label="TESTE2"
            onClickBtn={() => setRadioValueSelected('TESTE2')}
            isChecked={radioValueSelected === 'TESTE2'}
            value={currentData.opcoes[1]}
          />
          <InputRadio
            {...register('opcao')}
            label="TESTE3"
            onClickBtn={() => setRadioValueSelected('TESTE3')}
            isChecked={radioValueSelected === 'TESTE3'}
            value={currentData.opcoes[2]}
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
        <div className={'w-full flex justify-center md:justify-end'}>
          <Butao
            texto="VOTAR"
            type="submit"
            variant="rounded"
          />
        </div>
      </form>
    </div>
  );
}

export default SurveyResponse;
