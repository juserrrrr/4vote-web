'use client';
import React from 'react';
import FilterButton from '@/components/buttonFilter/FilterButton';
import { Card } from '@/components/card/card';

type Variant = 'VOTAÇÃO' | 'ENQUETE';

const cards = [
  {
    title: 'Enquete 1',
    description: 'Descrição da enquete 1',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 2',
    description: 'Descrição da enquete 2',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 3',
    description: 'Descrição da enquete 3',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 4',
    description: 'Descrição da enquete 4',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 5',
    description: 'Descrição da enquete 5',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 6',
    description: 'Descrição da enquete 6',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 7',
    description: 'Descrição da enquete 7',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 8',
    description: 'Descrição da enquete 8',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 9',
    description: 'Descrição da enquete 9',
    variant: 'VOTAÇÃO' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
  {
    title: 'Enquete 10',
    description: 'Descrição da enquete 10',
    variant: 'ENQUETE' as Variant,
    hashtags: ['tag1', 'tag2'],
    imageUrl: 'https://picsum.photos/300/200',
  },
];

export default function HomePage() {
  return (
    <div className="main">
      <main>
        <div className="flex flex-col justify-center items-center px-16 py-6 gap-6 text-corPrincipal">
          <div className="flex flex-col w-full justify-start">
            <h1 className="text-4xl font-bold">Início</h1>
            <h2 className="text-2xl font-sans">Visualize aqui enquetes e votações públicas.</h2>
          </div>
          <div className="search-bar-text w-full flex flex-row items-center gap-4 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-corPrincipal focus:border-transparent bg-white text-corPrincipal">
            Encontre as pesquisas que você procura: vote e participe!
          </div>
          <div className="w-full flex flex-row items-center gap-8">
            <FilterButton variante="ordenar" />
            <FilterButton variante="filtrar" />
          </div>
          <div className="flex flex-row flex-wrap justify-start content-between gap-9 ">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                variant={card.variant}
                hashtags={card.hashtags}
                imageUrl={card.imageUrl}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
