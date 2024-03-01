import React from 'react';
import styles from './BlogSearchInputElement.module.scss';
import { SimpleSearchInput } from '~features/Forms/index.ts';


const BlogSearchInputElement = () => {
  return (
    <div className = {styles.container}>
      <SimpleSearchInput innerText={'Поиск по ключевому слову'} place={'blog'} />
    </div>
  );
};

export { BlogSearchInputElement };
