import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { VillageObjectInterface } from "~interfaces/villages.interface";

const formatPhotosArray = (
  data: RealEstateObjectInterface | VillageObjectInterface
) => {
  const { photo_images, plans_images } = data; //

  const sortingPics = (arr: typeof photo_images | typeof plans_images) => {
    return arr.length
      ? arr.sort((a, b) => {
          if (a.order === null) return 1; // Если `order` null, элемент перемещается в конец
          if (b.order === null) return -1; // Если `order` null, элемент перемещается в конец
          return a.order - b.order;
        })
      : [];
  };

  const sortedPhotoArr = sortingPics(photo_images);
  const sortedPlansArr = sortingPics(plans_images);

  if (sortedPhotoArr.length && sortedPlansArr.length) {
    return [...sortedPhotoArr, ...sortedPlansArr].filter(item => item.image);
  } else if (sortedPhotoArr.length && !sortedPlansArr.length) {
    return sortedPhotoArr;
  } else if (!sortedPhotoArr.length && sortedPlansArr.length) {
    return sortedPlansArr;
  } else {
    return [];
  }
};

export default formatPhotosArray;
