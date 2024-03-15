import React from 'react';
import { CardInfoComponentProps } from './CardInfoComponent.props';
import styles from './CardInfoComponent.module.scss';
import { ArrowsButton } from '~shared/index';
import Link from 'next/link';


const CardInfoComponent: React.FC<CardInfoComponentProps> = ({
  containerTemplate,
  title,
  arrows,
  buttonText,
  description,
  block
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
    block: {
      objects: styles.container__block_objects,
      services: styles.container__block_services,
    }

  };
  const selectedWrapper = setTemplate.wrapper[containerTemplate];
  const selectedContainer = setTemplate.container[containerTemplate];
  const selectedBlock = block && setTemplate.block[block];

  return (
    <div className={`${styles.container} ${selectedContainer} ${selectedBlock}`}>
      <div className={`${styles.wrapper} ${selectedWrapper}`}>
        <h3 className={`${styles.title}`}>
          {title}
        </h3>
        {!arrows ? null :
          <ArrowsButton className = {styles.arrowsCardInfo}/>
        }
      </div>
      <div className={`${styles.wrapper} ${selectedWrapper}`}>
        <Link className={styles.button} href={'/'}>
          {buttonText}
        </Link>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export { CardInfoComponent };
