'use client';
import { RefObject, useEffect } from "react";

export default function useSwipeUpdateActiveIndex(
  containerRef: RefObject<HTMLDivElement>,
  currentImg: number,
  setCurrentImg: (index: number) => void,
  gapWidth: number = 0
) {


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
      setCurrentImg(Math.abs(Math.round(shift / (dataContainer.width + (gapWidth ? gapWidth : 0)))));
    };

    currentNode.addEventListener('scroll', scroll);

    return () => {
      currentNode.removeEventListener('scroll', scroll);
    };
  }, [ containerRef ]);

  return currentImg;
  }

