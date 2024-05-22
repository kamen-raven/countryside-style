import React from 'react';
import Image from 'next/image';
import styles from './VillagesProjectCard.module.scss';
import { VillagesProjectCardInterface } from './VillagesProjectCard.interface.ts';
import Link from 'next/link';


const VillagesProjectCard: React.FC<VillagesProjectCardInterface> = ({ project, index }) => {
  const styleItems = {
    oddStyles: {
      color: styles.gray,
      template: styles.innerBlock_textFirst
    },
    evenStyles: {
      color: styles.green,
      template: '',
    }
  };

  const isOdd = (num: number) => num % 2 !== 0;

  const setColor = isOdd(index + 1) ? styleItems.oddStyles.color : styleItems.evenStyles.color;
  const setTemplate = isOdd(index + 1) ? styleItems.oddStyles.template : styleItems.evenStyles.template;


  return (
    <div className={`${styles.container}  ${setColor}`}>
      <div className={`${styles.innerBlock} ${setTemplate}`}>
        <Image className={styles.image}
          src={project.image}
          alt={project.name} />


        <div className={styles.infoContainer}>
          <h3 className={styles.name}>
            {project.name}
          </h3>

          <p className={styles.description}>
            {project.description}
          </p>
          {project.link.url &&
            <Link className={styles.buttonLink}
              href={project.link.url}
              target='_blank'
              rel="noopener noreferrer"
            >
              {project.link.buttonText}
            </Link>
          }
          {/*           {(countUsers == 'employee' || countUsers == 'all') ?
            <ContactInfoElement employeeItem={employeeItem}>
              {quoteElement}
            </ContactInfoElement>
            :
            quoteElement
          } */}
        </div>
      </div>
    </div>
  );
};

export { VillagesProjectCard };
