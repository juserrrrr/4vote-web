import React from 'react';
import CriarVotacao from '../Votacao';
import { PesquisaDto, surveyService } from '@/lib/pesquisa';

function PageVotacao() {
  async function HandleSubmit(data: FormData) {
    'use server';
    const titulo = data.get('titulo');
    console.log(titulo);
  }
  return (

      <div className="w-full h-auto mt-5">
        <CriarVotacao />
      </div>
  );
}

export default PageVotacao;
