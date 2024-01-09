import React from 'react';
//import styles from './SearchBarBlock.module.scss';
import { SearchBarBlockInterface } from './SearchBarBlock.interface.ts';

import { SearchBar } from '~features/index.ts';


const SearchBarBlock: React.FC<SearchBarBlockInterface> = ({ }) => {
  return (
    <SearchBar />
  );
};

export { SearchBarBlock };
