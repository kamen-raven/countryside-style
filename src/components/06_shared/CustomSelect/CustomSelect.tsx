'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CustomSelectInterface } from './CustomSelect.interface';
import styles from './CustomSelect.module.scss';

import ToggleSelectIcon from '~svg/button/toggle.svg';

const CustomSelect: React.FC<CustomSelectInterface> = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = useCallback((option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  }, []);

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
    <div className={`${styles.customSelect} ${isOpen && styles.customSelect_opened}`} ref={dropdownRef}>

      <div className={styles.selectSelected} onClick={handleToggle}>
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
