import React from 'react';
import styles from './AddressPrintComponent.module.scss';
import { AddressPrintComponentInterface } from './AddressPrintComponent.interface';


const AddressPrintComponent: React.FC<AddressPrintComponentInterface> = ({ objectData }) => {
    return (
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          {objectData.name && objectData.name}
        </h1>
        {/* //* АДРЕС */}
        {objectData.place &&
          <p className={styles.address}>
            Адрес: {objectData.place}
          </p>
        }
      </div>
    );
};

export { AddressPrintComponent };
