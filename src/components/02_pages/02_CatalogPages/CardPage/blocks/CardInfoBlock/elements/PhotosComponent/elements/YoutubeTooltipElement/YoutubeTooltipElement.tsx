import React from 'react';

import styles from './YoutubeTooltipElement.module.scss';
import { YoutubeTooltipElementInterface } from './YoutubeTooltipElement.interface.ts';

import YouTubeIcon from '~svg/catalogCard/youtubeIcon.svg';
import { VideoPopupButton } from '~shared/index.ts';



const YoutubeTooltipElement: React.FC<YoutubeTooltipElementInterface> = ({ data }) => {


  return (
    <VideoPopupButton className={styles.imageInfoButton} link={data.you_tube_link}>
      Видео
      <span className={styles.icon}>
        <YouTubeIcon />
      </span>
    </VideoPopupButton>
  );
};

export { YoutubeTooltipElement };
