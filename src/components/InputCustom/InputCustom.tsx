'use client';
import React, { useRef, useImperativeHandle, forwardRef, useId, useState, InputHTMLAttributes, useEffect } from 'react';

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  helperText?: string;
}

const InputCustom = forwardRef<HTMLInputElement, InputCustomProps>(function InputCustom(
  { label = '', helperText, error = false, ...restProps },
  ref,
) {
  const internalRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);
  const [isFocused, setIsFocused] = useState<Boolean>(false);
  const [hasContent, sethasContent] = useState<Boolean>(false);
  const inputId = useId();

  useEffect(() => {
    sethasContent(!!internalRef.current?.value);
  }, []);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (restProps.onFocus) restProps.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    sethasContent(!!e.target.value);
    if (restProps.onBlur) restProps.onBlur(e);
  };

  const haveToMove = isFocused || hasContent || restProps.type === 'date' || restProps.type === 'datetime-local';

  return (
    <div
      className={`relative w-full h-auto ${restProps.disabled ? 'text-gray-500' : 'text-blue-950'} font-semibold text-md box-border`}
    >
      <label
        htmlFor={inputId}
        className={`left-[0.85rem] top-3 absolute transition-all duration-200 pointer-events-none z-10
        ${haveToMove ? 'transform -translate-y-6 pointer-events-auto' : 'pointer-events-none '}`}
      >
        {label}
      </label>
      <div className="relative w-full h-12">
        <input
          id={inputId}
          className={`w-full h-12 md:h-full p-2 text-blue-950 font-medium focus:outline-none disabled:bg-gray-200 disabled:rounded-md`}
          ref={internalRef}
          {...restProps}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <fieldset
          aria-hidden="true"
          className={`absolute inset-0 -top-[5px] w-full pointer-events-none px-2
          border-2 rounded-md border-solid
        ${!restProps.disabled && 'border-blue-950 '}focus:outline-none focus:border-blue-900
        ${error && 'border-red-600 focus:border-red-600'}`}
        >
          <legend className={`h-3 overflow-hidden transition-all ${haveToMove ? 'max-w-full' : 'max-w-0'}`}>
            <span className={`px-1 opacity-0`}>{label}</span>
          </legend>
        </fieldset>
      </div>
      {helperText && <p className="text-red-600 text-sm">{helperText}</p>}
    </div>
  );
});

export default InputCustom;
