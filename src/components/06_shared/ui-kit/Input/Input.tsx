import React from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';


const Input = ({ className, ...props }: InputProps ): JSX.Element  => {



    return (
        <>
          <input {...props} className = {`${className} ${styles.commonInput}`}  />
        </>
    );
};

export { Input };
