import React from 'react';
import styles from './PrintObjectCard.module.scss';
import { PrintObjectCardInterface } from './PrintObjectCard.interface';
import { CommonInfoInner } from '~pages/02_CatalogPages/CardPage/blocks/CardInfoBlock/elements/InfoContainer/modules';
import { AddressPrintComponent, CharacteristicsPrintComponent, MarginPrintComponent, PhotoForPrintComponent } from './elements';


const PrintObjectCard: React.FC<PrintObjectCardInterface> = ({ objectData, agentData }) => {
  return (

    <table className={styles.outsideContainer}>
      <thead className={styles.printTableHeader}>
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
{/* <div className={`${styles.outsideContainer}`}>
<MarginPrintComponent />
<div className={styles.innerContainer}>


<AddressPrintComponent objectData={objectData} />
<PhotoForPrintComponent objectData={objectData} agentData={agentData} />
<CharacteristicsPrintComponent objectData={objectData} />
{/*         <AgentContactsPrint agentData={agentData}/> */}

/*
{objectData.object_description &&
  <div className={styles.commonInfoContainer}>
    <CommonInfoInner data={objectData} />
  </div>
}

</div>
</div>
 */
