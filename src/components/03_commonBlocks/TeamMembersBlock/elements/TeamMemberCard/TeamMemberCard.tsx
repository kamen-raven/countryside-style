import React from 'react';
import Image from 'next/image';

import { TeamMemberCardProps } from './TeamMemberCard.props';
import styles from './TeamMemberCard.module.scss';
import { ContactInfoElement } from '../ContactInfoElement/ContactInfoElement';
import getOwnerTextToPage from '~helpers/users/getOwnerTextToPage';
import ownersText from '~data/constant/teamInfo/ownersText';

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ employeeItem, index, countUsers, page }) => {

  // определяем стили для отображения спика карточек команды
  const styleItems = {
    oddStyles: {
      color: styles.green,
      template: '',
      infoContainer: '',
    },
    evenStyles: {
      color: styles.gray,
      template: styles.innerBlock_textFirst,
      infoContainer: styles.infoContainer_textFirst,
    }
  };




  // проверка на четность и нечетность карточки по счету
  const isOdd = (num: number) => num % 2 !== 0;
  // и задаем соответствующие цвета в зависимости от четности/нечетности карточки
  const setColor = isOdd(index + 1) ? styleItems.oddStyles.color : styleItems.evenStyles.color;
  const setTemplate = isOdd(index + 1) ? styleItems.oddStyles.template : styleItems.evenStyles.template;
  const setInfoContainer = isOdd(index + 1) ? styleItems.oddStyles.infoContainer : styleItems.evenStyles.infoContainer;

  // определяем текст с цитатой сотрудника для карточки
  const descriptionText = getOwnerTextToPage(ownersText, employeeItem, page);

  // тут мы формируем элемент цитаты, который будем отображать ниже
  const quoteElement = (
    descriptionText &&
    <>
      <div className={styles.quoteContainer}>
        <span className={styles.quotationMark}>
          “
        </span>
        <p className={styles.quoteText}>
          {descriptionText}
        </p>
      </div>
    </>
  );



  return (
    <div className={`${styles.container}  ${setColor}`}>
      <div className={`${styles.innerBlock} ${setTemplate}`}>
        <Image className={styles.image}
          src={employeeItem.avatars[0].image}   //! сделана первая фотография сотрудника
          alt={`${employeeItem.first_name} + ${employeeItem.last_name}`}
          width={800}
          height={800}
          />


        <div className={`${styles.infoContainer} ${setInfoContainer}`}>
          <h3 className={styles.name}>
            {`${employeeItem.first_name} ${employeeItem.last_name}`}
          </h3>

          <p className={styles.jobTitle}>
            {employeeItem.job_title}
          </p>

          {/* при отображении всех сотрудников мы отображаем также их контактные данные */}
          {(countUsers == 'employee' || countUsers == 'all') ?
            <ContactInfoElement employeeItem={employeeItem}>
              {quoteElement}
            </ContactInfoElement>
            :
            quoteElement
          }
        </div>
      </div>
    </div>
  );
};

export { TeamMemberCard };
