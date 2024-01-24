import React from 'react';
import styles from './PartnersBlock.module.scss';
import { PartnersBlockInterface } from './PartnersBlock.interface.ts';
import { TeamMemberComponent } from '~common/index.ts';


const PartnersBlock: React.FC<PartnersBlockInterface> = ({ employeesData }) => {
  return (
    <section className={styles.wrapper}>
      <TeamMemberComponent employeesData={employeesData} teamRole={'owner'} />
    </section>
  );
};

export { PartnersBlock };
