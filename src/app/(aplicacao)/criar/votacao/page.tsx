'use client';
import React from 'react';
import * as yup from 'yup';
import { PesquisaDto } from '../../../../lib/pesquisa';
import CriarPesquisa from '../Pesquisa';

function PageVotacao() {
  return (
    <div className="w-full h-auto mt-5">
      <CriarPesquisa
        key={'Votacao'}
        type="votacao"
      />
    </div>
  );
}

export default PageVotacao;
