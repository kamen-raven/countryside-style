'use client';

import React, { useState } from 'react';
import styles from './SearchBarObjects.module.scss';
import { SearchBarObjectsInterface } from './SearchBarObjects.interface.ts';

import SearchIcon from "~svg/search/searchIcon.svg";
import ClearIcon from '~svg/button/clear.svg';

import { CustomSelect } from '~shared/CustomSelect/CustomSelect.tsx';
import { useSearchStore } from '~store/searchStore/useSearchStore.ts';
import { useRouter } from 'next/navigation';


const SearchBarObjects: React.FC<SearchBarObjectsInterface> = ({ typePage, searchTerm = '' }) => {
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);
  const router = useRouter();

  const fetchFilteredData = useSearchStore((state) => state.actions.fetchFilteredData);
  const setSearchTerm = useSearchStore((state) => state.actions.setSearchTerm);
  const setAllObjects = useSearchStore((state) => state.actions.setData);
  const data = useSearchStore((state) => state.allData);


  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchTerm(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('click!');
    if (tempSearchTerm !== '') {
      setSearchTerm(tempSearchTerm);
      await fetchFilteredData(tempSearchTerm);
      router.push('search-results');
    }

  };

  const handleClear = (event: React.FormEvent) => {
    event.preventDefault();
    if (typePage !== 'search') {
      setTempSearchTerm('');
      setSearchTerm('');
    } else {
      setTempSearchTerm('');
      setSearchTerm('');
      setAllObjects(data);
    }
  };



  return (
    <section className={`${styles.wrapper}`}>
      <form className={styles.container} onSubmit={handleSubmit}>

        <div className={styles.inputContainer}>
          <div className={styles.inputContainer__icon}>
            <SearchIcon />
          </div>
          <input className={styles.inputContainer__input}
            placeholder={`Введите текст`}
            value={tempSearchTerm}
            onChange={handleSearch} />
        </div>

        <div className={styles.optionsContainer}>
          {/*           <CustomSelect label={`Тип недвижимости`} options={['option1', 'option2', 'option3']} />
          <CustomSelect label={`Район`} options={['option1', 'option2', 'option3']} /> */}
          <CustomSelect label={`Цена от , руб.`} options={['option1', 'option2', 'option3']} />
          <CustomSelect label={`Цена до, руб.`} options={['option1', 'option2', 'option3']} />
        </div>

        <div className={styles.buttonContainer}>

          <button className={`${styles.button} ${!tempSearchTerm.trim() ? '' : styles.button_active } `}
            disabled={!tempSearchTerm.trim()}
            type="submit">
            Подобрать
          </button>

          <button className={styles.clearButton}
            type="button"
            disabled={!tempSearchTerm.trim()}
            onClick={handleClear}>
            сбросить
            <ClearIcon />
          </button>
        </div>
      </form>


    </section>
  );
};

export { SearchBarObjects };
