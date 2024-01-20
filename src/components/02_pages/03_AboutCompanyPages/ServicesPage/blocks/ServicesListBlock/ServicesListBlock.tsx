import React from 'react';
import styles from './ServicesListBlock.module.scss';
import { ServicesListBlockInterface } from './ServicesListBlock.interface.ts';


const ServicesListBlock: React.FC<ServicesListBlockInterface> = ({  }) => {
    return (
        <section className = {styles.wrapper}>
          <div className = {styles.container}>
          OUR SERVICES
          </div>

        </section>
    );
};

export { ServicesListBlock };
