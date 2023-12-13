import React from 'react';
import { TeamBlockProps } from './TeamBlock.props';
import styles from './TeamBlock.module.scss';
import { TeamMemberCard } from '~/components/04_features';



const TeamBlock: React.FC<TeamBlockProps> = ({ teamMembersItems }) => {


  return (
    <section className={styles.wrapper}>

      {teamMembersItems && teamMembersItems.map(item => {
        if (item.role == 'owner') {
          return (
            <TeamMemberCard key={item._id} data={item} />
          );
        }
      })}

    </section>
  );
};

export { TeamBlock };
