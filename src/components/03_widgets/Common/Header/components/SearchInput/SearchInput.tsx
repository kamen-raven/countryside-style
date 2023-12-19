import React from "react";
import { SearchInputProps } from "./SearchInput.props";
import styles from "./SearchInput.module.scss";
import { Input } from "~shared/index";
import SearchIcon from "~svg/search/searchIcon.svg";

const SearchInput = ({ ...props }: SearchInputProps): JSX.Element => {
  return (
    <div className={styles.container} {...props}>
      <Input className={styles.input} placeholder={`Поиск по сайту`} />
      <div className={styles.icon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export { SearchInput };
