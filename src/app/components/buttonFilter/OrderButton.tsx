// components/FilterButton.tsx
import React from 'react';
import styles from './Filters.module.css';

const FilterButton: React.FC = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
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
      </span>
      <span className={styles.text}>Ordenar por:</span>
    </button>
  );
};

export default FilterButton;
