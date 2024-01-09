import React from 'react';
import styles from './CatalogPage.module.scss';
import { CatalogPageInterface } from './CatalogPage.interface.ts';

import reviews from "~utils/temp/reviewsData/reviewsData";
import { ReviewsBlock } from "~widgets/index";
import { ContactUsBlock } from "~widgets/CatalogBlocks/ContactUsBlock/ContactUsBlock";


import { CatalogBlock, InfoTypeDescriptionBlock, SearchBarBlock } from '~widgets/index.ts';
import housesSEOText from '~utils/constants/TypeSEOText/TypeSEOText.ts';

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
