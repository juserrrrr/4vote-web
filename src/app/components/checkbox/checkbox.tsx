import { Variantes, CoresFundo, CoresTexto, CoresBorda } from '../buttons/variantes';
import { useState } from 'react';

interface checkBoxProps {
  texto: string;
  variante?: 'default' | 'rounded' | 'outlined';
  corTexto?: 'primaria' | 'secundaria' | 'terciaria';
  corFundo?: 'primaria' | 'secundaria' | 'terciaria' | 'transparente';
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const FilterCheckbox: React.FC<checkBoxProps> = ({
  texto,
  variante = 'default',
  corTexto = 'primaria',
  corFundo = 'terciaria',
  isChecked = false,
  onChange,
}) => {
  const padraoButao = 'flex w-[222px] h-[56px] px-[34px] justify-left items-center gap-[-2px] shrink-0';
  const variacaoButao = Variantes[variante];
  const variacaoCor = CoresTexto[corTexto];
  const variacaoFundo = CoresFundo[corFundo];
  let variacaoBorda = '';

  if (variante === 'outlined') {
    variacaoBorda = CoresBorda[corTexto];
  }

  const [checked, setChecked] = useState(isChecked);

  const statusCheckbox = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  return (
    <button
      className={`${padraoButao} ${variacaoButao} ${variacaoCor} ${variacaoFundo} ${variacaoBorda}`}
      onClick={statusCheckbox}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={statusCheckbox}
        className="mr-1"
      />
      {texto}
    </button>
  );
};

export default FilterCheckbox;
