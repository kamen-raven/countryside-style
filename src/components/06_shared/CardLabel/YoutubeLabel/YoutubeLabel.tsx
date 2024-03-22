import React from 'react';
import styles from './YoutubeLabel.module.scss';
import { YoutubeLabelInterface } from './YoutubeLabel.interface';
import YoutubeIcon from '~svg/catalogCard/youtubeIcon.svg';
import { VideoPopupButton } from '~shared/index';

const YoutubeLabel: React.FC<YoutubeLabelInterface> = ({ link }) => {
  if (link != '') {
    return (
      <VideoPopupButton className={styles.label} link={link}>
        <YoutubeIcon/>
      </VideoPopupButton>
    );
  } else {
    return null;
  }
};

export { YoutubeLabel };
