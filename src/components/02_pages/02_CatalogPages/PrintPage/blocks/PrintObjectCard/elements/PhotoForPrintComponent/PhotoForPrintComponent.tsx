'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PhotoForPrintComponent.module.scss';
import { PhotoForPrintComponentInterface } from './PhotoForPrintComponent.interface';
import formatPhotosArray from '~helpers/formatters/formatPhotosArray';
import { usePathname } from 'next/navigation';
import { AgentContactsPrintElement } from '../AgentContactsPrintElement/AgentContactsPrintElement';
import { PricePrintElement } from '../PricePrintElement/PricePrintElement';
import { CharacteristicsPrintElement } from '../CharacteristicsPrintElement/CharacteristicsPrintElement';

const PhotoForPrintComponent: React.FC<PhotoForPrintComponentInterface> = ({ objectData, agentData }) => {
  const pathname = usePathname();
  const typePage = pathname.split('/')[1];
  // весь массив фотографий и планов объекта
  const picturesArray = formatPhotosArray(objectData);


  return (
    <>
      <td className={`${styles.infoContainer}`}>
        {picturesArray.length &&
          <div className={styles.imageContainer}>
            <Image
              className={`${styles.image}`}
              src={picturesArray[0].image}
              alt={objectData.name}
              width={640}
              height={480}
              /* priority={true} */
            /*               onClick={() => console.log('click photo!!')} */
            />
          </div>
        }
        <div className={`${styles.innerContainer}`}>
          <div className={styles.sellerInfo}>
            <AgentContactsPrintElement agentData={agentData} />
            <PricePrintElement objectData={objectData} typePage={typePage} />
          </div>


          <CharacteristicsPrintElement objectData={objectData} />

        </div>
      </td>

    </>

  );
};

export { PhotoForPrintComponent };
