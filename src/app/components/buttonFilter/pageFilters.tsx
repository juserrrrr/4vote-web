import React from 'react';
import FilterButton from './FilterButton';
import style from './Filters.module.css';

const PageFilter: React.FC = () => {
  return (
    <div className={style.backgroundColor}>
      <FilterButton
        icon={
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
        }
        text="Filtrar por:"
      />
    </div>
  );
};

export default PageFilter;
