import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { VillageObjectInterface } from "~interfaces/villages.interface";
import { addBlurredDataUrls } from "./getBlurData";
import { UsersInterface } from "~interfaces/users.interface";
import { ImageInterface } from "~interfaces/objectImage.interface";

// Функция добавления blurredDataUrl к данным объекта RealEstateObjectInterface || VillageObjectInterface
async function addBlurImgToObject(
  realEstateObject: RealEstateObjectInterface | VillageObjectInterface
): Promise<RealEstateObjectInterface | VillageObjectInterface> {
  // Обновляем photo_images
  const updatedPhotoImages = await addBlurredDataUrls(
    realEstateObject.photo_images
  );

  // Обновляем plans_images
  const updatedPlansImages = await addBlurredDataUrls(
    realEstateObject.plans_images
  );

  // Возвращаем новый объект с обновленными массивами изображений
  return {
    ...realEstateObject,
    photo_images: updatedPhotoImages,
    plans_images: updatedPlansImages,
  };
}

// Функция добавления blurredDataUrl к массиву данных объектов RealEstateObjectInterface[] || VillageObjectInterface[]
// Универсальная функция добавления blurredDataUrl к массиву объектов, содержащих изображения
async function addBlurImgToObjects<T extends { photo_images: ImageInterface[]; plans_images: ImageInterface[] }>(
  objects: T[]
): Promise<T[]> {
  // Итерация по каждому объекту в массиве
  const updatedObjects = await Promise.all(
    objects.map(async (obj) => {
      // Обновляем photo_images
      const updatedPhotoImages = await addBlurredDataUrls(obj.photo_images);

      // Обновляем plans_images
      const updatedPlansImages = await addBlurredDataUrls(obj.plans_images);

      // Возвращаем новый объект с обновленными массивами изображений
      return {
        ...obj,
        photo_images: updatedPhotoImages,
        plans_images: updatedPlansImages,
      };
    })
  );

  return updatedObjects;
}

// Функция для добавления blurredDataUrl к аватарам в объекте UsersInterface (сотрудники)
async function addBlurImgToUser(user: UsersInterface): Promise<UsersInterface> {
  const updatedAvatars = await addBlurredDataUrls(user.avatars);

  return {
    ...user,
    avatars: updatedAvatars,
  };
}

export { addBlurImgToObject, addBlurImgToObjects, addBlurImgToUser };
