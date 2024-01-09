import React from 'react';
import styles from './CommonInfoInner.module.scss';
import { InfoContainerInterface } from '../../InfoContainer.interface';


const CommonInfoInner: React.FC<InfoContainerInterface> = ({ data }) => {
  return (
    <>
      <h3 className={styles.title}>
        Общая информация
      </h3>

      {data.information.common &&
        <p className={styles.description}>
          {data.information.common}
        </p>
      }

      {data.information.communications &&
        <p className={styles.description}>
          <span className={styles.description_spanAccent}>
            Коммуникации:&nbsp;
          </span>
          {data.information.communications}
        </p>
      }

      {data.information.plan &&
        <p className={styles.description}>
          <span className={styles.description_spanAccent}>
            Планировка дома:
          </span>
          <br />

          {data.information.plan.map((item, index) => {
            return (
              <span key={index}>
                <span  className={styles.description_spanAccent}>
                  {item.floor}:&nbsp;
                </span>
                {item.info}
                <br />
              </span>
            );
          })
          }
        </p>
      }

      {data.information.advantages?.bullet &&
        <ul className={styles.list}>
          {data.information.advantages.bullet.map((item, index) => {
            return (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            );
          })}
        </ul>
      }




      {data.information.advantages?.additional &&
        <p className={styles.description_spanAccent}>
          {data.information.advantages.additional}
        </p>
      }
    </>
  );
};

export { CommonInfoInner };
