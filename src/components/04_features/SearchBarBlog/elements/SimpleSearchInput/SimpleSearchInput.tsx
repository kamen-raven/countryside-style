'use client';

import React, { useEffect, useState } from "react";
import { SimpleSearchInputInterface } from './SimpleSearchInput.interface.ts';
import styles from "./SimpleSearchInput.module.scss";
import SearchIcon from "~svg/search/searchIcon.svg";
import { SearchClearButton } from "~shared/index.ts";
import { usePathname, useRouter } from "next/navigation";



const SimpleSearchInput: React.FC<SimpleSearchInputInterface> = ({ searchBlogKey, setSearchBlogKey }) => {
  // временный стейт импута чтобы не переписывать зустанд каждый раз при изменении, а только при отправки запроса
  const [tempSearchTerm, setTempSearchTerm] = useState(searchBlogKey);  // данные инпута поиска по блогу

  // состояние кнопки "отправить"
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  // роутер для перехода на страницу с результатами поиска
  const router = useRouter();
  const pathname = usePathname().split('/');


  // обработка проверки пустоты поля для дезактивации кнопки отправки запроса
  useEffect(() => {
    if (tempSearchTerm.trim()) {
      setIsBtnDisabled((false));
    } else {
      setIsBtnDisabled((true));
    }
  }, [tempSearchTerm]);




  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempSearchTerm(event.target.value);
  };

  // слушатель отправки запроса
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSearchBlogKey(tempSearchTerm);
    console.log('click');

    if (pathname.length > 2) {
      router.push('/blog');
      console.log('push!');
    }
  };


  // слушатель кнопки "отчистить"
  const handleClear = (event: React.FormEvent) => {
    event.preventDefault();
    setTempSearchTerm('');
    setSearchBlogKey('');
  };


  return (
    <form className={`${styles.container}`} onSubmit={handleSubmit}>
      <div className={styles.innerContainer}>
        <input
          className={`${styles.input} ${styles.input_blog}`}
          placeholder={'Поиск по ключевому слову'}
          value={tempSearchTerm}
          onChange={handleSearch}
        />
        <button className={`${styles.buttonSearch} ${styles.icon} ${styles.icon_blog}`}
          type="submit"
          disabled={isBtnDisabled}>
          <SearchIcon />
        </button>
      </div>
      <SearchClearButton
        onClick={handleClear}
        disabled={isBtnDisabled}
        innerText="" />
    </form>

  );
};

export { SimpleSearchInput };

{/* <form className={`${styles.container} ${styles.container_blog}`} onSubmit={handleSubmit}>
<input
  className={`${styles.input} ${styles.input_blog}`}
  placeholder={'Поиск по ключевому слову'}
  type={'search'}
  value={tempSearchTerm}
  onChange={handleSearch}
/>
<button className={`${styles.buttonSearch} ${styles.icon} ${styles.icon_blog}`}
  type="submit"
  disabled={isBtnDisabled}>
  <SearchIcon />
</button>
</form> */}
