import React from 'react';
import styles from './CatalogPage.module.scss';
import { CatalogPageInterface } from './CatalogPage.interface.ts';

import reviews from "~utils/temp/reviewsData/reviewsData";
import { ReviewsBlock } from "~pages/01_HomePage/HomePage/blocks/index";
import { ContactUsBlock } from "~pages/02_CatalogPages/CatalogPage/blocks/ContactUsBlock/ContactUsBlock.tsx";



import housesSEOText from '~utils/constants/TypeSEOText/TypeSEOText.ts';
import { InfoTypeDescriptionBlock, SearchBarBlock, CatalogBlock } from './blocks/index.ts';

const CatalogPage: React.FC<CatalogPageInterface> = () => {

  const SEOTextData = housesSEOText;


  return (
    <main className={styles.mainContainer}>
      <InfoTypeDescriptionBlock data={SEOTextData} />
      <SearchBarBlock />
      <CatalogBlock />
      <ContactUsBlock />
      <ReviewsBlock reviewsDataItem={reviews} />
    </main>
  );
};

export { CatalogPage };
