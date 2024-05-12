import React from 'react';
import styles from './ReviewFormPopup.module.scss';
import { ReviewFormComponent } from '~features/Forms/index.ts';

const ReviewFormPopup = () => {
    return (
      <div className = {styles.innerContainer}>
        <ReviewFormComponent className={styles.popupForm} />
      </div>
    );
};

export { ReviewFormPopup };
