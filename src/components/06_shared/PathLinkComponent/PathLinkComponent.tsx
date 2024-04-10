'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './PathLinkComponent.module.scss';
import { PathLinkComponentInterface } from './PathLinkComponent.interface.ts';


const PathLinkComponent: React.FC<PathLinkComponentInterface> = ({ dataInfo }) => {
  const pathname = usePathname().split('/');
  const typePathname = pathname[1];

  const label = {
    'houses-and-cottages': 'Дома, дачи, коттеджи',
    lands: 'Земельные участки',
    flats: 'Квартиры',
    villages: 'Коттеджные поселки',
  } as { [key: string]: string };

  return (
    <div className={styles.labelContainer}>
      <Link className={styles.label_link}
        href={'/'}>
        Главная
      </Link>

      <span className={`${styles.label} ${styles.label_span}`}>/</span>

      <Link className={styles.label_link}
        href={`/${typePathname}`}>
        {label[typePathname]}
      </Link>
      <span className={`${styles.label} ${styles.label_span}`}>/</span>
      <p className={`${styles.label} ${styles.label_name}`}>
        {dataInfo}
      </p>
    </div>
  );
};

export { PathLinkComponent };
