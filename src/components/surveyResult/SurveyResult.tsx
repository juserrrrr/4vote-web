'use client';

import React, { useState, useEffect } from 'react';
import Answer from '@/components/answers/answer';
import InfoAns from '@/components/infoVoteAns/infoAns';
import VoteCounter from '@/components/voteCounter/VoteCounter';
import Pagination from '@/components/pagination/Pagination';
import { PesquisaDtoTemp } from '@/lib/pesquisa';

function SurveyResult({ titulo, descricao, dataTermino, ehPublico, ehVotacao, URLimagem, perguntas }: PesquisaDtoTemp) {
  const formattedDate = new Date(dataTermino);
  const totalVotos = 80;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(perguntas[0]);
  useEffect(() => {
    if (!ehVotacao) {
      setCurrentData(perguntas[currentPage - 1]);
    }
  }, [currentPage, ehVotacao, perguntas]);

  return (
    <div className="mt-20 mx-4 sm:mx-10">
      <span className="text-corPrincipal font-bold text-3xl uppercase block text-left mb-4">Resultados</span>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <InfoAns
          title={titulo}
          description={descricao}
          date={formattedDate?.toLocaleDateString('pt-BR')}
          hours={formattedDate.toLocaleTimeString('pt-br', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false, // Formato de 24 horas
          })}
          imageUrl={'/imagens/4vote-principal.png'}
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <span className="text-corPrincipal block font-bold text-xl uppercase mb-2">{currentData.texto}</span>
        <div className="space-y-4">
          {currentData.opcoes.map((opcao, index) => (
            <Answer
              key={index}
              label={opcao}
              count={12}
              progress={30}
              isMostVoted={true}
            />
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center">
          <VoteCounter votes={totalVotos} />
          {!ehVotacao && (
            <div className="mt-4">
              <Pagination
                totalPages={perguntas.length}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SurveyResult;
