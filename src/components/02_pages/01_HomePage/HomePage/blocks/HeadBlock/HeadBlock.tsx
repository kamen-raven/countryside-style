import React from 'react';


import { InfoHead, TitleHead } from './elements';
import styles from './HeadBlock.module.scss';


const HeadBlock: React.FC = () => {

  return (
    <section className = {styles.wrapper}>
      <TitleHead />
      <InfoHead />
    </section>
  );
};

export { HeadBlock };
