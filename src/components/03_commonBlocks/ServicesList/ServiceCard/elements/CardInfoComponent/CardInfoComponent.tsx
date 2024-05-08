import React from 'react';
import { CardInfoComponentInterface } from './CardInfoComponent.interface';
import styles from './CardInfoComponent.module.scss';
import { ArrowsButton } from '~shared/index';
import Link from 'next/link';

const CardInfoComponent: React.FC<CardInfoComponentInterface> = ({
  containerTemplate,
  title
}) => {

  const setTemplate = {
    container: {
      picFirst: styles.container_left,
      textFirst: styles.container_right,
    },
    wrapper: {
      picFirst: styles.wrapper_left,
      textFirst: styles.wrapper_right,
    },


  };
  const selectedWrapper = setTemplate.wrapper[containerTemplate];
  const selectedContainer = setTemplate.container[containerTemplate];


  return (
    <div className={`${styles.container} ${selectedContainer} `}>
      <div className={`${styles.wrapper} ${selectedWrapper}`}>
        <h3 className={`${styles.title}`}>
          {title}
        </h3>
        {
          <div className={styles.arrowsButtonContainer}>
            <ArrowsButton className={styles.arrowsCardInfo} position={'left'} />
            <ArrowsButton className={styles.arrowsCardInfo} position={'right'} />
          </div>
        }
      </div>
      <div className={`${styles.wrapper} ${selectedWrapper}`}>
        <Link className={styles.button} href={'/'}>
          Перейти
        </Link>
        <p className={styles.description}>
          Мы продаем только те объекты, которые видели своими глазами
        </p>
      </div>
    </div>
  );
};

export { CardInfoComponent };

