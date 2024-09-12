import React from 'react';
import styles from './CounterElement.module.scss';
import { CounterElementInterface } from './CounterElement.interface';


const CounterElement: React.FC<CounterElementInterface> = ({ activeIndex, totalLength }) => {
    return (
        <span className={styles.counter}>{activeIndex + 1} / {totalLength} </span>
    );
};

export { CounterElement };
