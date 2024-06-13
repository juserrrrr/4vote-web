import React from 'react';
import styles from './Filters.module.css';

interface filterButtonProps {
  icon: React.ReactNode;
  text: string;
}

const FilterButton: React.FC<filterButtonProps> = ({ icon, text }) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default FilterButton;
