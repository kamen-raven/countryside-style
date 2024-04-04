import React from 'react';
import styles from './SearchBar.module.scss';
import { SearchBarInterface } from './SearchBar.interface.ts';

import SearchIcon from "~svg/search/searchIcon.svg";
import ClearIcon from '~svg/button/clear.svg';

import { CustomSelect } from '~shared/CustomSelect/CustomSelect.tsx';


const SearchBar: React.FC<SearchBarInterface> = () => {
  return (
    <section className={`${styles.wrapper}`}>
      <form className={styles.container}>

        <div className={styles.inputContainer}>
          <div className={styles.inputContainer__icon}>
            <SearchIcon />
          </div>
          <input className={styles.inputContainer__input} placeholder={`Введите текст`} />
        </div>

        <div className={styles.optionsContainer}>
{/*           <CustomSelect label={`Тип недвижимости`} options={['option1', 'option2', 'option3']} />
          <CustomSelect label={`Район`} options={['option1', 'option2', 'option3']} /> */}
          <CustomSelect label={`Цена от - до, руб.`} options={['option1', 'option2', 'option3']} />
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button}>
            Подобрать
          </button>

          <button className={styles.clearButton}>
            Сбросить
            <ClearIcon />
          </button>
        </div>

      </form>
    </section>
  );
};

export { SearchBar };
