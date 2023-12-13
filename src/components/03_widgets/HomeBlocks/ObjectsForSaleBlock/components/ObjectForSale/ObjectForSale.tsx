import React from 'react';
import Image from 'next/image';


import { ObjectForSaleProps } from './ObjectForSale.props';
import styles from './ObjectForSale.module.scss';
import { CardInfoComponent } from '~entities/index';




const ObjectForSale: React.FC<ObjectForSaleProps> = ({
  photoGeneral,
  photoSecondary,
  containerTemplate,
  title,
  arrows = false,
  buttonText = 'Перейти',
  description,
  block="objects" }) => {

  // Определяем тип расположения контента - текст располагается справа или слева
  const containerType = {
    picFirst: styles.innerBlock_picFirst, // текст слева, картинка идет первая
    textFirst: styles.innerBlock_textFirst // текст справа, картинка идет вторая
  };
  // Селектор выбранного контейнера для контента
  const selectedContainer = containerType[containerTemplate];

  return (
    <div className={`${styles.innerBlock} ${selectedContainer} `}>
      <div className={styles.photoSecondary}>
        {photoSecondary &&
        <Image
          className={styles.photoSecondary__image}
          src={photoSecondary}
          alt={title}
          fill={true}
          />}
      </div>
      <div className={styles.photoGeneral}>
        {photoGeneral &&
        <Image
          className={styles.photoGeneral__image}
          src={photoGeneral}
          alt={title}
          fill={true} />}
      </div>
      <CardInfoComponent
        title={title}
        buttonText={buttonText}
        description={description}
        arrows={arrows}
        containerTemplate={containerTemplate} // информация о том, какой контейнер выбран
        block={block}
      >


      </CardInfoComponent>

    </div>
  );
};

export { ObjectForSale };
