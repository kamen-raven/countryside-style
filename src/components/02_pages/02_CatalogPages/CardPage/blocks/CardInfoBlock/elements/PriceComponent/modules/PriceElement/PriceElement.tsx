import React from 'react';
import styles from './PriceElement.module.scss';
import { PriceElementInterface } from './PriceElement.interface.ts';

const PriceElement: React.FC<PriceElementInterface> = ({ objectData, typePage }) => {
/*   const [showNum, setShowNum] = useState(false);
 */

/*   const showNumber = () => {
    if (!showNum) {
      return (
        <button className={`${styles.button} ${styles.button__call}`}
          onClick={showNumberHandler}>
          Показать номер
        </button>
      );
    } else {
      return (
        <div className={styles.numberContainer}>
          {agentData.phone_number &&
            <Link className={styles.telNumber}
              href={`tel: ${agentData.phone_number}`}>
              {formatPhoneNumber(agentData.phone_number)}
            </Link>
          }
          <p className={styles.telInfo}>
            Номер только для звонков, сообщения не дойдут.
            Если захотите оставить жалобу, напишите нам.
          </p>
        </div>
      );
    }
  }; */

/*   const showNumberHandler = () => {
    setShowNum(!showNum);
  }; */

  return (
    <div className={styles.priceElement}>
      {/* //* ЦЕНА */}
      {typePage !== "villages" ?
        (objectData.price &&   /* //? для объектов */
          <h3 className={styles.cost}>
            {`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
          </h3>)
        :
        (objectData.price &&  /*  //? для коттеджей */
          <h3 className={styles.cost}>
            от&nbsp;{`${(objectData.price / 1000000).toLocaleString('ru-RU')}`}&nbsp;млн.&nbsp;руб.
          </h3>)
      }

      <p className={styles.idNum}>
        ID {objectData.id}
      </p>
{/*       <div className={styles.buttonContainer}>

        {showNumber()}

        <OpenPopupButton className={`${styles.button} ${styles.button_write}`}
          type={'contactForm'}>
          Написать
        </OpenPopupButton>
      </div> */}
    </div>
  );
};

export { PriceElement };
