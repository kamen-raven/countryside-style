import React from 'react';
import styles from './AboutUsPage.module.scss';
import { AboutUsPageInterface } from './AboutUsPage.interface';

import { AboutCompanyBlock, PartnersBlock, VideoBlock, AdvantagesBlock, OurTeamBlock } from './blocks';


const AboutUsPage: React.FC<AboutUsPageInterface> = ({ employeesData }) => {

  return (
    <main className={styles.mainContainer}>
      <AboutCompanyBlock />
      <PartnersBlock employeesData={employeesData} />
      <VideoBlock />
      <AdvantagesBlock />
      <OurTeamBlock employeesData={employeesData} />
    </main>
  );
};

export { AboutUsPage };
