import React from 'react';
import styles from './QuestionItem.module.scss';
import { QuestionItemInterface } from './QuestionItem.interface.ts';

import QuestionIcon from '~svg/icons/question.svg';


const QuestionItem: React.FC<QuestionItemInterface> = ({ questionItem }) => {
    return (
      <div className={styles.questionItem}>
      <div className={styles.questionItem__iconContainer}>
        <QuestionIcon />
      </div>
      <p className={styles.questionItem__question}>
        {questionItem.question}
      </p>
    </div>
    );
};

export { QuestionItem };
