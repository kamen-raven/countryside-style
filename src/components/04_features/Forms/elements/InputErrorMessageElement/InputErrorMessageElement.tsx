import React from 'react';
import styles from './InputErrorMessageElement.module.scss';
import { InputErrorMessageElementInterface } from './InputErrorMessageElement.interface';


const InputErrorMessageElement: React.FC<InputErrorMessageElementInterface> = ({ error, className }) => {
    return (
      <div className={`${styles.errorContainer} ${className}`}>
      <p className={styles.error}>
        {error}
      </p>
    </div>
    );
};

export { InputErrorMessageElement };
