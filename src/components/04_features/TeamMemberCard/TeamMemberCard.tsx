import React from 'react';
import Image from 'next/image';

import { TeamMemberCardProps } from './TeamMemberCard.props';
import styles from './TeamMemberCard.module.scss';


const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ data }) => {

  const styleItems = {
    oddStyles: {
      color: styles.container_bg_green,
      template: '',
    },
    evenStyles: {
      color: styles.container_bg_gray,
      template: styles.innerBlock_textFirst
    }
  };



  const isOdd = (num: number) => num % 2 !== 0;

  const setColor = isOdd(data._id) ? styleItems.oddStyles.color : styleItems.evenStyles.color;
  const setTemplate = isOdd(data._id) ? styleItems.oddStyles.template : styleItems.evenStyles.template;

  return (
    <>
      <div className={`${setColor}`}></div>
      <div className={`${styles.container}  ${setColor}`}>
        <div className={`${styles.innerBlock} ${setTemplate}`}>
          <div className={styles.imageContainer}>
            <Image className={styles.image}
              src={data.photo}
              alt={''} />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.name}>
              {data.name}
            </h3>
            <p className={styles.jobTitle}>
              {data.jobTitle}
            </p>
            <div className={styles.quoteContainer}>
              <div className={styles.quotationMark}>
                “
              </div>
              <p className={styles.quoteText}>
                {data.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${setColor}`}></div>


    </>
  );
};

export { TeamMemberCard };
