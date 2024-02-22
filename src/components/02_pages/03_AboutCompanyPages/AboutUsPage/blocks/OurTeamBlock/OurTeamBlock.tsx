import React from 'react';
import styles from './OurTeamBlock.module.scss';
import { OurTeamBlockInterface } from './OurTeamBlock.interface.ts';
import { TeamMembersBlock } from '~common/index.ts';


const OurTeamBlock: React.FC<OurTeamBlockInterface> = ({ employeesData }) => {
  return (
    <TeamMembersBlock employeesData={employeesData} countUsers={'all'}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Наша команда
        </h2>
        <p className={styles.paragraph}>
          Мы работаем по принципу работы адвокатского бюро, где персональная ответственность,
          личное участие и ведение сделки от начала до конца одним специалистом является залогом эффективной
          и честной работы, поэтому ни к чему бесконечно увеличивать штат.
          Наше преимущество в том, что оно не численное, качественное:
          у нас работают только те, кто умеет продавать недвижимость!
        </p>
      </div>



    </TeamMembersBlock>




  );
};

export { OurTeamBlock };
