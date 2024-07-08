import React from 'react';
import Image from 'next/image';

import styles from './PrintPhotoComponent.module.scss';
import { PrintPhotoComponentInterface } from './PrintPhotoComponent.interface';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray';


const PrintPhotoComponent: React.FC<PrintPhotoComponentInterface> = ({ data }) => {
  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(data);

    return (
      <>
      {picturesArray.length &&
        <div className={`${styles.print} ${styles.print__container}`}>
          <Image
            className={`${styles.print} ${styles.print__image}`}
            src={picturesArray[0].image}
            alt={data.name}
            width={320}
            height={240}
            priority={true}
            /*               onClick={() => console.log('click photo!!')} */
            />
          <div className={`${styles.print} ${styles.print__info}`}>wtyf</div>
        </div>
      }
      </>

    );
};

export { PrintPhotoComponent };
