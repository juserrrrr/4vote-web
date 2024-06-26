import React from 'react';
import styles from './Filters.module.css';
import { ArrowsUpDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

interface filterButtonProps {
  variante: 'ordenar' | 'filtrar';
  onClick: () => void;
}

const FilterButton: React.FC<filterButtonProps> = ({ variante, onClick }) => {
  const icon =
    variante === 'filtrar' ? (
      <FunnelIcon
        strokeWidth={2}
        className="w-4"
      />
    ) : (
      <ArrowsUpDownIcon
        strokeWidth={2}
        className="w-4"
      />
    );
  const text = variante === 'filtrar' ? 'Filtrar por:' : 'Ordenar por:';

  return (
    <button
      className={styles.button}
      onClick={onClick}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default FilterButton;
