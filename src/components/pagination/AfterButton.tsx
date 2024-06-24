import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface NextButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled }) => (
  <button
    className={`mx-1 px-2 py-1 rounded-full flex items-center ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : `bg-white text-corPrincipal`}`}
    onClick={onClick}
    disabled={disabled}
  >
    <span>Próximo</span>
    <ChevronRightIcon className="w-5 h-5 ml-1" />
  </button>
);

export default NextButton;
