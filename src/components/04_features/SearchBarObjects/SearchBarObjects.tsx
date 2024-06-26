'use client';

import React, { useEffect, useState } from 'react';
import styles from './SearchBarObjects.module.scss';
import { SearchBarObjectsInterface } from './SearchBarObjects.interface.ts';

import SearchIcon from "~svg/search/searchIcon.svg";
import ClearIcon from '~svg/button/clear.svg';

import { CustomSelect } from '~shared/CustomSelect/CustomSelect.tsx';
import { useSearchStore } from '~store/searchStore/useSearchStore.ts';
import { useRouter } from 'next/navigation';
import searchObjectsByCategory from '~helpers/searchObjects/searchObjectsByCategory.ts';
import sortedObjectsByPrice from '~helpers/objects/sortedObjectsByPrice.ts';


const SearchBarObjects: React.FC<SearchBarObjectsInterface> = ({ searchStore, filteredData, typePage }) => {

  // Деструктуризация объекта searchStore с значениями по умолчанию
  const {
    searchTerm = '',
    searchType = 'all',
    searchTypeLabel = '',
    dataForSearch = [],
    initialData = [],
  } = searchStore || {};


  // объект действий с состояниями
  const searchActions = {
    setSearchTerm: useSearchStore((state) => state.actions.setSearchTerm),
    setSearchPriceMax: useSearchStore((state) => state.actions.setSearchPriceMax),
    setSearchType: useSearchStore((state) => state.actions.setSearchType),
    setSearchTypeLabel: useSearchStore((state) => state.actions.setSearchTypeLabel),
    setDataForSearch: useSearchStore((state) => state.actions.setDataForSearch),
    fetchDataForSearch: useSearchStore((state) => state.actions.fetchDataForSearch),
  };

  // используемые данные - или уже ранее полученные отфильтрованные или те, которые мы получим
  const objectsList = filteredData ? filteredData : dataForSearch;

  // временный стейт импута чтобы не переписывать зустанд каждый раз при изменении, а только при отправки запроса
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);  // данные инпута

  const [isClearBtnDisabled, setIsClearBtnDisabled] = useState(true);  // состояние кнопки "отчистить"
  // роутер для перехода на страницу с результатами поиска
  const router = useRouter();


  // слушатель инпута, записывает все изменения в строке основного поиска
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchTerm(event.target.value);
  };




  // CustomSelect TYPE - DATA
  const selectLabel = 'Тип объекта';
  const selectOptions = ['Дом', 'Участок', 'Квартира'];

  const [tempSearchType, setTempSearchType] = useState(searchType);  // данные селекта
  const [tempSearchTypeLabel, setTempSearchTypeLabel] = useState(searchTypeLabel === '' ? selectLabel : searchTypeLabel); // временный стейт выбранной опции

  /// функция для управления выбором ТИПА ОБъЕКТА
  const handleSelect = (option: string) => {
    const optionToSearchType: { [key: string]: 'all' | 'flats' | 'lands' | 'houses-and-cottages' } = {
      'Дом': 'houses-and-cottages',
      'Участок': 'lands',
      'Квартира': 'flats'
    };

    const getType = optionToSearchType[option] || 'all';

    setTempSearchTypeLabel(option);
    setTempSearchType(getType);
    //searchActions.setSearchType(getType);
    searchActions.setSearchTypeLabel(option);
  };


  // слушатель отправки запроса
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      if (tempSearchTerm !== '') {
        searchActions.setSearchTerm(tempSearchTerm);
      }

      if (tempSearchType !== 'all') {
        searchActions.setSearchType(tempSearchType);
      }

      await searchActions.fetchDataForSearch();

      if (typePage !== 'search') {
        router.push('search-results');
      }

    } catch (error) {
      console.log('error', error);
    }
  };


  // слушатель кнопки "отчистить"
  const handleClear = (event: React.FormEvent) => {
    event.preventDefault();
    setTempSearchTerm('');
    setTempSearchType('all');
    setTempSearchTypeLabel(selectLabel);
    searchActions.setSearchTerm('');
    searchActions.setSearchType('all');
    searchActions.setSearchTypeLabel(selectLabel);
    searchActions.setDataForSearch(initialData);
    /*     if (typePage !== 'search') {
          setTempSearchTerm('');
          setSearchTerm('');
        } else {
          setTempSearchTerm('');
          setSearchTerm('');
        } */
  };

  useEffect(() => {
    if (tempSearchTerm.trim()) {
      setIsClearBtnDisabled((false));
    } else if (tempSearchTypeLabel !== selectLabel) {
      setIsClearBtnDisabled((false));
    } else {
      setIsClearBtnDisabled((true));
    }
  }, [tempSearchTerm, tempSearchTypeLabel]);





  return (
    <section className={`${styles.wrapper}`}>
      <form className={styles.container} onSubmit={handleSubmit}>

        <div className={styles.inputContainer}>
          <div className={styles.inputContainer__icon}>
            <SearchIcon />
          </div>
          <input className={`${styles.inputContainer__input} ${tempSearchTerm !== '' ? styles.inputContainer__input_selected :''}`}
            placeholder={`Введите поисковой запрос`}
            value={tempSearchTerm}
            onChange={handleSearch} />
        </div>

        <div className={styles.optionsContainer}>
          {/*           <input

            placeholder="Цена от"
            onChange={handleMinPriceChange}
            className={styles.priceInput}
          />
          <input

            placeholder="Цена до"
            onChange={handleMaxPriceChange}
            className={styles.priceInput}
          /> */}
          <CustomSelect
            label={selectLabel}
            options={selectOptions}
            selectedOption={tempSearchTypeLabel}
            handleSelect={handleSelect}
          />
          {/*           <CustomSelect label={`Цена от , руб.`} options={['option1', 'option2', 'option3']} />
          <CustomSelect label={`Цена до, руб.`} options={['option1', 'option2', 'option3']} /> */}
        </div>

        <div className={styles.buttonContainer}>

          <button className={`${styles.button} ${!tempSearchTerm.trim() ? '' : styles.button_active} `}
            disabled={!tempSearchTerm.trim()}
            type="submit">
            Подобрать
          </button>

          <button className={styles.clearButton}
            type="button"
            disabled={isClearBtnDisabled}
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
