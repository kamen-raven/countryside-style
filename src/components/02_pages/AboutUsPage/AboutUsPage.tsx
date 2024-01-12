import React from 'react';
import styles from './AboutUsPage.module.scss';
import { AboutUsPageInterface } from './AboutUsPage.interface';

import { AboutCompanyBlock, PartnersBlock, VideoBlock, AdvantagesBlock, OurTeamBlock } from './blocks';


const AboutUsPage: React.FC<AboutUsPageInterface> = ({ data }) => {

  return (
    <main className={styles.mainContainer}>
      <AboutCompanyBlock />
      <PartnersBlock data={data} />
      <VideoBlock />
      <AdvantagesBlock />
      <OurTeamBlock data={data} />
    </main>
  );
};

export { AboutUsPage };
