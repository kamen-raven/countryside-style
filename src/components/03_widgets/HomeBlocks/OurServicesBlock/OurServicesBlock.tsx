import React from 'react';
import { OurServicesBlockProps } from './OurServicesBlock.props';
import styles from './OurServicesBlock.module.scss';
import BackgroundPattern from '~svg/background/backgroundOurServices.svg';
import { BackgroundSVG } from '~/components/06_shared';
import ServiceCard from '~/components/04_features/ServiceCard/ServiceCard';

const OurServicesBlock: React.FC<OurServicesBlockProps> = ({ servicesItems }) => {

  return (
    <section className={styles.wrapper}>
      <BackgroundSVG positionY='bottom'>
        <BackgroundPattern />
      </BackgroundSVG>
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
