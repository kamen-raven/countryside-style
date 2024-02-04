import React from 'react';
import { TeamBlockProps } from './TeamBlock.props';
import styles from './TeamBlock.module.scss';
import { TeamMemberCard } from '~common/TeamMemberComponent/blocks';



const TeamBlock: React.FC<TeamBlockProps> = ({ teamMembersItems }) => {


  return (
    <section className={styles.wrapper}>
      <div className={styles.contentContainer}>
        {teamMembersItems && teamMembersItems.map((item, index) => {
          if (item.role == 'owner') {
            return (
              <TeamMemberCard key={item._id} employeeItem={item} index={index} />
            );
          }
        })}
      </div>
    </section>
  );
};

export { TeamBlock };
