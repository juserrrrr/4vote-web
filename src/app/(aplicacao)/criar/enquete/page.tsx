import React from 'react';
import CriarPesquisa from '../Pesquisa';
import LoadingIcon from '../../../../components/loadingIcon/LoadingIcon';

function PageEnquete() {
  return (
    <div className="w-full h-auto mt-5">
      <CriarPesquisa
        key={'Enquete'}
        type="enquete"
      />
    </div>
  );
}

export default PageEnquete;
