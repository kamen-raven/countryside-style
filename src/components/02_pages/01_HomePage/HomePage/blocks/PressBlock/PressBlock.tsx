import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PressBlock.module.scss';
import { PressBlockProps } from './PressBlock.props';


const PressBlock: React.FC<PressBlockProps> = ({ pressItems }) => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.innerBlock__text}>
          <h2 className={styles.title}>
            Пресса
          </h2>
          <p className={styles.description}>
            Наши комментарии о&nbsp;рынке недвижимости в&nbsp;СМИ
          </p>
        </div>
        <div className={styles.innerBlock__articles}>

          {pressItems && pressItems.map(m => (
            <div className = {styles.linkContainer}>

              <Link key={m._id}
                className={styles.link}
                href={m.link}
                target='_blank'
                rel='noopener noreferrer'>
                <Image
                  className={styles.logo}
                  src={m.logo}
                  alt={m.journal}
                />
              </Link>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export { PressBlock };
