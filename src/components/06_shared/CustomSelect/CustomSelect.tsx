'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CustomSelectInterface } from './CustomSelect.interface';
import styles from './CustomSelect.module.scss';

import ToggleSelectIcon from '~svg/button/toggle.svg';
import { useSearchStore } from '~store/searchStore/useSearchStore';

const CustomSelect: React.FC<CustomSelectInterface> = ({ options, label }) => {
  //
  const labelName = label;

    // Set search type based on selected option
    const optionToSearchType: { [key: string]: 'all' | 'flats' | 'lands' | 'houses-and-cottages' } = {
      'Дом': 'houses-and-cottages',
      'Участок': 'lands',
      'Квартира': 'flats'
    };
    const setSearchType = useSearchStore((state) => state.actions.setSearchType);
    const setSearchTypeLabel = useSearchStore((state) => state.actions.setSearchTypeLabel);
    const searchTypeLabel = useSearchStore((state) => state.searchTypeLabel);



  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(searchTypeLabel === '' ? label : searchTypeLabel);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedOption(searchTypeLabel === '' ? label : searchTypeLabel);
  }, [searchTypeLabel]);


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = useCallback((option: string) => {
    setSelectedOption(option);
    setIsOpen(false);

    const searchType: 'all' | 'flats' | 'lands' | 'houses-and-cottages' = optionToSearchType[option] || 'all';
    setSearchType(searchType);
    setSearchTypeLabel(option);
    console.log(searchType);

  }, [setSearchType]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);



  // Добавим обработчик клика за пределами компонента для закрытия выпадающего списка
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={`${styles.customSelect} ${isOpen && styles.customSelect_opened}  ${labelName !== selectedOption ? styles.customSelect_selected : ''}`} ref={dropdownRef}>

      <div className={`${styles.selectSelected} ${labelName !== selectedOption ? styles.selectSelected_selected : ''}`} onClick={handleToggle}>
        {selectedOption}
        {isOpen && (
          <div className={`${styles.selectItems}  `}>
            {options.map((option, index) => (
              <div key={index} onClick={() => handleSelect(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
        <ToggleSelectIcon className = {`${styles.toggleIcon} ${isOpen && styles.toggleIcon_opened}`}/>
      </div>

    </div>
  );
};

export { CustomSelect };
