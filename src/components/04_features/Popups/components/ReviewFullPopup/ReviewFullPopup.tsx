'use client';
import React from 'react';
import styles from './ReviewFullPopup.module.scss';
import { ReviewCardFull } from '~common/ReviewsBlock/components';
import useReviewPopupStore from '~store/popupsStore/useReviewPopupStore';


const ReviewFullPopup: React.FC = () => {
  const popupData = useReviewPopupStore((state) => state.popupData);

    return (
        <div className = {styles.innerContainer}>
          {popupData && <ReviewCardFull data={popupData}/>}
        </div>
    );
};

export { ReviewFullPopup };
