import React from 'react';
import styles from './ReviewCardInfoContainer.module.scss';
import { ReviewCardInfoContainerInterface } from './ReviewCardInfoContainer.interface.ts';
import formatDate from '~helpers/formatters/formatDate.ts';
import getLetterForAvatar from '~helpers/reviews/getLetterForAvatar.ts';


const ReviewCardInfoContainer: React.FC<ReviewCardInfoContainerInterface> = ({ data, className }) => {
  return (
    <div className={`${styles.infoContainer} ${className}`}>
      <div className={styles.infoContainer__avatar}>
        <span className = {styles.infoContainer__avatarLabel}>
        {getLetterForAvatar(data.author_name)}
        </span>
      </div>  {/* avatar */}
      <div className={styles.infoContainer__inner}>
        {data.author_name &&
          <p className={styles.infoContainer__name}>
            {data.author_name}                           {/* ИМЯ */}
          </p>
          }
        {data.date_sale &&
          <p className={styles.infoContainer__date}>
            {formatDate(data.date_sale)}             {/* ДАТА ПУБЛИКАЦИИ ОТЗЫВА */}
          </p>
        }
      </div>
    </div>
  );
};

export { ReviewCardInfoContainer };
