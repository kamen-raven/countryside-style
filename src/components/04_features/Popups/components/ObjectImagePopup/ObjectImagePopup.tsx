'use client';

import React from 'react';
import styles from './ObjectImagePopup.module.scss';

import Image from 'next/image';
import useObjectPhotoStore from '~store/objectsCardStore/useObjectPhotoStore';

import useObjectImagePopupStore from '~store/popupsStore/useObjectImagePopupStore.ts';
import { ArrowsButton } from '~shared/index';


const ObjectImagePopup: React.FC = () => {


  const picsData = useObjectImagePopupStore((state) => state.picturesArray);

  const { activePhoto,
    actions: {
      nextPhoto,
      prevPhoto,
    }
  } = useObjectPhotoStore();




  return (
    <div className={styles.innerContainer}>
      {picsData &&
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src={picsData[activePhoto].image}
            alt={`Photo ${picsData[activePhoto].uuid}`}
            width={880}
            height={740}
            priority={true}
          />
          <>
            {(picsData.length > 0) &&
              <>
                <ArrowsButton
                  type='inImg'
                  position={'left'}
                  onClick={() => prevPhoto(picsData.length)}
                  className={`${styles.arrowNavigate} ${styles.arrowNavigate_left}`}
                />
                <ArrowsButton
                  type='inImg'
                  position={'right'}
                  onClick={() => nextPhoto(picsData.length)}
                  className={`${styles.arrowNavigate} ${styles.arrowNavigate_right}`}
                />
              </>
            }
          </>
        </div>
      }

      <div className={styles.countPic}>
        <p className = {styles.counter}>{activePhoto + 1} / {picsData.length}</p>
      </div>

    </div>
  );
};

export { ObjectImagePopup };
