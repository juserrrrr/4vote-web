'use client';

import React, { useState, useEffect } from 'react';
import Answer from '@/components/answers/answer';
import InfoAns from '@/components/infoVoteAns/infoAns';
import VoteCounter from '@/components/selectBox/VoteCounter';
import Pagination from '@/components/pagination/Pagination';

const allAnswers = [
  {
    imageUrl: '/imagens/4vote-principal.png',
    label: 'Opção certa',
    count: 50,
    progress: 45,
    isMostVoted: false,
  },
  {
    imageUrl: '/imagens/4vote-principal.png',
    label: 'Opção errada',
    count: 3,
    progress: 25,
    isMostVoted: true,
  },
  {
    imageUrl: '/imagens/4vote-principal.png',
    label: 'Opção mar ro menos',
    count: 30,
    progress: 35,
    isMostVoted: false,
  },
];

export default function Enquete() {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedAnswers, setPaginatedAnswers] = useState(allAnswers);
  const answersPerPage = 2; // Ajuste conforme necessário
  const question = 'Exemplo de pergunta?';

  useEffect(() => {
    const startIndex = (currentPage - 1) * answersPerPage;
    const endIndex = startIndex + answersPerPage;
    setPaginatedAnswers(allAnswers.slice(startIndex, endIndex));
  }, [currentPage]);

  return (
    <div className="mt-20 mx-4 sm:mx-10">
      <span className="text-corPrincipal font-bold text-3xl uppercase block text-left mb-4">Resultados da Enquete</span>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <InfoAns
          title="Enquete teste"
          description={'Testando a tela de resposta de enquete'}
          date={'17/06/2024'}
          hours={'12:00'}
          imageUrl={'/imagens/4vote-principal.png'}
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <span className="text-corPrincipal block font-bold text-xl uppercase mb-2">{question}</span>
        <div className="space-y-4">
          {paginatedAnswers.map((answer, index) => (
            <Answer
              key={index}
              imageUrl={answer.imageUrl}
              label={answer.label}
              count={answer.count}
              progress={answer.progress}
              isMostVoted={answer.isMostVoted}
            />
          ))}
        </div>
        <div className="mt-6 flex flex-col items-center">
          <VoteCounter votes={allAnswers.reduce((acc, answer) => acc + answer.count, 0)} />
          <div className="mt-4">
            <Pagination
              totalPages={Math.ceil(allAnswers.length / answersPerPage)}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
