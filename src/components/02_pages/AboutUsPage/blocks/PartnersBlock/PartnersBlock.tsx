import React from 'react';
import styles from './PartnersBlock.module.scss';
import { PartnersBlockInterface } from './PartnersBlock.interface.ts';
import { TeamMemberCard } from '~features/index.ts';


const PartnersBlock: React.FC<PartnersBlockInterface> = ({ data }) => {
  return (
    <section className={styles.wrapper}>

      {data && data.map(item => {
        if (item.role == 'owner') {
          return (
            <TeamMemberCard key={item._id} data={item} />
          );
        }
      })}

    </section>
  );
};

export { PartnersBlock };
