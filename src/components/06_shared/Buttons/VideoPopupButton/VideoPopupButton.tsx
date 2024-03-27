'use client';
import React from 'react';

import { VideoPopupButtonInterface } from './VideoPopupButton.interface';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore';
import useVideoPopupStore from '~store/popupsStore/useVideoPopupStore';
import formatIframeSrc from '~helpers/formatters/formatIframeSrc';


const VideoPopupButton: React.FC<VideoPopupButtonInterface> = ({ link, className, children }) => {
  const getVideoLink = useVideoPopupStore((state) => state.newLink.setVideoLink);
  const openVideoPopup = useToggleMainPopupStore((state) => state.actions.openPopup);

  const srcValue = formatIframeSrc(link); // из iframe берем ссылку


  const handleOpenPopup = () => {

    openVideoPopup('videoPopup'); // отрываем попап

    getVideoLink(srcValue); // передаем ссылку

    console.log('click VIDEO POPUP!!');
  };



  return (
    <button className={className} onClick={handleOpenPopup}>
      {children}
    </button>
  );
};

export { VideoPopupButton };
