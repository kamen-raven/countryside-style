import React from 'react';
import styles from './ServicesPage.module.scss';
import { ServicesPageInterface } from './ServicesPage.interface.ts';
import { CallToActionBlock, StatisticInfoBlock, QuestionsInfoBlock, ServicesListBlock } from './blocks/index.ts';

const ServicesPage: React.FC<ServicesPageInterface> = ({ employeesData, questionsList, statIndicatorsList }) => {
    return (
        <main className = {styles.mainContainer}>
          <ServicesListBlock />
          <QuestionsInfoBlock questionsList={questionsList}/>
          <StatisticInfoBlock statIndicatorsList={statIndicatorsList} />
          <CallToActionBlock/>
        </main>
    );
};

export { ServicesPage };
