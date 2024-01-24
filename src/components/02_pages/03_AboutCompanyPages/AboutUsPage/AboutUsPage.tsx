import React from 'react';
import styles from './AboutUsPage.module.scss';
import { AboutUsPageInterface } from './AboutUsPage.interface';

import { AboutCompanyBlock, PartnersBlock, VideoBlock, OurTeamBlock } from './blocks';
import { AdvantagesBlock } from '~common/index';


const AboutUsPage: React.FC<AboutUsPageInterface> = ({
  employeesData,
  advantagesListData,
  aboutUsPageFacts
}) => {

  return (
    <main className={styles.mainContainer}>
      <AboutCompanyBlock aboutUsPageFacts={aboutUsPageFacts} />
      <PartnersBlock employeesData={employeesData} />
      <VideoBlock />
      <AdvantagesBlock title='Наши преимущества'
        background={false}
        advantagesList={advantagesListData} />
      <OurTeamBlock employeesData={employeesData} />
    </main>
  );
};

export { AboutUsPage };
