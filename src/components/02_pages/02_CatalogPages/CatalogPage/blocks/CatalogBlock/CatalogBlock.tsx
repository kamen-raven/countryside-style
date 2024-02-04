
import React from 'react';
import styles from './CatalogBlock.module.scss';
import { CatalogBlockInterface } from './CatalogBlock.interface.ts';
import { CatalogCardsLayout } from '~features/index.ts';
import { getCharacter } from '../../../../../../api/temp/getCharacter.tsx';
import { BackgroundSVGPattern } from '~shared/index.ts';
import BackgroundPatternLeft from '~svg/background/backgroundObjectsForSaleLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundObjectsForSaleRight.svg';



const CatalogBlock: React.FC<CatalogBlockInterface> = async () => {
  const ITEMS_PER_PAGE = 12;

  const data = await getCharacter();
  /*
    const generateMockData = () => {
      const data = [];
      for (let i = 1; i <= 72; i++) {
        data.push({
          id: i,
          title: `Card ${i}`,
          content: `This is the content of card ${i}.`,
        });
      }
      return data;
    };

    const data = generateMockData(); */

  return (
    <section className={styles.wrapper}>
      <>
        <BackgroundSVGPattern positionX='right' positionY='top' >
          <BackgroundPatternRight className={styles.backgroundRight} />
        </BackgroundSVGPattern>
        <BackgroundSVGPattern positionX='left' positionY='bottom'>
          <BackgroundPatternLeft className={styles.backgroundLeft} />
        </BackgroundSVGPattern>
      </>


      <div className={styles.container}>
        <CatalogCardsLayout data={data} itemsPerPage={ITEMS_PER_PAGE} />
      </div>
    </section>
  );
};

export { CatalogBlock };
