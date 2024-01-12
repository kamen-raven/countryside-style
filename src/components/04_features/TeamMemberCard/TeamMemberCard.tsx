import React from 'react';
import Image from 'next/image';

import { TeamMemberCardProps } from './TeamMemberCard.props';
import styles from './TeamMemberCard.module.scss';
import { ContactInfoElement } from './elements';


const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ data }) => {

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

  const setColor = isOdd(data._id) ? styleItems.oddStyles.color : styleItems.evenStyles.color;
  const setTemplate = isOdd(data._id) ? styleItems.oddStyles.template : styleItems.evenStyles.template;


  const quoteElement = (
    <div className={styles.quoteContainer}>
      <span className={styles.quotationMark}>
        “
      </span>
      <p className={styles.quoteText}>
        {data.quote}
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

            {data.role == 'employee' ?
              <ContactInfoElement data={data}
                                  containerColor={setColor}>
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
