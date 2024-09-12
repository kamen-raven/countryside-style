import React from 'react';
import styles from './AboutUsPage.module.scss';
import { AboutUsPageInterface } from './AboutUsPage.interface';

import { AboutCompanyBlock, OurTeamBlock } from './blocks';
import { AdvantagesBlock, TeamMembersBlock } from '~common/index';


const AboutUsPage: React.FC<AboutUsPageInterface> = ({
  employeesData,
  advantagesListData,
  aboutUsPageFacts
}) => {

  return (
    <main className={styles.mainContainer}>
      <AboutCompanyBlock aboutUsPageFacts={aboutUsPageFacts} />
      <TeamMembersBlock employeesData={employeesData} countUsers={'owner'} page={'about'} />
{/*       <VideoBlock /> */} {/* видео скрыто до обновления ролика */}
      <AdvantagesBlock title='Наши преимущества'
        background={false}
        advantagesList={advantagesListData} />
      <OurTeamBlock employeesData={employeesData} />
    </main>
  );
};

export { AboutUsPage };
