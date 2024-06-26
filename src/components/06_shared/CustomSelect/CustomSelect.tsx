'use client';
import React, { useState, useRef, useEffect } from 'react';
import { CustomSelectInterface } from './CustomSelect.interface';
import styles from './CustomSelect.module.scss';

import ToggleSelectIcon from '~svg/button/toggle.svg';


const CustomSelect: React.FC<CustomSelectInterface> = ({ options, label, selectedOption, handleSelect }) => {
  const [isOpen, setIsOpen] = useState(false);  // стейт состояния открытия списка
  const dropdownRef = useRef<HTMLDivElement>(null);

  // открытие / закрытие
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // получаем функцию управления и выбора опций из родительского компонента и используем его.
  const handleSelectOptions = (option: string) => {
    handleSelect(option);
    setIsOpen(false);
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


  return (
    <div className={`${styles.customSelect} ${isOpen && styles.customSelect_opened}
                    ${label !== selectedOption ? styles.customSelect_selected : ''}`}
      ref={dropdownRef}>

      <div className={`${styles.selectSelected}
                        ${label !== selectedOption ? styles.selectSelected_selected : ''}`}
        onClick={handleToggle}>

        {selectedOption}

        <ToggleSelectIcon className={`${styles.toggleIcon} ${isOpen && styles.toggleIcon_opened}`} />
      </div>

      {isOpen && (
        <div className={`${styles.selectItems}  `}>
          {options.map((option, index) => (
            <div key={index} onClick={() => handleSelectOptions(option)}>
              {option}
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export { CustomSelect };
