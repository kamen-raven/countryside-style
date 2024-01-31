import React from 'react';
import { OurServicesBlockProps } from './OurServicesBlock.props';
import styles from './OurServicesBlock.module.scss';
import BackgroundPatternLeft from '~svg/background/backgroundOurServicesLeft.svg';
import BackgroundPatternRight from '~svg/background/backgroundOurServicesRight.svg';
import { BackgroundSVGPattern } from '~shared/index';
import { ServiceCard } from '~common/index';

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

          {servicesItems && servicesItems.map(m => {
            return (
              <ServiceCard
                key={m.title}
                title={m.title}
                description={m.description}
                image={m.image}
                arrows={m.arrows}
                buttonText={m.buttonText}
                containerTemplate={m.containerTemplate}
                containerSize={m.containerSize}
              />
            );
          })}

        </div>
      </div>
    </section>
  );
};

export { OurServicesBlock };
