import React from 'react';
import Image from 'next/image';

import { ServiceCardProps } from './ServiceCard.props';
import styles from './ServiceCard.module.scss';

import { CardInfoComponent } from '~/components/05_entities';


const ServiceCard: React.FC<ServiceCardProps> = ({
  containerTemplate = 'picFirst',
  title,
  arrows = false,
  buttonText = 'Подробнее',
  description,
  containerSize = 'small',
  image,
  block='services'
}) => {

  // Определяем тип расположения контента - текст располагается справа или слева
  const containerType = {
    picFirst: styles.container_picFirst, // текст слева, картинка идет первая
    textFirst: styles.container_textFirst // текст справа, картинка идет вторая
  };
  // Селектор выбранного контейнера для контента
  const selectedContainerType = containerType[containerTemplate];


  const sizes = {
    container: {
      small: styles.container_smallSize, // маленький контейнер на 1/2 экрана
      big: styles.container_bigSize // большой контейнер на весь экран
    },
    image: {
      small: styles.image_smallSize, // маленькая картинка
      big: styles.image_bigSize // большая картинка
    },
    sizes: {
      small: '(max-width: 1920px) 390px',
      big: '(max-width: 1920px) 100%'
    }
  };
  // Селектор выбранного контейнера для контента
  const setContainerSize = sizes.container[containerSize];
  const setImageSizeContainer = sizes.image[containerSize];
  const setImageSize = sizes.sizes[containerSize];


  return (
    <div className={`${styles.container} ${setContainerSize} ${selectedContainerType} `}>

      <div className={styles.imageContainer}>
        {image &&
          <Image
            className={`${styles.image} ${setImageSizeContainer}`}
            src={image}
            alt={title}
            fill={true}
            sizes={setImageSize} />}
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

export default ServiceCard;
