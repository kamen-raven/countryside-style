'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import styles from './CustomSelect.module.scss';

interface CustomSelectProps {
  options: string[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');
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
    <div className={styles.customSelect} ref={dropdownRef}>
      <div className={styles.selectSelected} onClick={handleToggle}>
        {selectedOption}
        {isOpen && (
        <div className={styles.selectItems}>
          {options.map((option) => (
            <div key={option} onClick={() => handleSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
      </div>

    </div>
  );
};

export {CustomSelect};
