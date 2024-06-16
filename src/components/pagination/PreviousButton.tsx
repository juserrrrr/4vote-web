import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

interface PreviousButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const PreviousButton: React.FC<PreviousButtonProps> = ({ onClick, disabled }) => (
  <button
    className={`flex items-center mx-1 px-2 py-1 rounded-full ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-corPrincipal'}`}
    onClick={onClick}
    disabled={disabled}
  >
    <ChevronLeftIcon className="w-5 h-5" />
    <span className="ml-1">Anterior</span>
  </button>
);

export default PreviousButton;
