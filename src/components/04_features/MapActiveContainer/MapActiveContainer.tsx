'use client';

import React, { useState } from 'react';
import styles from './MapActiveContainer.module.scss';
import { MapActiveContainerInterface } from './MapActiveContainer.interface.ts';


const MapActiveContainer: React.FC<MapActiveContainerInterface> = ({ children, className}) => {
  const [isActive, setIsActive] = useState(false);
  const toggleMap = () => {
    setIsActive(!isActive);
    //console.log('click!');
  };


  return (
    <div onClick={toggleMap}
      className={`${styles.container} ${!isActive && styles.block} ${className}`}>
        {children}
    </div>
  );
};

export { MapActiveContainer };
