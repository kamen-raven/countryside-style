import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function generateObjectsType(Array: RealEstateObjectInterface[]) {
  // Извлекаем все значения "category" из массива данных
  const typeArray:  string [] = Array.map((type) => (
    type.category));
  //console.log(`category из данных с api:`);
  //console.log(typeArray);

  // Фильтруем массив, оставляя только уникальные значения
  const uniqueCategories = typeArray.filter((value, index, self) => {
    // Игнорируем объекты с категорией null
    if (value === null || value === undefined) {
      return false;
    }
    // Возвращаем true только для первого вхождения каждой категории
    return self.findIndex((obj) => obj === value) === index;
  });

      //console.log(`Уникальные category:`);
      //console.log(uniqueCategories);
  return uniqueCategories;

  // Создаем объект, определяющий соответствие между категориями и значениями
/*   const typeMapping: { [key: string]: string } = {
    "Квартиры": "flats",
    "Земельный участок": "lands",
    "Дома, дачи, коттеджи": "houses",
  };

  // Добавляем новый параметр в каждый объект массива
  const resultParams = uniqueCategories.map((item) => ({
    type: typeMapping[item.type],
  }));
  console.log(`Итоговый массив параметров`);
  console.log(resultParams);

  return resultParams; */
}

export default generateObjectsType;
