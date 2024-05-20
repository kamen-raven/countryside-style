import React from 'react';


import { ObjectImagePopupButtonInterface } from './ObjectImagePopupButton.interface';
import { useToggleMainPopupStore } from '~store/popupsStore/useTogglePopupStore.ts';
import useObjectImagePopupStore from '~store/popupsStore/useObjectImagePopupStore';


const ObjectImagePopupButton: React.FC<ObjectImagePopupButtonInterface> = ({ picData, className, children }) => {
  const openImagePopup = useToggleMainPopupStore((state) => state.actions.openPopup);  // открываем попап
  const getPicsData = useObjectImagePopupStore((state) => state.newData.setPopupData);  // передаем массив изображений объекта

  const handleOpenPopup = () => {
    openImagePopup('objectImage');   // тут открываем нужный попап
    getPicsData(picData);
  };



  return (
    <button className={className} onClick={handleOpenPopup}>
      {children}
    </button>
  );
};

export { ObjectImagePopupButton };
