import React from 'react';
import styles from './PartnersBlock.module.scss';
import { PartnersBlockInterface } from './PartnersBlock.interface.ts';
import { TeamMemberCard } from '~common/TeamMemberComponent/blocks/index.ts';


const PartnersBlock: React.FC<PartnersBlockInterface> = ({ employeesData }) => {
  return (
    <section className={styles.wrapper}>

      {employeesData && employeesData.map(item => {
        if (item.role == 'owner') {
          return (
            <TeamMemberCard key={item._id} employeeItem={item} />
          );
        }
      })}

    </section>
  );
};

export { PartnersBlock };
