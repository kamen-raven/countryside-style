import React from 'react';
import styles from './StoriesCardElement.module.scss';
import { StoriesCardElementInterface } from './StoriesCardElement.interface.ts';


const StoriesCardElement: React.FC<StoriesCardElementInterface> = () => {
    return (
        <div className = {styles.storyContainer}>
          <p>тут будет сториз с услугами</p>
        </div>
    );
};

export { StoriesCardElement };
