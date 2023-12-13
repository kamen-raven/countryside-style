import React from 'react';
import { ReviewCardProps } from './ReviewCard.props';
import styles from './ReviewCard.module.scss';
import { Button } from '~/components/06_shared';


const ReviewCard = ({ }: ReviewCardProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoContainer}>
        <div className={styles.infoContainer__avatar}></div>
        <div className={styles.infoContainer__inner}>
          <p className={styles.infoContainer__name}>
            Ирина и Максим
          </p>
          <p className={styles.infoContainer__date}>
            21 апреля, 2023 года
          </p>
        </div>
      </div>
      <div className={styles.reviewContainer}>
        <p className={styles.reviewText}>
          В агентство недвижимости «Загородный стиль» мы обратились случайно. В процессе поиска загородной недвижимости мы познакомились с Павлом Соколовым, который занимался продажей потенциально интересного для нас загородного дома. Павел произвел на нас приятное впечатление
          и мы заключили с ним договор на содействие в продаже нашей квартиры. Работа по продаже квартиры была построена очень эффективно в комфортном для нас режиме и результат был достигнут
          в необходимые сроки.

          Нам понравилась работа Павла и мы обратились к нему повторно при продаже другой квартиры
          и также остались очень довольны результатами.Планируем обратиться и впредь!

          Романова Юлия
        </p>
      </div>
      <div className={styles.buttonsContainer}>
        <Button appearance="transparent">
          Читать весь отзыв
        </Button>
        <Button appearance="transparent">
          Оригинал отзыва
        </Button>
      </div>
    </div>
  );
};

export { ReviewCard };
