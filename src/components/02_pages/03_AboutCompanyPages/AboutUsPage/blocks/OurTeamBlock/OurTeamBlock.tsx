import React from 'react';
import styles from './OurTeamBlock.module.scss';
import { OurTeamBlockInterface } from './OurTeamBlock.interface.ts';
import { TeamMembersBlock } from '~common/index.ts';


const OurTeamBlock: React.FC<OurTeamBlockInterface> = ({ employeesData }) => {
  return (
    <TeamMembersBlock employeesData={employeesData} countUsers={'all'} page={'noSpecialText'}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Наша команда
        </h2>
        <p className={styles.paragraph}>
          Мы работаем по&nbsp;принципу работы адвокатского бюро, где персональная ответственность,
          личное участие и&nbsp;ведение сделки от&nbsp;начала до&nbsp;конца одним специалистом является залогом эффективной
          и&nbsp;честной работы, поэтому ни&nbsp;к&nbsp;чему бесконечно увеличивать штат.
          Наше преимущество в&nbsp;том, что оно не&nbsp;численное, качественное:
          у&nbsp;нас работают только&nbsp;те, кто умеет продавать недвижимость!
        </p>
      </div>



    </TeamMembersBlock>




  );
};

export { OurTeamBlock };
