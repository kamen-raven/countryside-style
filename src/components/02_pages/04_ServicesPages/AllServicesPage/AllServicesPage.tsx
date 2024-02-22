import React from 'react';
import styles from './AllServicesPage.module.scss';
import { AllServicesPageInterface } from './AllServicesPage.interface.ts';
import { ServicesListBlock, QuestionsInfoBlock, StatisticInfoBlock, CallToActionBlock } from './blocks/index.ts';
import { QuestionFormBlock, TeamMembersBlock } from '~common/index.ts';


const AllServicesPage: React.FC<AllServicesPageInterface> = ({ servicesListData, employeesData, questionsList, statIndicatorsList }) => {
  return (
    <main className={styles.mainContainer}>
      <ServicesListBlock servicesListData={servicesListData} />
      <QuestionsInfoBlock questionsList={questionsList} />
      <StatisticInfoBlock statIndicatorsList={statIndicatorsList} />
      <CallToActionBlock />
      <TeamMembersBlock employeesData={employeesData} countUsers={'owner'} />
      <QuestionFormBlock contentType={'image'}
        direction={'formFirst'} />
    </main>
  );
};

export { AllServicesPage };
