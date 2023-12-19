import React from 'react';
import styles from './CatalogPage.module.scss';
import { CatalogPageInterface } from './CatalogPage.interface.ts';


const CatalogPage: React.FC<CatalogPageInterface> = ({ type }) => {
  return (
      <div>
        <div>
      Text
    </div><div>
        cards
      </div>
      </div>
  );
};

export { CatalogPage };
