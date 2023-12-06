import React from 'react';


import { InfoHead, TitleHead } from './components';
import styles from './HeadBlock.module.scss';



const HeadBlock = (): JSX.Element => {


  return (
    <section className = {styles.wrapper}>
      <TitleHead />
      <InfoHead />
    </section>
  );
};

export { HeadBlock };
