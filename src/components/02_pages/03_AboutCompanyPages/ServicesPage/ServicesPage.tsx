import React from 'react';
import styles from './ServicesPage.module.scss';
import { ServicesPageInterface } from './ServicesPage.interface.ts';
import { CallToActionBlock, StatisticInfoBlock, QuestionsInfoBlock, ServicesListBlock, PartnersBlock, QuestionFormBlock_ServicePage } from './blocks/index.ts';

const ServicesPage: React.FC<ServicesPageInterface> = ({ servicesListData, employeesData, questionsList, statIndicatorsList }) => {
    return (
        <main className = {styles.mainContainer}>
          <ServicesListBlock servicesListData={servicesListData} />
          <QuestionsInfoBlock questionsList={questionsList}/>
          <StatisticInfoBlock statIndicatorsList={statIndicatorsList} />
          <CallToActionBlock />
          <PartnersBlock employeesData={employeesData} />
          <QuestionFormBlock_ServicePage />
        </main>
    );
};

export { ServicesPage };
