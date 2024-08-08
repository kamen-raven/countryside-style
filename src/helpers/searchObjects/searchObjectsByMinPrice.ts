import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function searchObjectsByMinPrice(data: RealEstateObjectInterface[], price: number) {

    const filteredObjects = data.filter((object) => {
      // Используем метод
      return object.price >= price;
    });
    return filteredObjects;
  }

  export default searchObjectsByMinPrice;
