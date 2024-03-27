'use client';

import React from 'react';
import styles from './VideoPopup.module.scss';
import useVideoPopupStore from '~store/popupsStore/useVideoPopupStore';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore';


const VideoPopup: React.FC = () => {
  const videoLink = useVideoPopupStore((state) => state.popupVideoLink);
  const isOpen = useToggleMainPopupStore((state) => state.isOpen);

  //console.log(videoLink);

  return (
    <div className={styles.innerContainer}>
      {videoLink && isOpen &&
        <iframe
          className={styles.video}
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy">
        </iframe>
      }
    </div>
  );
};
export { VideoPopup };
