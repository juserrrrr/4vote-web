import React from 'react';
import CriarPesquisa from '../Pesquisa';

function PageVotacao() {
  return (
    <div className="w-full h-auto">
      <CriarPesquisa
        key={'Votacao'}
        type="votacao"
      />
    </div>
  );
}

export default PageVotacao;
