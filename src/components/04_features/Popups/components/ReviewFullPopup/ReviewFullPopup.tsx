import React from 'react';
import styles from './ReviewFullPopup.module.scss';
import { ReviewFullPopupInterface } from './ReviewFullPopup.interface.ts';
import { ReviewCardFull } from '~common/ReviewsBlock/components';
import { getAllReviews } from '~api/Reviews/getReviews.tsx';


const ReviewFullPopup: React.FC<ReviewFullPopupInterface> = async ({  }) => {

  const reviews = await getAllReviews();

  const result = reviews.find(function isReview(element) {
    return element.author_name === 'Mark Avrelii Augustin Blessed Vinsent Vag Gogue Hugo Boss Adriano Chillentano The Great';
  });

    return (
        <div className = {styles.innerContainer}>
          {result && <ReviewCardFull data={result}/>}
        </div>
    );
};

export { ReviewFullPopup };
