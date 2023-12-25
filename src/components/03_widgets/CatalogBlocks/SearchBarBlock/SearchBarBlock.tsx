"use client";
import React from 'react';
import styles from './SearchBarBlock.module.scss';
import { SearchBarBlockInterface } from './SearchBarBlock.interface.ts';

import SearchIcon from "~svg/search/searchIcon.svg";
import { CustomSelect } from '~shared/CustomSelect/CustomSelect.tsx';


const SearchBarBlock: React.FC<SearchBarBlockInterface> = ({ }) => {
  return (
    <section className={styles.wrapper}>
      <form className={styles.container}>
        <div className={styles.inputContainer}>
          <div className={styles.icon}>
            <SearchIcon />
          </div>
          <input className={styles.input} placeholder={`Поиск по сайту`} />
        </div>
        <CustomSelect options={['option1', 'option2', 'option3']}/>
      </form>
    </section>
  );
};

export { SearchBarBlock };
