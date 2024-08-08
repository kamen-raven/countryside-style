import React from 'react';
import styles from './LegalSupportPage.module.scss';
import { LegalSupportPageInterface } from './LegalSupportPage.interface.ts';
import { TitleBlockTemplate, RequestActionBlock, AdvantagesBlock, ReviewsBlock, /* ServicesStoriesBlock */ } from '~common/index.ts';


const LegalSupportPage: React.FC<LegalSupportPageInterface> = ({
  typePage,
  titleBlockData,
  advantagesListData,
  reviewsData,
/*   servicesCardsData */

}) => {
  return (
    <main className={styles.mainContainer}>
      <TitleBlockTemplate pageData={titleBlockData[typePage]} />
      <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={'LegalSupportPageForm1'} />
      <AdvantagesBlock advantagesList={advantagesListData} title='Юридическое сопровождение'>
        <p className={styles.description}>
          Наши юристы проверят документы, разработают более безопасную схему проведения сделки,
          проконсультируют по налогам, проведут переговоры с продавцами и покупателями.
        </p>
      </AdvantagesBlock>
{/*       <ServicesStoriesBlock servicesCardsData={servicesCardsData} /> */}
      <ReviewsBlock reviewsDataItem={reviewsData} />
      <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={'LegalSupportPageForm2'} />
    </main>
  );
};

export { LegalSupportPage };
