/* import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { VillageObjectInterface } from "~interfaces/villages.interface";

const formatPhotosArray = (data: RealEstateObjectInterface | VillageObjectInterface) => {
  const photoArr = data.photo_images.length > 0 ? data.photo_images : null;
  const plansArr = data.plans_images.length > 0 ? data.plans_images : null;


  // Сортировка массива по полю "order" в порядке возрастания
  if (photoArr) {
    photoArr.sort((a, b) => a.order - b.order);
  }
  if (plansArr) {
    plansArr.sort((a, b) => a.order - b.order);
  }

  if (photoArr && plansArr) {
    const allPhotos = photoArr.concat(plansArr);
  }


  return allPhotos;
};
 */
