import React from 'react';
import { TeamBlockProps } from './TeamBlock.props';
import styles from './TeamBlock.module.scss';
import { TeamMemberComponent } from '~common/index';



const TeamBlock: React.FC<TeamBlockProps> = ({ teamMembersItems }) => {


  return (
    <section className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <TeamMemberComponent employeesData={teamMembersItems} teamRole={'owner'} />
      </div>
    </section>
  );
};

export { TeamBlock };
