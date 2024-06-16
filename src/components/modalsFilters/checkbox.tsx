import React, { useState } from 'react';
import styles from './checkbox.module.css';

interface CheckboxProps {
  texto: string;
}

function toggleChecked(checked: boolean, setChecked: React.Dispatch<React.SetStateAction<boolean>>) {
  setChecked(!checked);
}

const CheckboxButton: React.FC<CheckboxProps> = ({ texto }) => {
  const [checked, setChecked] = useState(false);

  const stateCheckbox = () => toggleChecked(checked, setChecked);

  return (
    <label className={`${styles.padraoButao}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={stateCheckbox}
        className={styles.checkbox}
      />
      <span className={styles.text}>{texto}</span>
    </label>
  );
};

export default CheckboxButton;
