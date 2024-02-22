import React from 'react';
import Image from 'next/image';

import { TeamMemberCardProps } from './TeamMemberCard.props';
import styles from './TeamMemberCard.module.scss';
import { ContactInfoElement } from '../ContactInfoElement/ContactInfoElement';

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ employeeItem, index, countUsers }) => {

  const styleItems = {
    oddStyles: {
      color: styles.green,
      template: '',
    },
    evenStyles: {
      color: styles.gray,
      template: styles.innerBlock_textFirst
    }
  };



  const isOdd = (num: number) => num % 2 !== 0;

  const setColor = isOdd(index + 1) ? styleItems.oddStyles.color : styleItems.evenStyles.color;
  const setTemplate = isOdd(index + 1) ? styleItems.oddStyles.template : styleItems.evenStyles.template;


  const quoteElement = (
    employeeItem.description &&
    <>
      <div className={styles.quoteContainer}>
        <span className={styles.quotationMark}>
          “
        </span>
        <p className={styles.quoteText}>
          {employeeItem.description}
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
          height={800} />

        <div className={styles.infoContainer}>
          <h3 className={styles.name}>
            {`${employeeItem.first_name} ${employeeItem.last_name}`}
          </h3>

          <p className={styles.jobTitle}>
            {employeeItem.job_title}
          </p>


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
