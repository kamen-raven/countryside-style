'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PhotoForPrintComponent.module.scss';
import { PhotoForPrintComponentInterface } from './PhotoForPrintComponent.interface';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray';
import { usePathname } from 'next/navigation';
import { AgentContactsPrint } from '../AgentContactsPrint/AgentContactsPrint';


const PhotoForPrintComponent: React.FC<PhotoForPrintComponentInterface> = ({ objectData, agentData }) => {
  const pathname = usePathname();
  const typePage = pathname.split('/')[1];
  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(objectData);


  return (
    <>
      {picturesArray.length &&
        <div className={`${styles.infoContainer}`}>
          <div className={styles.imageContainer}>

            <Image
              className={`${styles.image}`}
              src={picturesArray[0].image}
              alt={objectData.name}
              width={320}
              height={240}
              priority={true}
            /*               onClick={() => console.log('click photo!!')} */
            />
          </div>
          <div className={`${styles.innerContainer}`}>

            <AgentContactsPrint agentData={agentData}/>


            <p className={styles.price}>
              {/* //* ЦЕНА */}
              {typePage !== "villages" ?
                (objectData.price &&   /* //? для объектов */
                  <>
                    Цена:&nbsp;
                    <span className={styles.info_span}>
                    {`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
                    </span>
                  </>)
                :
                (objectData.price &&  /*  //? для коттеджей */
                  <>
                    от&nbsp;{`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
                  </>)
              }
            </p>

          </div>
        </div>
      }
    </>

  );
};

export { PhotoForPrintComponent };
