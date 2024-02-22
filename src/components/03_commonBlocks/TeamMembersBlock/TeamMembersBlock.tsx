import React from 'react';
import styles from './TeamMembersBlock.module.scss';
import { TeamMembersBlockInterface } from './TeamMembersBlock.interface.ts';
import { TeamMemberCard } from './elements/index.ts';
import { UsersInterface } from '~interfaces/users.interface.ts';


const TeamMembersBlock: React.FC<TeamMembersBlockInterface> = ({ employeesData, countUsers, children }) => {

  const setGridArea = {
    owner: styles.ownersArea,
    employee: styles.employeesArea,
    all:  styles.allArea,
    single: styles.ownersArea,
  };

  const sortedData = (data:  UsersInterface[]) => {
    if (countUsers === 'owner') {
      return data.slice(0,2);
    } else if (countUsers === 'employee') {
      return data.slice(3);
    } else if (countUsers === 'single') {
      return data.slice(0,1);
    } else {
      return data;
    }
  };


  return (
    <section className={`${styles.wrapper} ${setGridArea[countUsers]}`}>
      {children}

    {sortedData(employeesData).map((item, index) => {
                return (
                  <TeamMemberCard key={item.uuid}
                    employeeItem={item}
                    index={index}
                    countUsers={countUsers} />
                );
    }) }
    
    </section>
  );
};

export { TeamMembersBlock };
