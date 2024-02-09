import React from 'react';
import styles from './LegalSupportPage.module.scss';
import { LegalSupportPageInterface } from './LegalSupportPage.interface.ts';
import { TitleBlockTemplate, RequestActionBlock, AdvantagesBlock, ReviewsBlock } from '~common/index.ts';


const LegalSupportPage: React.FC<LegalSupportPageInterface> = ({
  typePage,
  titleBlockData,
  advantagesListData,
  reviewsData,
}) => {
  return (
    <main className={styles.mainContainer}>
      <TitleBlockTemplate pageData={titleBlockData[typePage]} />
      <RequestActionBlock typePage={typePage} gridArea={'first'} nameForm={''} />
      <AdvantagesBlock advantagesList={advantagesListData} title='Услуги'>
        <p className={styles.description}>
          Наши юристы проверять документы, разработают более безопасную схему проведения сделки,
          проконсультируют по налогам, проведут переговоры с продавцами и покупателя.
        </p>
      </AdvantagesBlock>
{/* TODO: <ServicesStoriesBlock/> УСЛУГИ STORIES ДОДЕЛАТЬ*/}
      <ReviewsBlock reviewsDataItem={reviewsData} />
      <RequestActionBlock typePage={typePage} gridArea={'second'} nameForm={''} />
    </main>
  );
};

export { LegalSupportPage };
