import React from 'react';
import styles from './ForBuyersPage.module.scss';
import { ForBuyersPageInterface } from './ForBuyersPage.interface.ts';
import { TitleBlockTemplate, RequestActionBlock, AdvantagesBlock, ServicesStoriesBlock, ReviewsBlock } from '~common/index.ts';


const ForBuyersPage: React.FC<ForBuyersPageInterface> = ({
  typePage,
  titleBlockData,
  advantagesListData,
  reviewsData,
}) => {
    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={''}/>
          <AdvantagesBlock advantagesList={advantagesListData}/>
          <ServicesStoriesBlock/>
          <ReviewsBlock reviewsDataItem={reviewsData}/>
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={''}/>
        </main>
    );
};

export { ForBuyersPage };
