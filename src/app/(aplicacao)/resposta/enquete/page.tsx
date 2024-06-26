'use client';

import React, { useState, useEffect } from 'react';
import SquareInformations from '@/components/elementsEnqVot/SquareInformations';
import SquareQuestion from '@/components/elementsEnqVot/SquareQuestion';
import Butao from '@/components/buttons/button';
import Pagination from '@/components/pagination/Pagination';

const questions = [
  'Quem você escolhe para ser o novo Diretório Acadêmico do curso?',
  'Qual a sua opinião sobre a gestão atual do Diretório Acadêmico?',
  'Quais melhorias você gostaria de ver no próximo mandato?',
];

const Resposta: React.FC = () => {
  const title = 'VOTAÇÃO';
  const subtitle = 'Eleição do Diretório Acadêmico de Ecomp';
  const date = new Date();
  const acess = 'Privado';
  const description =
    'Essa é uma eleição aprovada pelo conselho para eleger os mais novos membros do DA do curso de ECOMP.';
  const imageUrl = 'https://picsum.photos/300/104';
  const backgraund = 'flex flex-col w-[1438px] h-[972px] justify-center items-center';
  const container1 = 'w-[1260px] p-5';
  const container2 = 'w-[1260px] p-5';
  const container3 = 'w-[320px] h-[5px] absolute right-0';

  const [currentPage, setCurrentPage] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  useEffect(() => {
    setCurrentQuestion(questions[currentPage - 1]);
  }, [currentPage]);

  return (
    <div className={'flex justify-center items-center min-h-screen'}>
      <div className={backgraund}>
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
          <SquareQuestion question={currentQuestion} />
          <div className="flex justify-center mt-4">
            <Pagination
              totalPages={questions.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <div className={container3}>
            <Butao
              texto="VOLTAR"
              variant="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resposta;
