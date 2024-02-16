import React from 'react';
import styles from './ReviewFormPopup.module.scss';
import { ReviewFormPopupInterface } from './ReviewFormPopup.interface.ts';
import { ReviewFormComponent } from '~features/Forms/index.ts';

const ReviewFormPopup: React.FC<ReviewFormPopupInterface> = ({  }) => {
    return (
      <div className = {styles.innerContainer}>
        <ReviewFormComponent/>
      </div>
    );
};

export { ReviewFormPopup };
