import React from 'react';
import CriarPesquisa from '../Pesquisa';

function PageEnquete() {
  return (
    <div className="w-full h-auto">
      <CriarPesquisa
        key={'Enquete'}
        type="enquete"
      />
    </div>
  );
}

export default PageEnquete;
