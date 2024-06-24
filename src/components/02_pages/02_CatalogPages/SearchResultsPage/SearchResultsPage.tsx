import React from 'react';
import styles from './SearchResultsPage.module.scss';
import { SearchResultsPageInterface } from './SearchResultsPage.interface';
import generalContactsData from '~data/constant/generalContacts/generalContactsData.ts';
import { SearchBarObjects } from '~features/index.ts';
import { ContactUsBlock, TitleBlock } from '../CatalogPage/blocks/index.ts';
import { SearchResultsLayoutBlock } from './blocks/index.ts';


const SearchResultsPage: React.FC<SearchResultsPageInterface> = ({
  searchTerm,
  searchType,
  searchData
}) => {
  return (
    <main className={styles.mainContainer}>
      <TitleBlock typePage={'search'} />
      <SearchBarObjects searchTerm={searchTerm} typePage={'search'} />
      <SearchResultsLayoutBlock searchData={searchData} />
      <ContactUsBlock generalContactsData={generalContactsData} />
    </main>
  );
};

export { SearchResultsPage };
