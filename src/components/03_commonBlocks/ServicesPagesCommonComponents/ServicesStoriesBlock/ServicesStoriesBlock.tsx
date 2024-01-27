import React from 'react';
import styles from './ServicesStoriesBlock.module.scss';
import { ServicesStoriesBlockInterface } from './ServicesStoriesBlock.interface.ts';
import { StoriesCardElement } from './elements/index.ts';


const ServicesStoriesBlock: React.FC<ServicesStoriesBlockInterface> = ({  }) => {
    return (
        <section className = {styles.wrapper}>
            <h2 className = {styles.title}>
            Услуги
            </h2>

            <div className = {styles.innerContainer}>
              <StoriesCardElement/>
              <StoriesCardElement/>
              <StoriesCardElement/>
              

            </div>
        </section>
    );
};

export { ServicesStoriesBlock };
