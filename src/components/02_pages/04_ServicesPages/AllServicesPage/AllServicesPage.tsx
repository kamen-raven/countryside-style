import React from 'react';
import styles from './AllServicesPage.module.scss';
import { AllServicesPageInterface } from './AllServicesPage.interface.ts';
import { CallToActionBlock, StatisticInfoBlock, QuestionsInfoBlock, ServicesListBlock, PartnersBlock, QuestionFormBlock_ServicePage } from './blocks/index.ts';

const AllServicesPage: React.FC<AllServicesPageInterface> = ({ servicesListData, employeesData, questionsList, statIndicatorsList }) => {
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

export { AllServicesPage };
