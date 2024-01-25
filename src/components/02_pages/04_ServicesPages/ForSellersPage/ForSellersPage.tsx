import React from 'react';
import styles from './ForSellersPage.module.scss';
import { ForSellersPageInterface } from './ForSellersPage.interface.ts';
import { FAQBlock, InfoTextBlock, RecentlySoldObjectsBlock } from './blocks/index.ts';
import { AdvantagesBlock, RequestActionBlock, ReviewsBlock, ServicesStoriesBlock, TitleBlockTemplate } from '~common/index.ts';



const ForSellersPage: React.FC<ForSellersPageInterface> = ({
  typePage,
  titleBlockData,
  advantagesListData,
  reviewsData }) => {
    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={''}/>
          <AdvantagesBlock advantagesList={advantagesListData}/>
          <RecentlySoldObjectsBlock/>
          <ServicesStoriesBlock/>
          <ReviewsBlock reviewsDataItem={reviewsData}/>
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={''}/>
          <FAQBlock/>
          <InfoTextBlock/>
        </main>
    );
};

export { ForSellersPage };
