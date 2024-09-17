// функция расчета листания вперед
const increaseIndex = (index: number, size: number) => Math.min(index + 1, size - 1);

// функция расчета листания назад
const decreaseIndex = (index: number) => Math.max(0, index - 1);

// функция предзагрузки фотографий
const isLoaded = (index: number, activeIndex: number) => (
  activeIndex - 1 === index ||
  activeIndex - 2 === index ||
  activeIndex + 1 === index ||
  activeIndex + 2 === index ||
  activeIndex === index
);


// скролл до изображения
const moveToImage = (
  newActiveIndex: number, // индекс
  currentRef: React.RefObject<HTMLDivElement>, // нужный реф с которым работаем
  gapWidth?: number // ширина отступа между изображениями в px
) => {
  const currentNode = currentRef.current;

  if (!currentNode) {
    return;
  }
  //setCurrentIndex(newActiveIndex);  // Отложенное обновление activeIndex

  const dataContainer = currentNode.getBoundingClientRect();
  currentNode.scrollTo({
    left: newActiveIndex * (dataContainer.width + (gapWidth ? gapWidth : 0)),
    behavior: "smooth",
  });

};


const setNewImage = (
  newActiveIndex: number, // индекс
  currentRef: React.RefObject<HTMLDivElement>, // нужный реф с которым работаем
  setCurrentIndex: (index: number) => void, // функция задания нового индекса
  gapWidth?: number // ширина отступа между изображениями в px
) => {

  moveToImage(newActiveIndex, currentRef, gapWidth);

  const timeout = setTimeout(() => {
    setCurrentIndex(newActiveIndex);  // Отложенное обновление activeIndex
  }, 70);
  return () => clearTimeout(timeout); // Очистка таймера при изменении
};


export { increaseIndex, decreaseIndex, isLoaded, moveToImage, setNewImage };
