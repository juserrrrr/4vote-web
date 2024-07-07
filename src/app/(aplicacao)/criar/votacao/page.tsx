import React from 'react';
import CriarVotacao from '../Votacao';

function PageVotacao() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-[1438px] h-[1000px] justify-center items-center">
        <div className="w-[1260px] h-[825px] p-3 mb-10">
          <CriarVotacao />
        </div>
      </div>
    </div>
  );
}

export default PageVotacao;
