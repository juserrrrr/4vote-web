import React from 'react';
import { ArrowsUpDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface filterButtonProps {
  variante: 'ordenar' | 'filtrar';
  onClick: () => void;
}

const FilterButton: React.FC<filterButtonProps> = ({ variante, onClick }) => {
  const icon =
    variante === 'filtrar' ? (
      <FunnelIcon
        strokeWidth={2}
        className="w-4"
      />
    ) : (
      <ArrowsUpDownIcon
        strokeWidth={2}
        className="w-4"
      />
    );
  const text = variante === 'filtrar' ? 'Filtrar por:' : 'Ordenar por:';

  return (
    <button
      className="flex items-center bg-[#fff] border-[1px] border-[solid] border-[#fff] rounded-[7px] px-[46px] py-[4px] cursor-pointer"
      onClick={onClick}
    >
      <span>{icon}</span>
      <span className="w-36 text-[#052a76] text-[16px] font-bold">{text}</span>
    </button>
  );
};

export default FilterButton;
