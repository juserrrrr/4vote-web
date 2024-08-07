'use client';
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import LoadingIcon from '../loadingIcon/LoadingIcon';

const button = tv({
  base: 'flex w-[222px] h-[56px] px-[34px] justify-center items-center gap-[-2px] shrink-0',
  variants: {
    variant: {
      default: 'rounded-[7px]',
      rounded: 'rounded-[28px]',
      outlined: 'rounded-[7px] border-2',
    },
    bgColor: {
      primaria: 'bg-corPrincipal',
      secundaria: 'bg-corSecundaria',
      terciaria: 'bg-white',
      transparente: 'bg-transparent',
    },
    textColor: {
      primaria: 'text-corPrincipal',
      secundaria: 'text-corSecundaria',
      terciaria: 'text-white',
    },
    borderColor: {
      primaria: 'border-corPrincipal',
      secundaria: 'border-corSecundaria',
      terciaria: 'border-white',
    },
  },
  defaultVariants: {
    type: 'default',
    bgColor: 'primaria',
    textColor: 'terciaria',
    borderColor: 'primaria',
  },
});

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    texto: string;
    isLoading?: boolean;
  };

function Butao({ texto, variant, bgColor, textColor, borderColor, className, isLoading, ...props }: ButtonProps) {
  const hover = `hover:bg-opacity-75 transition duration-300 ease-in-out`;
  const disabled = `disabled:bg-stone-200 disabled:opacity-50 disabled:text-corPrincipal hover:bg-opacity-100`;
  return (
    <>
      <button
        className={`${button({ variant, bgColor, textColor, borderColor, className })} ${hover} ${disabled}`}
        {...props}
      >
        <span className="flex flex-row gap-3 justify-center items-center">
          {isLoading && <LoadingIcon />} {texto}
        </span>
      </button>
    </>
  );
}

export default Butao;
