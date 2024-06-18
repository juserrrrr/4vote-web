'use client';
import React, { useState } from 'react';
import SearchBar from '@/components/search/Searchbar';
import FilterButton from '@/components/buttonFilter/FilterButton';

function CardFake({ key }: { key: string }) {
  return (
    <div
      key={key}
      className="w-[300px] h-[250px] bg-corPrincipal"
    ></div>
  );
}

const cards = [
  {
    title: 'Enquete 1',
    description: 'Descrição da enquete 1',
  },
  {
    title: 'Enquete 2',
    description: 'Descrição da enquete 2',
  },
  {
    title: 'Enquete 3',
    description: 'Descrição da enquete 3',
  },
  {
    title: 'Enquete 4',
    description: 'Descrição da enquete 4',
  },
  {
    title: 'Enquete 5',
    description: 'Descrição da enquete 5',
  },
  {
    title: 'Enquete 6',
    description: 'Descrição da enquete 6',
  },
  {
    title: 'Enquete 7',
    description: 'Descrição da enquete 7',
  },
  {
    title: 'Enquete 8',
    description: 'Descrição da enquete 8',
  },
  {
    title: 'Enquete 9',
    description: 'Descrição da enquete 9',
  },
  {
    title: 'Enquete 10',
    description: 'Descrição da enquete 9',
  },
  {
    title: 'Enquete 10',
    description: 'Descrição da enquete 9',
  },
  {
    title: 'Enquete 10',
    description: 'Descrição da enquete 9',
  },
  {
    title: 'Enquete 10',
    description: 'Descrição da enquete 9',
  },
  {
    title: 'Enquete 10',
    description: 'Descrição da enquete 9',
  },
];

export default function HomePage() {
  return (
    <div className="main">
      <main>
        <div className="flex flex-col justify-center tems-center px-16 py-6 gap-6 text-corPrincipal">
          <div className="flex flex-col w-full justify-start">
            <h1 className="text-4xl font-bold">Histórico</h1>
            <h2 className="text-4x1 font-sans">
              Visualize as enq./vot. que você criou ou participa, tanto públicas quanto privadas.
            </h2>
          </div>
          <SearchBar />
          <div className="w-full flex flex-row items-center gap-8">
            <FilterButton variante="ordenar" />
            <FilterButton variante="filtrar" />
          </div>
          <div className="flex flex-row flex-wrap justify-start content-between gap-9 ">
            {cards.map((card, index) => (
              <CardFake key={String(index)} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
