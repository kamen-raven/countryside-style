import React from 'react';
import styles from './ForDevelopersPage.module.scss';
import { ForDevelopersPageInterface } from './ForDevelopersPage.interface.ts';
import { TitleBlockTemplate, RequestActionBlock, ReviewsBlock, TeamMembersBlock, ServicesOffers } from '~common/index.ts';


const ForDevelopersPage: React.FC<ForDevelopersPageInterface> = ({
  typePage,
  titleBlockData,
  offersListData,
  employeesData,
  reviewsData,
}) => {

  const onePartner = employeesData.slice(0, 1);

    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={''}/>
          <ServicesOffers offersListData={offersListData}/>
          <TeamMembersBlock employeesData={onePartner} countUsers={'owner'} />
          <ReviewsBlock reviewsDataItem={reviewsData}/>
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={''}/>
        </main>
    );
};

export { ForDevelopersPage };
