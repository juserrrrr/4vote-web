'use client';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { forwardRef, InputHTMLAttributes, useImperativeHandle, useRef } from 'react';

//Props para extender do HTMLInputElement
interface FileUploadCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
  haveLabel?: boolean;
  className?: string;
}

const FileUploadCustom = forwardRef<HTMLInputElement, FileUploadCustomProps>(function FileUploadCustom(
  { icon = <ArrowUpTrayIcon className="h-6" />, haveLabel = true, className, ...restProps },
  ref,
) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputFileRef.current as HTMLInputElement);
  function handleClickFileInput() {
    inputFileRef.current?.click();
  }

  return (
    <div className={`flex flex-row gap-2 ${className}`}>
      {haveLabel && <label className="text-center w-20 hidden md:block">{'Enviar Imagem'}</label>}
      <div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={inputFileRef}
          className="hidden"
          {...restProps}
        />
        <button
          onClick={handleClickFileInput}
          type="button"
          className={`w-10 mx-1 h-10 md:w-12 md:h-12 rounded-full transition-colors duration-300 ${haveLabel ? 'bg-corPrincipal' : 'bg-white'} text-white flex items-center justify-center hover:bg-corSecundaria focus:outline-none`}
        >
          {icon}
        </button>
      </div>
    </div>
  );
});

export default FileUploadCustom;
