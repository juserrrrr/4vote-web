import React, { forwardRef, useState } from 'react';

interface Option {
  label: string;
  value: number | string | boolean;
}

interface SelectCustomProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectCustom = forwardRef<HTMLSelectElement, SelectCustomProps>(function InputCustom(
  { options, value, onChange, ...restProps },
  ref,
) {
  return (
    <div className={`flex flex-col w-full relative box-border`}>
      <select
        className={`p-2 h-12 rounded-md text-blue-950 
      border-2  border-solid border-blue-950 focus:outline-none focus:border-blue-900 font-semibold
      `}
        value={value}
        onChange={onChange}
        ref={ref}
        {...restProps}
      >
        {options.map((option) => (
          <option
            key={option.value.toString()}
            value={option.value.toString()}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SelectCustom;
