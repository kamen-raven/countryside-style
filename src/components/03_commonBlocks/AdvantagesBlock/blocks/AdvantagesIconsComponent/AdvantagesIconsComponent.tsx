import React from 'react';
import styles from './AdvantagesIconsComponent.module.scss';
import { AdvantagesIconsComponentInterface } from './AdvantagesIconsComponent.interface.ts';


const AdvantagesIconsComponent: React.FC<AdvantagesIconsComponentInterface> = ({ advantagesList }) => {

  return (
    <>
      {advantagesList.map((item) => {
        return (
          <div key={item._id} className={styles.advantageIconComponent}>
            <div className={styles.iconContainer}>
              {item.icon && <item.icon />}
            </div>
            <div className={styles.textContainer}>
              <p className={styles.title}>
                {item.title}
              </p>
              {item.description &&
                <p className={styles.description}>
                  {item.description}
                </p>
              }
            </div>
          </div>
        );
      })}
    </>
  );
};

export { AdvantagesIconsComponent };
