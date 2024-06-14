import React from 'react';
import styles from './Filters.module.css';

interface filterButtonProps {
  variante: 'ordenar' | 'filtrar';
}

const FilterButton: React.FC<filterButtonProps> = ({ variante }) => {
  const icon = variante === 'filtrar' ? iconFilter : iconOrder;
  const text = variante === 'filtrar' ? 'Filtrar por:' : 'Ordenar por:';

  return (
    <button className={styles.button}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

const iconFilter = (
  <svg
    width="15"
    height="17"
    viewBox="0 0 15 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 4.46345C11.148 4.46345 14.1053 3.80627 14.1053 2.99561C14.1053 2.18494 11.148 1.52777 7.5 1.52777C3.85201 1.52777 0.89473 2.18494 0.89473 2.99561C0.89473 3.80627 3.85201 4.46345 7.5 4.46345Z"
      stroke="#052A76"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.89473 2.99561C0.89473 4.63224 3.73573 7.89378 5.19256 9.45776C5.72697 10.0242 6.02696 10.7721 6.03216 11.5509V15.4722L8.96784 14.0044V11.5509C8.96784 10.7722 9.27682 10.028 9.80744 9.45776C11.265 7.89378 14.1053 4.63298 14.1053 2.99561"
      stroke="#052A76"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const iconOrder = (
  <svg
    width="17"
    height="15"
    viewBox="0 0 17 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.7083 13.8125L12.7083 1.1875M12.7083 13.8125L9.90277 11.0069M12.7083 13.8125L15.5139 11.0069"
      stroke="#052A76"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.29166 1.1875L4.29166 13.8125M4.29166 1.1875L1.4861 3.99306M4.29166 1.1875L7.09721 3.99306"
      stroke="#052A76"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default FilterButton;
