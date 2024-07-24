'use client';
import React, { useState, useEffect } from 'react';
import Answer from '@/components/answers/answer';
import InfoAns from '@/components/infoVoteAns/infoAns';
import VoteCounter from '@/components/voteCounter/VoteCounter';
import Pagination from '@/components/pagination/Pagination';
import { PesquisaDtoResultado } from '@/lib/pesquisa';
import Butao from '../buttons/button';
import { onSubmitArchived, onSubmitAudit } from './resultAction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SurveyResult({
  titulo,
  descricao,
  dataTermino,
  ehPublico,
  ehVotacao,
  URLimagem,
  codigo,
  perguntas,
}: PesquisaDtoResultado) {
  const formattedDate = new Date(dataTermino);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState(perguntas[0]);
  const [isLoadingAudit, setIsLoadingAudit] = useState(false);
  const [isLoadingArchived, setIsLoadingArchived] = useState(false);
  useEffect(() => {
    if (!ehVotacao) {
      setCurrentData(perguntas[currentPage - 1]);
    }
  }, [currentPage, ehVotacao, perguntas]);

  const onClickAction = async () => {
    setIsLoadingAudit(true);
    const formData = new FormData();
    formData.append('codigo', codigo);
    const response = await onSubmitAudit(formData);
    setIsLoadingAudit(false);
    if (response.error) {
      return toast.error(response.error.message);
    }
    if (response.message === 'Pesquisa sem fraudes') {
      return toast.success('Pesquisa sem fraudes');
    }
    return toast.error('Pesquisa fraudada!');
  };
  const onClickActionArchived = async () => {
    setIsLoadingArchived(true);
    const formData = new FormData();
    formData.append('codigo', codigo);
    const response = await onSubmitArchived(formData);
    setIsLoadingArchived(false);
    if (response.error) {
      return toast.error(response.error.message);
    } else {
      return toast.success('Pesquisa arquivada');
    }
  };

  return (
    <div className="p-2 md:p-5 flex flex-col gap-4">
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
      />
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 md:gap-5">
        <span className="text-corPrincipal font-bold text-3xl uppercase block text-left">Resultados</span>
        <Butao
          texto="AUDITORIA"
          variant="outlined"
          onClick={onClickAction}
          disabled={isLoadingAudit}
          isLoading={isLoadingAudit}
          className="h-12 bg-corErro border-none"
        />
        <Butao
          texto="ARQUIVAR"
          variant="outlined"
          onClick={onClickActionArchived}
          disabled={isLoadingArchived}
          isLoading={isLoadingArchived}
          className="h-12 bg-corSecundaria border-none"
        />
      </div>
      <div className="bg-white h-auto md:h-52 shadow-lg rounded-lg p-4 flex flex-col md:flex-row justify-center items-center md:justify-between">
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
      <div className="flex flex-col gap-5 bg-white shadow-lg rounded-lg p-2 md:p-5">
        <span className="text-corPrincipal block font-bold text-xl uppercase">{currentData.texto}</span>
        <div className="flex gap-5 flex-col space-y-4">
          {currentData.opcoes.map((opcao, index) => (
            <Answer
              key={index}
              label={opcao.textoOpcao}
              imageUrl={opcao.URLimagem ?? ''}
              count={opcao.quantVotos}
              progress={opcao.porcentagem}
              isMostVoted={opcao.opcaoMaisVotada}
            />
          ))}
        </div>
        <div className="flex flex-col items-center">
          <VoteCounter votes={currentData.total} />
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
