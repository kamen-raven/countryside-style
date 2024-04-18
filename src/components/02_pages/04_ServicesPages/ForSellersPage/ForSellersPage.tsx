import React from 'react';
import styles from './ForSellersPage.module.scss';
import { ForSellersPageInterface } from './ForSellersPage.interface.ts';
import { FAQBlock, InfoTextBlock/* , RecentlySoldObjectsBlock */ } from './blocks/index.ts';
import { AdvantagesBlock, RequestActionBlock, ReviewsBlock, TitleBlockTemplate } from '~common/index.ts';



const ForSellersPage: React.FC<ForSellersPageInterface> = ({
  typePage,
  titleBlockData,
  advantagesListData,
/*   recentObjectsData, */
  reviewsData,
  faqData }) => {
    return (
        <main className = {styles.mainContainer}>
          <TitleBlockTemplate  pageData={titleBlockData[typePage]} />
          <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={'ForSellersPageForm1'}/>
          <AdvantagesBlock advantagesList={advantagesListData}/>
{/* //*TODO: <ServicesStoriesBlock/> УСЛУГИ STORIES ДОДЕЛАТЬ*/}
{/* //*TODO: <RecentlySoldObjectsBlock recentObjectsData={recentObjectsData}/> */}
          <ReviewsBlock reviewsDataItem={reviewsData}/>
          <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={'ForSellersPageForm2'}/>
          <FAQBlock faqData={faqData} />
          <InfoTextBlock/>
        </main>
    );
};

export { ForSellersPage };
