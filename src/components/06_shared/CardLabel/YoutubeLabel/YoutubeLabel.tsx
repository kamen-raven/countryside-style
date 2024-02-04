import React from 'react';
import styles from './YoutubeLabel.module.scss';
import YoutubeIcon from '~svg/catalogCard/youtubeIcon.svg';

const YoutubeLabel = (): JSX.Element => {
  return (
    <div className={`${styles.label} ${styles.label_youtube}`}>
      <YoutubeIcon />
    </div>
  );
};

export { YoutubeLabel };
