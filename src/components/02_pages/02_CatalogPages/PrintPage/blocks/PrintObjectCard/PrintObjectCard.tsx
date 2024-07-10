import React from 'react';
import styles from './PrintObjectCard.module.scss';
import { PrintObjectCardInterface } from './PrintObjectCard.interface';
import { CommonInfoInner } from '~pages/02_CatalogPages/CardPage/blocks/CardInfoBlock/elements/InfoContainer/modules';
import { PhotoForPrintComponent } from './elements';


const PrintObjectCard: React.FC<PrintObjectCardInterface> = ({ objectData, agentData }) => {
  return (
    <div className={`${styles.outsideContainer}`}>
      <div className={styles.innerContainer}>

        <PhotoForPrintComponent objectData={objectData} />

        {objectData.object_description &&
          <div className={styles.commonInfoContainer}>
            <CommonInfoInner data={objectData} />
          </div>
        }

      </div>
    </div>
  );
};

export { PrintObjectCard };
