import { Variantes, CoresFundo, CoresTexto, CoresBorda } from './variantes';

interface ButtonProps {
  texto: string;
  variante?: 'default' | 'rounded' | 'outlined';
  corTexto?: 'primaria' | 'secundaria' | 'terciaria';
  corFundo?: 'primaria' | 'secundaria' | 'terciaria' | 'transparente';
}

function Butao({ texto, variante = 'default', corTexto = 'terciaria', corFundo = 'primaria' }: ButtonProps) {
  const padraoButao = 'flex w-[222px] h-[56px] px-[34px] justify-center items-center gap-[-2px] shrink-0';
  const variacaoButao = Variantes[variante];
  const variacaoCor = CoresTexto[corTexto];
  const variacaoFundo = CoresFundo[corFundo];

  var variacaoBorda = '';
  var ativado = false;

  if (variante == 'outlined') {
    variacaoBorda = CoresBorda[corTexto];
  }

  return (
    <>
      <button className={`${padraoButao} ${variacaoButao} ${variacaoCor} ${variacaoFundo} ${variacaoBorda}`}>
        {texto}
      </button>
    </>
  );
}

export default Butao;
