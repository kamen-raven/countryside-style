import React from 'react';
import styles from './ServicesPage.module.scss';
import { ServicesPageInterface } from './ServicesPage.interface.ts';
import { CallToActionBlock, FactsInfoBlock, QuestionsInfoBlock, ServicesListBlock } from './blocks/index.ts';


const ServicesPage: React.FC<ServicesPageInterface> = ({ employeesData }) => {
    return (
        <main className = {styles.mainContainer}>
          <ServicesListBlock />
          <QuestionsInfoBlock/>
          <FactsInfoBlock/>
          <CallToActionBlock/>
          
        </main>
    );
};

export { ServicesPage };
