'use client';
import { ForwardRefRenderFunction, InputHTMLAttributes, forwardRef } from 'react';

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputCustom: ForwardRefRenderFunction<HTMLInputElement, InputCustomProps> = ({ label, ...restProps }, ref) => {
  return (
    <div className="flex flex-col w-full p-10">
      <label className="text-blue-950 font-bold">{label}</label>
      <input
        className="p-2 rounded-lg text-blue-950 border-4  border-solid border-blue-950 focus:outline-none focus:border-blue-900"
        ref={ref}
        {...restProps}
      />
    </div>
  );
};

export default forwardRef(InputCustom);
