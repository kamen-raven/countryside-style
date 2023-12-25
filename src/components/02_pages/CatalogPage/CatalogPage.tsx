import React from 'react';
import styles from './CatalogPage.module.scss';
import { CatalogPageInterface } from './CatalogPage.interface.ts';

import { CatalogBlock, InfoCatalogTypeBlock, SearchBarBlock } from '~widgets/index.ts';

const CatalogPage: React.FC<CatalogPageInterface> = ({ type }) => {
  return (
<>
    <InfoCatalogTypeBlock />
    <SearchBarBlock/>
    <CatalogBlock/>

</>
  );
};

export { CatalogPage };
