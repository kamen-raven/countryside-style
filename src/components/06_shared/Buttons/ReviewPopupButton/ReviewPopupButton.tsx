'use client';
import React from 'react';

import { ReviewPopupButtonInterface } from './ReviewPopupButton.interface';
import { useToggleMainPopupStore, useToggleSupportPopupStore } from '~store/popupsStore/useTogglePopupStore';
import useReviewPopupStore from '~store/popupsStore/useReviewPopupStore';


const ReviewPopupButton: React.FC<ReviewPopupButtonInterface> = ({ type, data, className, children }) => {
  const getPopupData = useReviewPopupStore((state) => state.newData.setPopupData);
  const openReviewPopup = useToggleMainPopupStore((state) => state.actions.openPopup);
  const openImagePopup = useToggleSupportPopupStore((state) => state.actions.openPopup);



  const handleOpenPopup = () => {
    (type === 'reviewFull') ? openReviewPopup(type) :
    (type === 'reviewImage') ? openImagePopup(type) :
    null;

    getPopupData(data);
    console.log('click Review POPUP!!');
  };

  return (
    <button className={className} onClick={handleOpenPopup}>
      {children}
    </button>
  );
};

export { ReviewPopupButton };
