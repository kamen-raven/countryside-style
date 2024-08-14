import React from 'react';
import styles from './TitleBlockTemplate.module.scss';
import { TitleBlockTemplateInterface } from './TitleBlockTemplate.interface.ts';
import Link from 'next/link';

/* dataBackground */
/* import Sellers from '~img/servicesPages/titleBlockBackgrounds/forSellersBG.jpg';
import Buyers from '~img/servicesPages/titleBlockBackgrounds/forBuyersBG.jpg';
import Villages from '~img/servicesPages/titleBlockBackgrounds/forVillagesBG.jpg';
import Developers from '~img/servicesPages/titleBlockBackgrounds/forDevelopersBG.jpg';
import LegalSupport from '~img/servicesPages/titleBlockBackgrounds/forLegalBG.jpg';
import { BackgroundImage } from '~shared/index.ts';
import { StaticImageData } from 'next/image';
 */

const TitleBlockTemplate: React.FC<TitleBlockTemplateInterface> = ({ pageData }) => {

/*   const imgBgdData: { [key: string]: StaticImageData } = {
    sellers: Sellers,
    buyers: Buyers,
    villages: Villages,
    developers: Developers,
    legalSupport: LegalSupport,
  };
 */
/*   console.log(imgBgdData[pageData.className].src);
 */


  return (
    <section className={`${styles.wrapper}  ${styles[pageData.className]} `}> {/**/}
      <div className={styles.container}>
{/*       <BackgroundImage image={imgBgdData[pageData.className]} alt={'Загородный стиль'} className = {styles.bgdImg}/> */}
        <div className={styles.labelContainer}>
          <Link className={styles.label_link}
            href={'/services'}>
            Услуги
          </Link>
          <span className={styles.label_span}>|</span>
          <p className={styles.label}>
            {pageData.label}
          </p>
        </div>

        <div className={styles.titleContainer}>
          <h1 className={styles.h1}>
            {pageData.title}
          </h1>
          {pageData.subtitle &&
            <p className={styles.subtitle}>
              {pageData.subtitle}
            </p>
          }
        </div>
      </div>
    </section>
  );
};

export { TitleBlockTemplate };
