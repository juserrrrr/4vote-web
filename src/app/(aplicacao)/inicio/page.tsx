'use client';
import React from 'react';
import FilterButton from '@/components/buttonFilter/FilterButton';
import { Card } from '@/components/card/card';
import ModalFilters from '@/components/modalsFilters/modal';

type Variant = 'VOTAÇÃO' | 'ENQUETE';

const cards = [
  {
    title: 'Enquete 1',
    description: 'Descrição da enquete 1',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 2',
    description: 'Descrição da enquete 2',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 3',
    description: 'Descrição da enquete 3',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 4',
    description: 'Descrição da enquete 4',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 5',
    description: 'Descrição da enquete 5',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 6',
    description: 'Descrição da enquete 6',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 7',
    description: 'Descrição da enquete 7',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 8',
    description: 'Descrição da enquete 8',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 9',
    description: 'Descrição da enquete 9',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
  {
    title: 'Enquete 10',
    description: 'Descrição da enquete 10',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/400/300',
  },
];

export default function HomePage() {
  const [isOpenOrdenar, setIsOpenOrdenar] = React.useState(false);
  const [isOpenFiltrar, setIsOpenFiltrar] = React.useState(false);

  return (
    <div>
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
      <div className="flex flex-col justify-center items-center px-16 py-6 gap-6 text-corPrincipal">
        <div className="flex flex-col w-full justify-start">
          <h1 className="text-4xl font-bold">Início</h1>
          <h2 className="text-2xl font-sans">Visualize aqui enquetes e votações públicas.</h2>
        </div>
        <div className="search-bar-text w-full flex flex-row items-center gap-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-corPrincipal focus:border-transparent bg-white text-corPrincipal">
          Encontre as pesquisas que você procura: vote e participe!
        </div>
        <div className="w-full flex flex-row items-center gap-8">
          <FilterButton
            variante="ordenar"
            onClick={() => {
              setIsOpenOrdenar(true);
            }}
          />
          <FilterButton
            onClick={() => {
              setIsOpenFiltrar(true);
            }}
            variante="filtrar"
          />
        </div>
        <div className="w-full flex flex-row flex-wrap justify-start gap-9 ">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-grow max-w-80"
            >
              <Card
                title={card.title}
                description={card.description}
                variant={card.variant}
                hashtags={card.hashtags}
                imageUrl={card.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
