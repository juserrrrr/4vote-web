'use client';
import React, { InputHTMLAttributes, forwardRef, useId, useState } from 'react';

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
  alturaInput?: string;
  larguraInput?: string;
}

const InputCustom = forwardRef<HTMLInputElement, InputCustomProps>(function InputCustom(
  { label = '', alturaInput = '12', larguraInput = 'full', helperText, error = false, ...restProps },
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
    <div className={`flex flex-col relative w-${larguraInput} p-1 h-auto`}>
      <label
        htmlFor={inputId}
        className={`left-3 top-4 absolute transition-all duration-200 text-blue-950 font-semibold text-md pointer-events-none 
        ${isFocused || hasContent ? 'transform -translate-y-3 text-[14px] pointer-events-auto' : 'pointer-events-none '}`}
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`p-2 pt-4 h-${alturaInput} rounded-md text-blue-950 
        border-2 font-semibold border-solid border-blue-950 focus:outline-none focus:border-blue-900
        ${error && 'border-red-600 focus:border-red-600'}`}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restProps}
      />
      {helperText && <p className="text-red-600 text-sm">{helperText}</p>}
    </div>
  );
});

export default InputCustom;
