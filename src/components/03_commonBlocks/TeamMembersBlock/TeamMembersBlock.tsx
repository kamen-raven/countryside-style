import React from 'react';
import styles from './TeamMembersBlock.module.scss';
import { TeamMembersBlockInterface } from './TeamMembersBlock.interface.ts';
import { TeamMemberCard } from './elements/index.ts';


const TeamMembersBlock: React.FC<TeamMembersBlockInterface> = ({ employeesData, teamRole, children }) => {

  const setGridArea = {
    owner: styles.ownersArea,
    employee: styles.employeesArea,
    all:  styles.allArea,
  };


  return (
    <section className={`${styles.wrapper} ${setGridArea[teamRole]}`}>
      {children}
      {employeesData && employeesData.map((item, index) => {
        if (item.role == teamRole || teamRole == 'all') {
          return (
            <TeamMemberCard key={item._id}
              employeeItem={item}
              index={index}
              teamRole={teamRole} />
          );
        }
      })}
    </section>
  );
};

export { TeamMembersBlock };
