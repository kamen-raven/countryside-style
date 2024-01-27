import React from 'react';
import styles from './ServicesTemplateBlock.module.scss';
import { ServicesTemplateBlockInterface } from './ServicesTemplateBlock.interface.ts';


import { ServiceCard } from '~common/index.ts';

const ServicesTemplateBlock: React.FC<ServicesTemplateBlockInterface> = ({ servicesItems, title }) => {

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <div className={styles.innerBlock}>

          {servicesItems && servicesItems.map((m) => {
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
    </>
  );
};

export { ServicesTemplateBlock };
