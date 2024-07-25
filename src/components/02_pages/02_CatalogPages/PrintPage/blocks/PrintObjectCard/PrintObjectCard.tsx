import React from 'react';
import styles from './PrintObjectCard.module.scss';
import { PrintObjectCardInterface } from './PrintObjectCard.interface';
import { CommonInfoInner } from '~pages/02_CatalogPages/CardPage/blocks/CardInfoBlock/elements/InfoContainer/modules';
import { AddressPrintComponent, MarginPrintComponent, PhotoForPrintComponent } from './elements';


const PrintObjectCard: React.FC<PrintObjectCardInterface> = ({ objectData, agentData }) => {
  return (

    <table className={styles.outsideContainer}>
      <thead>
        <MarginPrintComponent />
      </thead>
      <tbody className={styles.innerContainer}>
        <tr>
          <AddressPrintComponent objectData={objectData} />
        </tr>
        <tr>

          <PhotoForPrintComponent objectData={objectData} agentData={agentData} />

        </tr>
        {objectData.object_description && (
          <tr className={styles.commonInfoTr}>
            <td className={styles.commonInfoContainer}>

              <CommonInfoInner data={objectData} />

            </td>
          </tr>
        )}
      </tbody>
    </table>

  );
};

export { PrintObjectCard };
