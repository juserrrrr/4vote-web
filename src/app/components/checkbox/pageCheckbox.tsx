'use client';
import React from 'react';
import Butao from '../buttons/button';
import FilterCheckbox from '@/app/components/checkbox/checkbox';

const Home: React.FC = () => {
  return (
    <div>
      {' '}
      <p>Filtros:</p>
      <FilterCheckbox texto="Criadas por mim" />
      <FilterCheckbox texto="Que participo" />
      <FilterCheckbox texto="Arquivadas" />
      <FilterCheckbox texto="Encerradas" />
      <Butao texto="Aplicar" />
    </div>
  );
};

export default Home;
