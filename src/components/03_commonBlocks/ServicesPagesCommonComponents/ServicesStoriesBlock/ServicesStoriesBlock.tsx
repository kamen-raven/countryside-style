import React from 'react';
import styles from './ServicesStoriesBlock.module.scss';
import { ServicesStoriesBlockInterface } from './ServicesStoriesBlock.interface.ts';
import { StoriesCardElement } from './elements/index.ts';


const ServicesStoriesBlock: React.FC<ServicesStoriesBlockInterface> = ({ servicesCardsData }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Услуги
        </h2>

        <div className={styles.innerContainer}>
          {servicesCardsData.map((card) => (
            <StoriesCardElement key={card._id} servicesCard={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServicesStoriesBlock };
