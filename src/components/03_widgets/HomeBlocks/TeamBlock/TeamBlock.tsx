import React from 'react';
import { TeamBlockProps } from './TeamBlock.props';
import styles from './TeamBlock.module.scss';
import { TeamMemberCard } from '~features/index';



const TeamBlock: React.FC<TeamBlockProps> = ({ teamMembersItems }) => {


  return (
    <section className={styles.wrapper}>
      <div className={styles.contentContainer}>
        {teamMembersItems && teamMembersItems.map(item => {
          if (item.role == 'owner') {
            return (
              <TeamMemberCard key={item._id} employeeItem={item} />
            );
          }
        })}
      </div>
    </section>
  );
};

export { TeamBlock };
