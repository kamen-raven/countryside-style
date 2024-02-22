import React from 'react';
import styles from './ReviewsTitleBlock.module.scss';
import { ReviewsTitleBlockInterface } from './ReviewsTitleBlock.interface.ts';


import { TeamMemberCard } from '~common/TeamMembersBlock/elements/index.ts';
import { BackgroundSVGPattern } from '~shared/index.ts';
import { ReviewTitleComponent } from '~common/ReviewsBlock/components/index.ts';

import { ReviewsButtonsElement } from './elements/index.ts';


const ReviewsTitleBlock: React.FC<ReviewsTitleBlockInterface> = ({ employeesData }) => {




  return (
    <section className={styles.wrapper}>
      <BackgroundSVGPattern positionX='right' />
      <div className={styles.container}>

        <ReviewTitleComponent className={styles.titleContainer} />

        <div className={styles.ownerContainer}>
          {employeesData.slice(0, 1).map((item, index) => {
            return (
              <TeamMemberCard key={item.uuid}
                employeeItem={item}
                index={index}
                countUsers={"owner"} />
            );
          })}
        </div>

          <ReviewsButtonsElement/>

      </div>
    </section>
  );
};

export { ReviewsTitleBlock };
