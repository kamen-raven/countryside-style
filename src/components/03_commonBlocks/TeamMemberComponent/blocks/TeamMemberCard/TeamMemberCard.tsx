import React from 'react';
import Image from 'next/image';

import { TeamMemberCardProps } from './TeamMemberCard.props';
import styles from './TeamMemberCard.module.scss';
import { ContactInfoElement } from './elements';


const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ employeeItem }) => {

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

  const setColor = isOdd(employeeItem._id) ? styleItems.oddStyles.color : styleItems.evenStyles.color;
  const setTemplate = isOdd(employeeItem._id) ? styleItems.oddStyles.template : styleItems.evenStyles.template;


  const quoteElement = (
    <div className={styles.quoteContainer}>
      <span className={styles.quotationMark}>
        “
      </span>
      <p className={styles.quoteText}>
        {employeeItem.quote}
      </p>
    </div>
  );



  return (
    <>
      {/*       <div className={`${setColor}`}></div> */}
      <div className={`${styles.container}  ${setColor}`}>
        <div className={`${styles.innerBlock} ${setTemplate}`}>
          <div className={styles.imageContainer}>
            <Image className={styles.image}
              src={employeeItem.photo}
              alt={''} />
          </div>

          <div className={styles.infoContainer}>
            <h3 className={styles.name}>
              {employeeItem.name}
            </h3>

            <p className={styles.jobTitle}>
              {employeeItem.jobTitle}
            </p>

            {employeeItem.role == 'employee' ?
              <ContactInfoElement employeeItem={employeeItem}>
                {quoteElement}
              </ContactInfoElement>
              :
              quoteElement
            }
          </div>
        </div>
      </div>
      {/*       <div className={`${setColor}`}></div> */}


    </>
  );
};

export { TeamMemberCard };
