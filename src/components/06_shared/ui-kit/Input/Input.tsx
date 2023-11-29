import React from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';


const Input = ({ className, ...props }: InputProps ): JSX.Element  => {


  
    return (
        <>
          <input className = {`${className} ${styles.commonInput}`} {...props} />
        </>
    );
};

export { Input };
