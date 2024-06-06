'use client';
import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputCustom = forwardRef<HTMLInputElement, InputCustomProps>(function InputCustom(
  { label, ...restProps }: InputCustomProps,
  ref,
) {
  const [isFocused, setisFocused] = useState<Boolean>(false);
  const [hasContent, sethasContent] = useState<Boolean>(false);

  const handleFocus = () => {
    setisFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setisFocused(false);
    sethasContent(!!e.target.value);
  };

  return (
    <div className="flex flex-col w-full p-1 justify-center h-20">
      <label
        className={`ml-2 absolute transition-all duration-200 text-blue-950 font-bold text-md 
        ${isFocused || hasContent ? 'ml-1 transform -translate-y-7 text-sm' : ''}`}
      >
        {label}
      </label>
      <input
        className="p-2 rounded-lg text-blue-950 border-2  border-solid border-blue-950 focus:outline-none focus:border-blue-900"
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
    </div>
  );
});

export default InputCustom;
