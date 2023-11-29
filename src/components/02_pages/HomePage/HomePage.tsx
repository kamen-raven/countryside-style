import React from 'react';
import { HomePageProps } from './HomePageProps';
import styles from './HomePage.module.scss';
import { HeadBlock } from '~widgets/HeadBlock/HeadBlock';


const HomePage = ({ }: HomePageProps): JSX.Element => {
  return (
    <main className={styles.mainContainer}>
      <HeadBlock />
    </main>
  );
};

export { HomePage };
