'use client';

import React, { useEffect, useRef, useState } from 'react';
import { OdometerCounterInterface } from './OdometerCounter.interface';
import styles from './OdometerCounter.module.scss';
import { useWindowWidthSize } from '~hooks/useWindowWidthSize';


const OdometerCounter: React.FC<OdometerCounterInterface> = ({
  /* duration = 1000,
  step = 1, */
  // tag = 'span',
  number,
  className
}) => {

  let duration = 1000;
  let step = 1;
  let startCount = 0;
  // устанавливаем скорость шаг и начальную цифру в зависимости от длины числа для отрисовки
  function setCounterStats(num: string) {
    if (num.length <= 3) {
      duration = 1200;
      step = 1;
      startCount = 0;
    } else if (num.length == 4) {
      duration = 1500;
      step = 10;
      startCount = 100;
    } else if (num.length == 5) {
      duration = 1200;
      step = 200;
      startCount = 500;
    } else if (num.length == 6) {
      duration = 1500;
      step = 2000;
      startCount = 1000;
    } else {
      duration = 1000;
      step = 5000;
      startCount = 1000;
    }
  }

  const getChildren = number?.toString().replace(/[^\d]/g, ''); // приводим к строке и убираем все что НЕ-цифры
  const totalNumbers = Number(getChildren); // переданное значение используем как цель для отображения (переводим в ЦИФРУ)

  const [count, setCount] = useState(startCount); // стейт отображаемого числа
  const [isVisible, setIsVisible] = useState(false); // стейт отображения
  const ref = useRef<HTMLDivElement>(null); // реф

  getChildren && setCounterStats(getChildren); // 1 seconds
  const stepTime = Math.round(duration / (totalNumbers / step));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);



  // условие для запуска анимации когда пользователь выводит на экран информацию
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.8 // Порог 80%, чтобы сработало, когда элемент показывается частично
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isClient]);




  useEffect(() => {
    let currentNumber = count;
    let interval: NodeJS.Timeout;

    if (isVisible && isClient) {
      interval = setInterval(() => {
        currentNumber = currentNumber + step;

        if (currentNumber <= totalNumbers) {
          setCount(currentNumber);
        } else {
          clearInterval(interval); // Очистка интервала, когда достигнут последний номер
        }
      }, stepTime);
    }


    return () => clearInterval(interval); // Очистка интервала при размонтировании или завершении эффекта
  }, [isClient, isVisible, step, totalNumbers, stepTime]);


  const formattedNumber = count.toLocaleString('ru-RU');//.replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0'); // добавляем неразрывный пробел после каждого третьего символа


  const windowSize = useWindowWidthSize();

  // выбираем тэг для отображения информации - SPAN / P / DIV
  /*     const setTag = (t: typeof tag) => {
        if (t == 'span') {
          return (
            <span ref={ref} className={`${className} ${isVisible ? styles.isVisible : styles.isHidden}`}>
              {formattedNumber}
            </span>
          );
        }

        if (t == 'p') {
          return (
            <p ref={ref} className={`${className} ${isVisible ? styles.isVisible : styles.isHidden}`}>
              {formattedNumber}
            </p>
          );
        }

        if (t == 'div') {
          return (
            <div ref={ref} className={`${className} ${isVisible ? styles.isVisible : styles.isHidden}`}>
              {formattedNumber}
            </div>
          );
        }
      }; */

  const isLargeScreen = windowSize >= 768;



  return (
    <>
      {isClient ?
        (isLargeScreen ?
          <div ref={ref} className={`${className} ${isVisible ? styles.isVisible : styles.isHidden}`}>
            {formattedNumber}
          </div>
          :
          <div className={className}>
            {getChildren}
          </div>
        )
        :
        null
      }
    </>
  );
  /*     return (

        setTag(tag)

      ); */
};


export { OdometerCounter };
