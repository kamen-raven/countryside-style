import React from 'react';
import styles from './ReviewsCreateFormBlock.module.scss';
import { ReviewsCreateFormBlockInterface } from './ReviewsCreateFormBlock.interface.ts';
import { ContactFormLayout } from '~common/QuestionFormBlock/elements';
import { ReviewFormComponent } from '~entities/index';

import ReviewsImg from '~img/common-images/reviewsTextImg.jpg';

const ReviewsCreateFormBlock: React.FC<ReviewsCreateFormBlockInterface> = ({ }) => {
  return (
    <section className={styles.wrapper}>
      <ContactFormLayout contentType='image' imgContent={ReviewsImg}>
        <ReviewFormComponent />
      </ContactFormLayout>
    </section>
  );
};

export { ReviewsCreateFormBlock };
