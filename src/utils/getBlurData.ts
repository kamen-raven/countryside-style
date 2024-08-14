import { getPlaiceholder } from "plaiceholder";

async function getBlurData(src: string) {
  try {
    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
    const { base64 } = await getPlaiceholder(buffer);

    return base64;
  } catch (err) {
    err;
  }
}

// Универсальный интерфейс, содержащий поле image
interface ImageLikeInterface {
  image: string;
}



// Универсальная функция для добавления blurredDataUrl
async function addBlurredDataUrls<T extends ImageLikeInterface>(
  items: T[]
): Promise<(T & { blurredDataUrl: string })[]> {
  const base64Promises = items.map(item => getBlurData(item.image));
  const base64Results = await Promise.all(base64Promises);

  const itemsWithBlur = items.map((item, index) => {
    return {
      ...item,
      blurredDataUrl: base64Results[index] ?? ''
    };
  });

  return itemsWithBlur;
}


export {
  getBlurData,
  addBlurredDataUrls
};
