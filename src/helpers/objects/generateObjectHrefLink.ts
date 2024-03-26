import { RealEstateObjectInterface } from "~interfaces/objects.interface";

function generateObjectHrefLink(object: RealEstateObjectInterface) {
  const setCategoryType = {
    Квартира: "flats",
    "Земельные участки": "lands",
    "Дома, дачи, коттеджи": "houses-and-cottages",
  };

  const category = object.category as keyof typeof setCategoryType;
  const type = category ? setCategoryType[category] : undefined;


  //const type = setCategoryType[object.category as keyof typeof setCategoryType];
  return type;
}

export default generateObjectHrefLink;
