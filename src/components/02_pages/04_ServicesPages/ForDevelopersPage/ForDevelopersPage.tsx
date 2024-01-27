import React from 'react';
import styles from './ForDevelopersPage.module.scss';
import { ForDevelopersPageInterface } from './ForDevelopersPage.interface.ts';
import { TitleBlockTemplate, RequestActionBlock, ReviewsBlock } from '~common/index.ts';


const ForDevelopersPage: React.FC<ForDevelopersPageInterface> = ({
  typePage,
  titleBlockData,
  reviewsData,
}) => {
    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={''}/>
          {/* Offers */}
          {/* TeamMemberBlock */}
          <ReviewsBlock reviewsDataItem={reviewsData}/>
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={''}/>
        </main>
    );
};

export { ForDevelopersPage };
