import React from 'react';


import { InfoHeadBlock, TitleHeadBlock } from './components';
import styles from './HeadBlock.module.scss';



const HeadBlock = (): JSX.Element => {


  return (
    <>
      <TitleHeadBlock />
      <InfoHeadBlock />


    </>
  );
};

export { HeadBlock };
