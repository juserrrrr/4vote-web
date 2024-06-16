import { Variantes, CoresFundo, CoresTexto, CoresBorda } from './variantes';
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

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
  };

function Butao({ texto, variant, bgColor, textColor, borderColor, className, ...props }: ButtonProps) {
  var variacaoBorda = '';
  var ativado = false;

  // if (variante == 'outlined') {
  //   variacaoBorda = CoresBorda[corTexto];
  // }

  return (
    <>
      <button
        className={button({ variant, bgColor, textColor, borderColor, className })}
        {...props}
      >
        {texto}
      </button>
    </>
  );
}

export default Butao;
