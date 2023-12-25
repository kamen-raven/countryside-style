import React from 'react';
import { BackgroundSVGPatternProps } from './BackgroundSVGPattern.props';
import styles from './BackgroundSVGPattern.module.scss';

import BackgroundCommonPattern from '~svg/background/backgroundCommon.svg';


const BackgroundSVGPattern = ({ positionY = 'top', positionX = 'left', children }: BackgroundSVGPatternProps): JSX.Element => {

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
      {
        children ||
        <BackgroundCommonPattern />
      }
    </div>
  );
};

export { BackgroundSVGPattern };
