import React from 'react';
import styles from './PricePrintElement.module.scss';
import { PricePrintElementInterface } from './PricePrintElement.interface';


const PricePrintElement: React.FC<PricePrintElementInterface> = ({ objectData, typePage }) => {
  return (
    <div className={styles.price}>
      {typePage !== "villages" ?
        (objectData.price &&   /* //? для объектов */
          <>
            {`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
          </>)
        :
        (objectData.price &&  /*  //? для коттеджей */
          <>
            от&nbsp;{`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
          </>)
      }
    </div>

  );
};

export { PricePrintElement };
