import React from 'react';
import styles from './InfoCatalogTypeBlock.module.scss';
import { InfoCatalogTypeBlockInterface } from './InfoCatalogTypeBlock.interface.ts';


const InfoCatalogTypeBlock: React.FC<InfoCatalogTypeBlockInterface> = ({  }) => {
    return (
        <section className = {styles.wrapper}>
          INFO
        </section>
    );
};

export { InfoCatalogTypeBlock };
