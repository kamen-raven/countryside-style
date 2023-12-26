import React from 'react';
import styles from './CatalogPage.module.scss';
import { CatalogPageInterface } from './CatalogPage.interface.ts';

import { CatalogBlock, InfoTypeDescriptionBlock, SearchBarBlock } from '~widgets/index.ts';
import housesSEOText from '~utils/constants/TypeSEOText/TypeSEOText.ts';

const CatalogPage: React.FC<CatalogPageInterface> = ({ type }) => {

  const SEOTextData = housesSEOText;


  return (
<>
    <InfoTypeDescriptionBlock data={SEOTextData} />
    <SearchBarBlock/>
    <CatalogBlock/>

</>
  );
};

export { CatalogPage };
