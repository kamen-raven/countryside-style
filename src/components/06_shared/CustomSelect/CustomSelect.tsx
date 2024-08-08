'use client';
import React, { useState, useRef, useEffect } from 'react';
import { CustomSelectInterface } from './CustomSelect.interface';
import styles from './CustomSelect.module.scss';

import ToggleSelectIcon from '~svg/button/toggle.svg';


const CustomSelect: React.FC<CustomSelectInterface> = ({ options, label, selectedOptions, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);  // стейт состояния открытия списка
  const dropdownRef = useRef<HTMLDivElement>(null);

  // открытие / закрытие
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  /*   // получаем функцию управления и выбора опций из родительского компонента и используем его.
    const handleSelectOptions = (option: string) => {
      handleSelect(option);
      setIsOpen(false);
    }; */
  // обработка выбора опций
  const handleSelectOptions = (option: string) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((selected) => selected !== option)
      : [...selectedOptions, option];
    handleSelect(newSelectedOptions);
  };






  // закрытие списка по клику снаружи
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  //const selectedLabels = selectedOptions.length > 0 ? selectedOptions.join(', ') : label;
  const selectedLabels = () => {
    const labels = [];

    if (selectedOptions.includes('Дом')) {
      labels.push('Дом');
    }
    if (selectedOptions.includes('Участок')) {
      labels.push('Участок');
    }
    if (selectedOptions.includes('Квартира')) {
      labels.push('Квартира');
    }

    // Если нет выбранных опций, возвращаем исходный label
    if (labels.length === 0) {
      return label;
    }

    // Соединяем выбранные опции в строку, разделяя их переносами строк
    return labels.join(', ');
  };



  return (
    <div className={`${styles.customSelect} ${isOpen && styles.customSelect_opened}
                    ${selectedOptions.length > 0 ? styles.customSelect_selected : ''}`}
      ref={dropdownRef}>

      <div className={`${styles.selectSelected}
                        ${selectedOptions.length > 0 ? styles.selectSelected_selected : ''}`}
        onClick={handleToggle}>

        {selectedLabels()}

        <ToggleSelectIcon className={`${styles.toggleIcon} ${isOpen && styles.toggleIcon_opened}`} />
      </div>

      {isOpen && (
        <div className={`${styles.selectItems}  `}>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleSelectOptions(option)}>
              <input
                className = {styles.checkbox}
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => handleSelectOptions(option)}
              />
              {option}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export { CustomSelect };
