'use client';

import { useEffect, useState } from 'react';
import Pagination from '../pagination/Pagination';
import SquareQuestion from './SquareQuestion';
import SquareInformations from './SquareInformations';
import Butao from '../buttons/button';
import { PesquisaDtoTemp } from '@/lib/pesquisa';

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

  return (
    <div className={'flex flex-col justify-center items-center min-h-screen p-4'}>
      <div className={'flex flex-col w-full justify-center items-center'}>
        <div className={'w-[90%] p-5'}>
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
        <div className={'w-[90%] p-5'}>
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
        <div className={'w-full flex justify-end mt-4'}>
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
