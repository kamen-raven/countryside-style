
import { getPlaiceholder } from "plaiceholder";
import { ImageInterface } from "~interfaces/objectImage.interface";
import { RealEstateObjectInterface } from "~interfaces/objects.interface";
import { VillageObjectInterface } from "~interfaces/villages.interface";

async function getBlurData(src: string) {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    console.log(`base64: ${base64}`);


    return base64;
  } catch (err) {
    err;
  }
}

interface ImagesWithBlurInterface extends ImageInterface  {
  blurredDataUrl: string;
}[];



async function addBlurredDataUrls(images: ImageInterface[]): Promise<ImagesWithBlurInterface[]> {

  const base64Promises = images.map(img => getBlurData(img.image));

  const base64Results = await Promise.all(base64Promises);

  const imgWithBlur: ImagesWithBlurInterface[] = images.map((img, index) => {
    return {
      ...img, // копируем все свойства из ImageInterface
      blurredDataUrl: base64Results[index] ?? ''  // добавляем новое свойство blurredDataUrl
    };
  });

  return imgWithBlur;
}

// Функция добавления blurredDataUrl к массиву данных объекта
async function addBlurredDataUrlsToObject(
  realEstateObject: RealEstateObjectInterface | VillageObjectInterface
): Promise<RealEstateObjectInterface | VillageObjectInterface> {

  // Обновляем photo_images
  const updatedPhotoImages = await addBlurredDataUrls(realEstateObject.photo_images);

  // Обновляем plans_images
  const updatedPlansImages = await addBlurredDataUrls(realEstateObject.plans_images);

  // Возвращаем новый объект с обновленными массивами изображений
  return {
    ...realEstateObject,
    photo_images: updatedPhotoImages,
    plans_images: updatedPlansImages
  };
}


export { getBlurData, addBlurredDataUrls, addBlurredDataUrlsToObject };
