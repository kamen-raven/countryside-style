import React from "react";

import styles from "./HeaderSearchInput.module.scss";
import SearchIcon from "~svg/search/searchIcon.svg";



const HeaderSearchInput: React.FC = () => {
  return (
    <div className={styles.container} >
      <input className={styles.input} placeholder={`Поиск по сайту`} />
      <div className={styles.icon}>
        <SearchIcon />
      </div>
    </div>
  );
};

export { HeaderSearchInput };
