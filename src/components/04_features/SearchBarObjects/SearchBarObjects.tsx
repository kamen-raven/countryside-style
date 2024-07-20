'use client';

import React, { useEffect, useState } from 'react';
import styles from './SearchBarObjects.module.scss';
import { SearchBarObjectsInterface } from './SearchBarObjects.interface.ts';

import SearchIcon from "~svg/search/searchIcon.svg";

import { CustomSelect } from '~shared/CustomSelect/CustomSelect.tsx';
import { useSearchObjectsStore } from '~store/searchObjectsStore/useSearchObjectsStore.ts';
import { useRouter } from 'next/navigation';
import { formatNumber, parseFormattedNumber } from '~helpers/formatters/formatCostNumber.ts';
import { SearchClearButton } from '~shared/index.ts';


const SearchBarObjects: React.FC<SearchBarObjectsInterface> = ({ searchStore, typePage }) => {

  // Деструктуризация объекта searchStore с значениями по умолчанию
  const {
    searchTerm = '',
    searchPriceMin = NaN,
    searchPriceMax = NaN,
    searchTypes = ['all'],
    searchTypeLabels = [],
    //dataForSearch = [],
    initialData = [],
  } = searchStore || {};


  // объект действий с состояниями
  const searchActions = {
    setSearchTerm: useSearchObjectsStore((state) => state.actions.setSearchTerm),
    setSearchPriceMin: useSearchObjectsStore((state) => state.actions.setSearchPriceMin),
    setSearchPriceMax: useSearchObjectsStore((state) => state.actions.setSearchPriceMax),
    setSearchTypes: useSearchObjectsStore((state) => state.actions.setSearchTypes),
    setSearchTypeLabels: useSearchObjectsStore((state) => state.actions.setSearchTypeLabels),
    setDataForSearch: useSearchObjectsStore((state) => state.actions.setDataForSearch),
    fetchDataForSearch: useSearchObjectsStore((state) => state.actions.fetchDataForSearch),
  };


  // временный стейт импута чтобы не переписывать зустанд каждый раз при изменении, а только при отправки запроса
  const [tempSearchTerm, setTempSearchTerm] = useState(searchTerm);  // данные инпута основного поиска

  const [tempSearchPriceMin, setTempSearchPriceMin] = useState(searchPriceMin);  // данные инпута минимальной цены
  const [tempSearchPriceMax, setTempSearchPriceMax] = useState(searchPriceMax);  // данные инпута максимальной цены
  const [displayMinPrice, setDisplayMinPrice] = useState(formatNumber(searchPriceMin));
  const [displayMaxPrice, setDisplayMaxPrice] = useState(formatNumber(searchPriceMax));


  const [isClearBtnDisabled, setIsClearBtnDisabled] = useState(true);  // состояние кнопки "отчистить"
  // роутер для перехода на страницу с результатами поиска
  const router = useRouter();


  // слушатель инпута, записывает все изменения в строке основного поиска
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchTerm(event.target.value);
  };


  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTempSearchPriceMin(parseFormattedNumber(value));
    setDisplayMinPrice(value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTempSearchPriceMax(parseFormattedNumber(value));
    setDisplayMaxPrice(value);
  };

  useEffect(() => {
    setDisplayMinPrice(formatNumber(tempSearchPriceMin));
  }, [tempSearchPriceMin]);

  useEffect(() => {
    setDisplayMaxPrice(formatNumber(tempSearchPriceMax));
  }, [tempSearchPriceMax]);

  /*   const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTempSearchPriceMin(Number(event.target.value));
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTempSearchPriceMax(Number(event.target.value));
    };
   */

  // CustomSelect TYPE - DATA
  const selectLabel = 'Выберите тип объекта';
  const selectOptions = ['Дом', 'Участок', 'Квартира'];

  const [tempSearchTypes, setTempSearchTypes] = useState(searchTypes);  // данные селекта
  const [tempSearchTypeLabels, setTempSearchTypeLabels] = useState(searchTypeLabels.length === 0 ? [] : searchTypeLabels); // временный стейт выбранной опции

  /// функция для управления выбором ТИПА ОБъЕКТА
  const handleSelect = (options: string[]) => {
    const optionToSearchType: { [key: string]: 'all' | 'flats' | 'lands' | 'houses-and-cottages' } = {
      'Дом': 'houses-and-cottages',
      'Участок': 'lands',
      'Квартира': 'flats'
    };

    const getTypes = options.map(option => optionToSearchType[option]);

    setTempSearchTypeLabels(options);
    setTempSearchTypes(getTypes);
    searchActions.setSearchTypeLabels(options);
    //searchActions.setSearchTypes(getTypes);
  };


  // слушатель отправки запроса
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      //if (tempSearchTerm !== '') {
      searchActions.setSearchTerm(tempSearchTerm);
      //}
      //if (!Number.isNaN(tempSearchPriceMin) && tempSearchPriceMin > 0) {
      searchActions.setSearchPriceMin(tempSearchPriceMin);
      //}

      // if (!Number.isNaN(tempSearchPriceMax) && tempSearchPriceMax > 0) {
      searchActions.setSearchPriceMax(tempSearchPriceMax);
      //}

      //if (tempSearchType !== 'all') {
      searchActions.setSearchTypes(tempSearchTypes);
      //}


      if (initialData.length > 0) {
        searchActions.setDataForSearch(initialData);
        console.log('catch!');
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
    setTempSearchTypes(['all']);
    setTempSearchPriceMin(NaN);
    setTempSearchPriceMax(NaN);
    setDisplayMinPrice(formatNumber(NaN));
    setDisplayMaxPrice(formatNumber(NaN));
    setTempSearchTypeLabels([]);
    searchActions.setSearchTerm('');
    searchActions.setSearchTypes(['all']);
    searchActions.setSearchTypeLabels([]);
    searchActions.setSearchPriceMin(NaN);
    searchActions.setSearchPriceMax(NaN);
    searchActions.setDataForSearch(initialData);

    if (typePage == 'search') {
      router.back();
    }
  };

  // обработка проверки пустоты поля для дезактивации кнопки отправки запроса
  useEffect(() => {
    if (tempSearchTerm.trim() || tempSearchTypeLabels.length > 0 || !Number.isNaN(tempSearchPriceMin) || !Number.isNaN(tempSearchPriceMax)) {
      setIsClearBtnDisabled((false));
    } else {
      setIsClearBtnDisabled((true));
    }
  }, [tempSearchTerm, tempSearchTypeLabels, tempSearchPriceMin, tempSearchPriceMax]);





  return (
    <section className={`${styles.wrapper}`}>
      <form className={styles.container} onSubmit={handleSubmit}>

        <div className={styles.inputContainer}>
          <div className={styles.inputContainer__icon}>
            <SearchIcon />
          </div>
          <input className={`${styles.inputContainer__input} ${tempSearchTerm !== '' ? styles.inputContainer__input_selected : ''}`}
            type={'search'}
            placeholder={`Введите поисковой запрос`}
            value={tempSearchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className={styles.optionsContainer}>
          <input
            type={'search'}
            min={0}
            step={0.01}
            placeholder="Цена от, руб."
            value={displayMinPrice}
            onChange={handleMinPriceChange}
            className={`${styles.priceInput} ${!Number.isNaN(tempSearchPriceMin) ? styles.priceInput_selected : ''}`}
          />
          <input
            type={'search'}
            min={0}
            step={0.01}
            placeholder="Цена до, руб."
            value={displayMaxPrice}
            onChange={handleMaxPriceChange}
            className={`${styles.priceInput} ${!Number.isNaN(tempSearchPriceMax) ? styles.priceInput_selected : ''}`}
          />
          <CustomSelect
            label={selectLabel}
            options={selectOptions}
            selectedOptions={tempSearchTypeLabels}
            handleSelect={handleSelect}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button className={`${styles.button} ${isClearBtnDisabled ? '' : styles.button_active} `}
            disabled={isClearBtnDisabled}//{!tempSearchTerm.trim()}
            type="submit">
            Подобрать
          </button>
          <SearchClearButton
            onClick={handleClear}
            disabled={isClearBtnDisabled}
            innerText='сбросить' />
        </div>
      </form>


    </section>
  );
};

export { SearchBarObjects };
