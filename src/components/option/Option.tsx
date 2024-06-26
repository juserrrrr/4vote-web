'use client';

import { useState } from 'react';
import CheckCircleIcon from './CheckIcon';
import Image from 'next/image';

type ButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const Button = ({ label, isActive, onClick }: ButtonProps) => {
  return (
    <div className="inline-flex">
      <div className="w-[1050px]">
        <button
          className={`flex items-center w-[1020px] h-[60px] px-4 py-2 border-4 rounded ${isActive ? 'bg-blue-900 text-white border-blue-900' : 'bg-white text-black border-blue-900'}`}
          onClick={onClick}
        >
          <CheckCircleIcon isActive={isActive} />
          {label}
        </button>
      </div>
      <div className="ml-5 ">
        <Image
          width={150}
          height={150}
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Button;
