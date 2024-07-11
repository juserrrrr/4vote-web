import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { forwardRef, InputHTMLAttributes, useImperativeHandle, useRef } from 'react';

const FileUploadCustom = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function FileUploadCustom(
  { ...restProps },
  ref,
) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputFileRef.current as HTMLInputElement);
  function handleClickFileInput() {
    inputFileRef.current?.click();
  }

  return (
    <>
      <label className="text-center w-16 hidden md:block ">Enviar Imagem</label>
      <div>
        <input
          type="file"
          ref={inputFileRef}
          className="hidden"
          {...restProps}
        />
        <button
          onClick={handleClickFileInput}
          type="button"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-corPrincipal text-white flex items-center justify-center hover:bg-corSecundaria focus:outline-none"
        >
          <ArrowUpTrayIcon className="h-6" />
        </button>
      </div>
    </>
  );
});

export default FileUploadCustom;
