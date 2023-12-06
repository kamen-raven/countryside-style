import React from 'react';
import { BackgroundSVGProps } from './BackgroundSVG.props';
import styles from './BackgroundSVG.module.scss';


const BackgroundSVG = ({ positionY = 'top', positionX = 'left', children }: BackgroundSVGProps ): JSX.Element  => {

  const absolutePosition = {
    top: styles.background_top,
    bottom: styles.background_bottom,
    left: styles.background_left,
    right: styles.background_right,
  };

  const Y = absolutePosition[positionY];
  const X = absolutePosition[positionX];

    return (
      <div className={`${styles.background} ${Y} ${X}`}  >
        {children}
      </div>
    );
};

export { BackgroundSVG };
