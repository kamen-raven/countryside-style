import React from 'react';
import styles from './AllServicesPage.module.scss';
import { AllServicesPageInterface } from './AllServicesPage.interface.ts';
import { ServicesListBlock, QuestionsInfoBlock, StatisticInfoBlock, CallToActionBlock, QuestionFormBlock_ServicePage } from './blocks/index.ts';
import { TeamMembersBlock } from '~common/index.ts';

const AllServicesPage: React.FC<AllServicesPageInterface> = ({ servicesListData, employeesData, questionsList, statIndicatorsList }) => {
    return (
        <main className = {styles.mainContainer}>
          <ServicesListBlock servicesListData={servicesListData} />
          <QuestionsInfoBlock questionsList={questionsList}/>
          <StatisticInfoBlock statIndicatorsList={statIndicatorsList} />
          <CallToActionBlock />
          <TeamMembersBlock employeesData={employeesData} teamRole={'owner'} />
          <QuestionFormBlock_ServicePage />
        </main>
    );
};

export { AllServicesPage };
