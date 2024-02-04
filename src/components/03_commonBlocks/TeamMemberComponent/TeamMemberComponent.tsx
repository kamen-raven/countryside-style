import React from 'react';
import { TeamMemberComponentInterface } from './TeamMemberComponent.interface.ts';
import { TeamMemberCard } from './blocks/index.ts';

const TeamMemberComponent: React.FC<TeamMemberComponentInterface> = ({ employeesData, teamRole  }) => {
    return (
        <>
      {employeesData && employeesData.map((item, index) => {
        if (item.role == teamRole) {
          return (
            <TeamMemberCard key={item._id} employeeItem={item} index={index} />
          );
        }
      })}
        </>
    );
};

export { TeamMemberComponent };
