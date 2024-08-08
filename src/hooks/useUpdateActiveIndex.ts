'use client';
import { RefObject, useEffect } from "react";

export default function useUpdateActiveIndex(
  containerRef: RefObject<HTMLDivElement>,
  currentImg: number,
  setCurrentImg: (index: number) => void,
) {
/*   // Получение текущего фото и действий из хранилища ZUSTAND
  const { activePhoto,
    actions: {
      setActivePhoto,
    }
  } = useObjectPhotoStore();
 */

    // объявляем стейт для корректного отображения большой текущей фотографии
    //const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const currentNode = containerRef?.current;

    if (!currentNode) {
      return;
    }

    const scroll = () => {
      const dataContainer = currentNode.getBoundingClientRect();
      const firstElementData = currentNode.firstElementChild?.getBoundingClientRect();

      if (!firstElementData) {
        return;
      }

      const shift = firstElementData.left - dataContainer.left;
      setCurrentImg(Math.abs(Math.round(shift / dataContainer.width)));
    };

    currentNode.addEventListener('scroll', scroll);

    return () => {
      currentNode.removeEventListener('scroll', scroll);
    };
  }, [ containerRef ]);

  return currentImg;
  }




/*   useEffect(() => {
    const currentSecondNode = smallContainerRef?.current;

    if (!currentSecondNode) {
      return;
    }

    const secondScroll = () => { */
/*       const dataContainer = currentNode.getBoundingClientRect();
      const firstElementData = currentNode.firstElementChild?.getBoundingClientRect();

      if (!firstElementData) {
        return;
      }

      const shift = firstElementData.left - dataContainer.left;
      setCurrentImg(Math.abs(Math.round(shift / dataContainer.width)));
      console.log(currentImg); */

      //const container = smallContainerRef && smallContainerRef.current;

/*         const thumbnail = currentSecondNode.children[currentImg];
        thumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });

    };




      currentSecondNode.addEventListener('scroll', secondScroll);

    return () => {
      currentSecondNode.removeEventListener('scroll', secondScroll);
    };
  }, [ smallContainerRef ]); */

  // скролл


