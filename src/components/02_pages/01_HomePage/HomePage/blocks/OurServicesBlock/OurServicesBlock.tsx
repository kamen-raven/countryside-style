import React from 'react';
import { OurServicesBlockProps } from './OurServicesBlock.props';
import styles from './OurServicesBlock.module.scss';
import BackgroundPatternLeft from '~svg/background/backgroundOurServicesLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundOurServicesRight.svg';
import { BackgroundSVGPattern } from '~shared/index';
import { ServicesCardTemplate } from '~common/index';

const OurServicesBlock: React.FC<OurServicesBlockProps> = ({ servicesItems }) => {

  return (
    <section className={styles.wrapper}>
      <>
        <BackgroundSVGPattern positionX='right' positionY='center'>
          <BackgroundPatternRight className={styles.backgroundRight} />
        </BackgroundSVGPattern>
        <BackgroundSVGPattern positionX='left' positionY='bottom'>
          <BackgroundPatternLeft className={styles.backgroundLeft} />
        </BackgroundSVGPattern>
      </>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Наши услуги
        </h2>
        <div className={styles.innerBlock}>

          {servicesItems && servicesItems.map((item) => {
            return(
              <ServicesCardTemplate key={item._id} serviceItem={item} buttonText={'Перейти'} page={'home'} />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export { OurServicesBlock };
