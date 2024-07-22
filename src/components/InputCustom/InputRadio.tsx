import { CheckBadgeIcon as OutlineCheckBadgeIcon } from '@heroicons/react/24/outline';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import { forwardRef, InputHTMLAttributes, useEffect, useImperativeHandle, useRef, useState } from 'react';

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  isChecked?: boolean;
  onClickBtn?: () => void;
}

const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(function InputRadio(
  { label, isChecked, onClickBtn, ...restProps },
  ref,
) {
  const internalRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

  useEffect(() => {
    if (isChecked) {
      internalRef.current?.click();
    }
  }, [isChecked]);

  const isCheck = isChecked ? (
    <CheckBadgeIcon className="text-corSucesso w-9 h-9" />
  ) : (
    <OutlineCheckBadgeIcon className="text-corPrincipal w-9 h-9" />
  );

  return (
    <div className="w-full h-12 flex gap-2 items-center">
      <button
        type="button"
        onClick={onClickBtn}
      >
        {isCheck}
      </button>
      <div className="w-full h-full px-3 flex flex-row items-center border-solid border-2 rounded-lg border-corPrincipal">
        <input
          type="radio"
          className="hidden"
          {...restProps}
          ref={internalRef}
        />
        <label className="text-corPrincipal font-bold">{label}</label>
      </div>
    </div>
  );
});

export default InputRadio;
