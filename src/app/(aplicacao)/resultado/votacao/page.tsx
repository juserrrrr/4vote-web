'use client';

import React, { useState } from 'react';
import Answer from '@/components/answers/answer';
import InfoAns from '@/components/infoVoteAns/infoAns';
import VoteCounter from '@/components/voteCounter/VoteCounter';
import Pagination from '@/components/pagination/Pagination';

export default function Votacao() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="mt-20 mx-4 sm:mx-10">
      <span className="text-corPrincipal font-bold text-3xl uppercase block text-left mb-4">Resultados da Votação</span>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <InfoAns
          title="Votação teste"
          description={'Testando a tela de resposta de votação'}
          date={'17/06/2024'}
          hours={'12:00'}
          imageUrl={'/imagens/4vote-principal.png'}
        />
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <span className="text-corPrincipal block font-bold text-xl uppercase mb-2">Pergunta exemplo:</span>
        <div className="space-y-4">
          <Answer
            imageUrl={'/imagens/4vote-principal.png'}
            label={'Opção certa'}
            count={50}
            progress={45}
            isMostVoted={false}
          />
          <Answer
            imageUrl={'/imagens/4vote-principal.png'}
            label={'Opção errada'}
            count={3}
            progress={25}
            isMostVoted={true}
          />
          <Answer
            imageUrl={'/imagens/4vote-principal.png'}
            label={'Opção mar ro menos'}
            count={30}
            progress={35}
            isMostVoted={false}
          />
        </div>
        <div className="mt-6 flex flex-col items-end">
          <VoteCounter votes={100} />
        </div>
      </div>
    </div>
  );
}
