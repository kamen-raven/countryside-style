import React from 'react';
import styles from './SearchClearButton.module.scss';
import { SearchClearButtonInterface } from './SearchClearButton.interface';
import ClearIcon from '~svg/button/clear.svg';


const SearchClearButton: React.FC<SearchClearButtonInterface> = ({ onClick, disabled, innerText = "сбросить", className }) => {
  return (
    <button className={`${styles.clearButton} ${className}`}
      type="button"
      disabled={disabled}
      onClick={onClick}>
      {innerText}
      <ClearIcon />
    </button>
  );
};

export { SearchClearButton };
