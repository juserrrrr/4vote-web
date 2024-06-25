import React from 'react';

interface VoteCounterProps {
  votes: number;
}

const VoteCounter: React.FC<VoteCounterProps> = ({ votes }) => {
  return (
    <div className="flex items-center justify-center">
      <span className="text-base font-bold text-corPrincipal">TOTAL DE VOTOS: {votes}</span>
    </div>
  );
};

export default VoteCounter;
