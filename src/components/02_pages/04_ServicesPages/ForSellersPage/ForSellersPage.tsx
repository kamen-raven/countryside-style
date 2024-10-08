import React from 'react';
import styles from './ForSellersPage.module.scss';
import { ForSellersPageInterface } from './ForSellersPage.interface.ts';
import { FAQBlock, InfoTextBlock , RecentlySoldObjectsBlock } from './blocks/index.ts';
import { AdvantagesBlock, RequestActionBlock, ReviewsBlock, ServicesStoriesBlock, TitleBlockTemplate } from '~common/index.ts';



const ForSellersPage: React.FC<ForSellersPageInterface> = ({
  typePage,
  titleBlockData,
  advantagesListData,
  archiveObjectsData,
  reviewsData,
  faqData,
  servicesCardsData
  }) => {
  return (
    <main className={styles.mainContainer}>
      <TitleBlockTemplate pageData={titleBlockData[typePage]} />
      <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={'ForSellersPageForm1'} />
      <AdvantagesBlock advantagesList={advantagesListData} />
      <ServicesStoriesBlock servicesCardsData={servicesCardsData} />
      <RecentlySoldObjectsBlock archiveObjectsData={archiveObjectsData}/>
      <RequestActionBlock typePage={typePage} gridArea={'second'} color={'green'} nameForm={'ForSellersPageForm2'} />
      <ReviewsBlock reviewsDataItem={reviewsData} />
      <FAQBlock faqData={faqData} />
      <InfoTextBlock />
      <RequestActionBlock typePage={typePage} gridArea={'third'} nameForm={'ForSellersPageForm3'} />
    </main>
  );
};

export { ForSellersPage };
