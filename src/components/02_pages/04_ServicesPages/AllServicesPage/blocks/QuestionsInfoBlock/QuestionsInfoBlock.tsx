import React from 'react';
import styles from './QuestionsInfoBlock.module.scss';
import { QuestionsInfoBlockInterface } from './QuestionsInfoBlock.interface.ts';
import { QuestionItem } from './elements/index.ts';


const QuestionsInfoBlock: React.FC<QuestionsInfoBlockInterface> = ({ questionsList }) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Загородный стиль
        </h2>
        <p className={styles.description}>
          Это специализированное агентство по&nbsp;загородной недвижимости
          Мы предоставляем полный комплекс услуг в&nbsp;сфере продажи и&nbsp;покупки загородных участков,
          домов и&nbsp;коттеджей в&nbsp;Ленинградской области.
        </p>
        <p className={styles.descriptionAction}>
          Хотите продать или купить недвижимость?
          Обращайтесь к&nbsp;профессионалам – с&nbsp;удовольствием поможем!
        </p>
        <div className={styles.questionsContainer}>
          {questionsList && questionsList.map((question) => {
            return <QuestionItem key={question._id} questionItem={question} />;
          })}
        </div>
      </div>
    </section>
  );
};

export { QuestionsInfoBlock };
