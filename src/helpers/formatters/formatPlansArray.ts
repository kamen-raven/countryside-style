import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { VillageObjectInterface } from "~interfaces/villages.interface";

const formatPlansArray = (
  data: RealEstateObjectInterface | VillageObjectInterface
) => {
  const { plans_images } = data; //

  const sortingPics = (arr: typeof plans_images) => {
    return arr.length
      ? arr.sort((a, b) => {
          if (a.order === null) return 1;
          if (b.order === null) return -1;
          return a.order - b.order;
        })
      : [];
  };


  const sortedPlansArr = sortingPics(plans_images);

  if (sortedPlansArr.length) {
    return [...sortedPlansArr];
  } else {
    return [];
  }
};

export default formatPlansArray;
