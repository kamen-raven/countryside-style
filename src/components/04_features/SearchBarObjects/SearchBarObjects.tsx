'use client';

import React, { useEffect, useState } from 'react';
import styles from './SearchBarObjects.module.scss';
import { SearchBarObjectsInterface } from './SearchBarObjects.interface.ts';

import SearchIcon from "~svg/search/searchIcon.svg";
import ClearIcon from '~svg/button/clear.svg';

import { CustomSelect } from '~shared/CustomSelect/CustomSelect.tsx';
import { useSearchStore } from '~store/searchStore/useSearchStore.ts';
import { useRouter } from 'next/navigation';


const SearchBarObjects: React.FC<SearchBarObjectsInterface> = ({ searchStore, typePage }) => {

  // Деструктуризация объекта searchStore с значениями по умолчанию
  const {
    searchTerm = '',
    searchPriceMin = NaN,
    searchPriceMax = NaN,
    searchType = 'all',
    searchTypeLabel = '',
    //dataForSearch = [],
    initialData = [],
  } = searchStore || {};


  // объект действий с состояниями
  const searchActions = {
    setSearchTerm: useSearchStore((state) => state.actions.setSearchTerm),
    setSearchPriceMin: useSearchStore((state) => state.actions.setSearchPriceMin),
    setSearchPriceMax: useSearchStore((state) => state.actions.setSearchPriceMax),
    setSearchType: useSearchStore((state) => state.actions.setSearchType),
    setSearchTypeLabel: useSearchStore((state) => state.actions.setSearchTypeLabel),
    setDataForSearch: useSearchStore((state) => state.actions.setDataForSearch),
    fetchDataForSearch: useSearchStore((state) => state.actions.fetchDataForSearch),
  };


  // временный стейт импута чтобы не переписывать зустанд каждый раз при изменении, а только при отправки запроса
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);  // данные инпута основного поиска

  const [tempSearchPriceMin, setTempSearchPriceMin] = useState(searchPriceMin);  // данные инпута минимальной цены
  const [tempSearchPriceMax, setTempSearchPriceMax] = useState(searchPriceMax);  // данные инпута максимальной цены

  const [isClearBtnDisabled, setIsClearBtnDisabled] = useState(true);  // состояние кнопки "отчистить"
  // роутер для перехода на страницу с результатами поиска
  const router = useRouter();


  // слушатель инпута, записывает все изменения в строке основного поиска
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchTerm(event.target.value);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchPriceMin(Number(event.target.value));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchPriceMax(Number(event.target.value));
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

      if (!Number.isNaN(tempSearchPriceMin) && tempSearchPriceMin > 0) {
        searchActions.setSearchPriceMin(tempSearchPriceMin);
      }

      if (!Number.isNaN(tempSearchPriceMax) && tempSearchPriceMax > 0) {
        searchActions.setSearchPriceMax(tempSearchPriceMax);
      }

      if (initialData.length > 0) {
        searchActions.setDataForSearch(initialData);
        console.log('catch!')
      } else {
        await searchActions.fetchDataForSearch();
        console.log('fetch!');
      }


      if (typePage !== 'search') {
        router.push('search-results');
        console.log('push!');
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
    setTempSearchPriceMin(NaN);
    setTempSearchPriceMax(NaN);
    setTempSearchTypeLabel(selectLabel);
    searchActions.setSearchTerm('');
    searchActions.setSearchType('all');
    searchActions.setSearchTypeLabel(selectLabel);
    searchActions.setSearchPriceMin(NaN);
    searchActions.setSearchPriceMax(NaN);
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
    if (tempSearchTerm.trim() || tempSearchTypeLabel !== selectLabel || !Number.isNaN(tempSearchPriceMin) || !Number.isNaN(tempSearchPriceMax)) {
      setIsClearBtnDisabled((false));
    } else {
      setIsClearBtnDisabled((true));
    }
  }, [tempSearchTerm, tempSearchTypeLabel, tempSearchPriceMin, tempSearchPriceMax]);





  return (
    <section className={`${styles.wrapper}`}>
      <form className={styles.container} onSubmit={handleSubmit}>

        <div className={styles.inputContainer}>
          <div className={styles.inputContainer__icon}>
            <SearchIcon />
          </div>
          <input className={`${styles.inputContainer__input} ${tempSearchTerm !== '' ? styles.inputContainer__input_selected : ''}`}
            placeholder={`Введите поисковой запрос`}
            value={tempSearchTerm}
            onChange={handleSearch} />
        </div>

        <div className={styles.optionsContainer}>
          <input
            type='number'
            min={0}
            placeholder="Цена от"
            //value={tempSearchPriceMin.toString()}
            onChange={handleMinPriceChange}
            className={`${styles.priceInput} ${!Number.isNaN(tempSearchPriceMin) ? styles.priceInput_selected : ''}`}
            />
          <input
            type='number'
            min={0}
            placeholder="Цена до"
            //value={tempSearchPriceMax.toString()}
            onChange={handleMaxPriceChange}
            className={`${styles.priceInput} ${!Number.isNaN(tempSearchPriceMax) ? styles.priceInput_selected : ''}`}
          />
          <CustomSelect
            label={selectLabel}
            options={selectOptions}
            selectedOption={tempSearchTypeLabel}
            handleSelect={handleSelect}
          />
        </div>

        <div className={styles.buttonContainer}>

          <button className={`${styles.button} ${isClearBtnDisabled ? '' : styles.button_active} `}
            disabled={isClearBtnDisabled}//{!tempSearchTerm.trim()}
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
