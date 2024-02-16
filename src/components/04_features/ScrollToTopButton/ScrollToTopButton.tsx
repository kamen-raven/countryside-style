'use client';

import React, { useEffect, useState } from 'react';
import styles from './ScrollToTopButton.module.scss';


import ArrowIcon from '~svg/button/toggle.svg';

const ScrollToTopButton: React.FC = () => {
  const scrollPX = 400;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > scrollPX;
      setIsVisible(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавная прокрутка
    });

  };

  return (
    <div className={`${styles.scrollToTopButton} ${isVisible ? styles.show : ''}`}
        onClick={scrollToTop}>
      <ArrowIcon />
    </div>
  );
};

export { ScrollToTopButton };
