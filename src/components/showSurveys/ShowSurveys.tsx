'use client';
import { useState } from 'react';
import ModalFilters from '../modalsFilters/modal';
import FilterButton from '../buttonFilter/FilterButton';
import { Card } from '../card/card';
import { findSurveyFilter } from '../../lib/pesquisa';

interface ShowSurveysProps {
  values: findSurveyFilter[];
  isHome?: boolean;
}

function ShowSurveys({ values, isHome = false }: ShowSurveysProps) {
  const [isOpenOrdenar, setIsOpenOrdenar] = useState<boolean>(false);
  const [isOpenFiltrar, setIsOpenFiltrar] = useState<boolean>(false);
  return (
    <>
      <ModalFilters
        variante="ordenar"
        isOpen={isOpenOrdenar}
        onClose={() => setIsOpenOrdenar(false)}
      />
      <ModalFilters
        variante="filtrar"
        isOpen={isOpenFiltrar}
        onClose={() => setIsOpenFiltrar(false)}
      />
      <div className="flex flex-col justify-center items-center px-4 md:px-12 py-6 gap-4 text-corPrincipal">
        <div className="w-full px-3 flex gap-4 flex-col">
          <div className="flex flex-col w-full justify-start">
            <h1 className="text-4xl font-bold">{isHome ? 'Início' : 'Histórico'}</h1>
            <h2 className="text-2xl font-sans">Visualize aqui enquetes e votações públicas.</h2>
          </div>
          <div className="search-bar-text w-full flex flex-row items-center px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-corPrincipal focus:border-transparent bg-white text-corPrincipal">
            {isHome
              ? 'Encontre as pesquisas que você procura: vote e participe!'
              : 'Visualize as enq./vot. que você criou ou participa, tanto públicas quanto privadas.'}
          </div>
          <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <FilterButton
              variante="ordenar"
              onClick={() => {
                setIsOpenOrdenar(true);
              }}
            />
            {!isHome && (
              <FilterButton
                onClick={() => {
                  setIsOpenFiltrar(true);
                }}
                variante="filtrar"
              />
            )}
          </div>
        </div>
        <div className="w-full flex flex-row flex-wrap md:justify-start ">
          {values.map((card, index) => (
            <div
              key={index}
              className="flex-grow w-72 p-3 min-w-72 relative overflow-hidden"
            >
              <Card
                code={card.codigo}
                title={card.titulo}
                description={card.descricao}
                variant={card.ehVotacao ? 'VOTAÇÃO' : 'ENQUETE'}
                hashtags={card.tags}
                imageUrl={card.URLimagem}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowSurveys;
