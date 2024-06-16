import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled }) => (
  <button
    className={`flex items-center mx-1 px-2 py-1 rounded-full ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-white text-corPrincipal'}`}
    onClick={onClick}
    disabled={disabled}
  >
    <span className="mr-1">Próximo</span>
    <ChevronRightIcon className="w-5 h-5" />
  </button>
);

export default NextButton;
