import React from 'react';
import Image from 'next/image';
import styles from './PhotoForPrintComponent.module.scss';
import { PhotoForPrintComponentInterface } from './PhotoForPrintComponent.interface';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray';


const PhotoForPrintComponent: React.FC<PhotoForPrintComponentInterface> = ({ objectData }) => {
  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(objectData);

  return (
    <>



      {picturesArray.length &&
        <div className={`${styles.print} ${styles.print__container}`}>
          <div className = {styles.imageContainer}>

          <Image
            className={`${styles.print} ${styles.print__image}`}
            src={picturesArray[0].image}
            alt={objectData.name}
            width={320}
            height={240}
            priority={true}
            /*               onClick={() => console.log('click photo!!')} */
          />
            </div>
          <div className={`${styles.print} ${styles.print__info}`}>
            <p>
              COST
            </p>
          </div>
        </div>
      }
    </>

  );
};

export { PhotoForPrintComponent };
