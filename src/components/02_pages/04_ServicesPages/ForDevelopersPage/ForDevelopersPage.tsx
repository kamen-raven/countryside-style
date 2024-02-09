import React from 'react';
import styles from './ForDevelopersPage.module.scss';
import { ForDevelopersPageInterface } from './ForDevelopersPage.interface.ts';
import { TitleBlockTemplate, RequestActionBlock, ReviewsBlock, TeamMembersBlock } from '~common/index.ts';


const ForDevelopersPage: React.FC<ForDevelopersPageInterface> = ({
  typePage,
  titleBlockData,
  employeesData,
  reviewsData,
}) => {

  const onePartner = employeesData.slice(0, 1);

    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={''}/>
          {/* Offers */}
          <TeamMembersBlock employeesData={onePartner} teamRole={'owner'} />
          <ReviewsBlock reviewsDataItem={reviewsData}/>
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={''}/>
        </main>
    );
};

export { ForDevelopersPage };
