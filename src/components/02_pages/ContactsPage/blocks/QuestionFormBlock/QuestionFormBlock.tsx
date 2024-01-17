import React from 'react';
import styles from './QuestionFormBlock.module.scss';
import { HalfScreenTemplate, RequestFormComponent } from '~entities/index.ts';


const QuestionFormBlock: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.containerForm}>
          <HalfScreenTemplate conditionColor={"dark"} conditionTemplate={'textFirst'}>
            <div className={styles.wrapperInner}>
              <iframe className={styles.yandexMap} src="https://yandex.ru/map-widget/v1/?um=constructor%3A82d4640cfff3946c64d9620d25ce191b0ca06b56eea9ee8a0ad636757cd19e55&amp;source=constructor" ></iframe>
            </div>
            <div className={styles.wrapperForm}>
              <RequestFormComponent />
            </div>
          </HalfScreenTemplate>
        </div>
      </div>

    </section>
  );
};

export { QuestionFormBlock };
