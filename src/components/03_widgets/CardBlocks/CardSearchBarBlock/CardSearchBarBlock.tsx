import React from 'react';
//import styles from './CardSearchBarBlock.module.scss';
import { CardSearchBarBlockInterface } from './CardSearchBarBlock.interface.ts';

import { SearchBar } from '~features/index.ts';


const CardSearchBarBlock: React.FC<CardSearchBarBlockInterface> = ({ }) => {
  return (
    <SearchBar />
  );
};

export { CardSearchBarBlock };
