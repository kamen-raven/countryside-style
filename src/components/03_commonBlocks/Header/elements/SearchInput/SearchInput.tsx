import React from "react";
import { SearchInputProps } from "./SearchInput.props";
import styles from "./SearchInput.module.scss";
import SearchIcon from "~svg/search/searchIcon.svg";

const SearchInput = ({ ...props }: SearchInputProps): JSX.Element => {
  return (
    <div className={styles.container} {...props}>
      <input className={styles.input} placeholder={`Поиск по сайту`} />
      <div className={styles.icon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export { SearchInput };
