'use client';
import React, { InputHTMLAttributes, forwardRef, useId, useState } from 'react';

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
}

const InputCustom = forwardRef<HTMLInputElement, InputCustomProps>(function InputCustom(
  { label = '', helperText = '', ...restProps }: InputCustomProps,
  ref,
) {
  const [isFocused, setisFocused] = useState<Boolean>(false);
  const [hasContent, sethasContent] = useState<Boolean>(false);
  const inputId = useId();

  const handleFocus = () => {
    setisFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setisFocused(false);
    sethasContent(!!e.target.value);
  };

  return (
    <div className="flex flex-col w-full p-1 justify-center h-20">
      <input
        id={inputId}
        className="p-2 h-10 rounded-md text-blue-950 border-2  border-solid border-blue-950 focus:outline-none focus:border-blue-900"
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
      <label
        htmlFor={inputId}
        className={`ml-2 absolute transition-all duration-200 text-blue-950 font-bold text-md pointer-events-none 
        ${isFocused || hasContent ? 'ml-1 transform -translate-y-7 text-sm pointer-events-auto' : 'pointer-events-none '}`}
      >
        {label}
      </label>
    </div>
  );
});

export default InputCustom;
