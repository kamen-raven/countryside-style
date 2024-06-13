import { ownerTextInterface } from "~data/constant/teamInfo/ownersText";
import { UsersInterface } from "~interfaces/users.interface";


// функция отрисовки соответствующих текстов в карточке руководителя
function getOwnerTextToPage(
  data: ownerTextInterface[],
  userData: UsersInterface,
  targetPage: "main" | "about" | "services" | "reviews" | "noSpecialText"
) {
  const user =`${userData.first_name} ${userData.last_name}`;
  const ownerData = data.find(item => item.owner === user);


  if (!ownerData) {
    return userData.description;
  }

  const targetText = ownerData.texts.find(textItem => textItem.page === targetPage);

  if (!targetText) {
    return userData.description;
  }

  return targetText.text;
}

export default getOwnerTextToPage;
