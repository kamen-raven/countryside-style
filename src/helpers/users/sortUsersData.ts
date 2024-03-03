import { ApiUsersInterface, UsersInterface } from "~interfaces/users.interface";

// Указываете порядок, в котором вы хотите упорядочить объекты
const desiredOrder = [
  "Павел Соколов",
  "Пётр Манько",
  "Дарья Власова",
  "Виктория Нардина",
  "Елена Жукова",
  "Игорь Степыгин",
  "Анастасия Соколова",
  "Анастасия Каменева",
];

// Функция сравнения для метода sort
function sortUsersList(array: ApiUsersInterface) {
  //! тут убираем тестового пользователя
  const employeeData = array.results.filter(
    (user) => (user.first_name !== "test") || (user.last_name !== "test")
  );

  
  // Функция сравнения для сортировки объектов по порядку, указанному в desiredOrder
  function compareByDesiredOrder(a: UsersInterface, b: UsersInterface) {
    const nameA = `${a.first_name} ${a.last_name}`;
    const nameB = `${b.first_name} ${b.last_name}`;
    const indexA = desiredOrder.indexOf(nameA);
    const indexB = desiredOrder.indexOf(nameB);
    return indexA - indexB;
  }

  // Сортировка массива employeeData по порядку, указанному в desiredOrder
  const sortedEmployeeData = employeeData.sort(compareByDesiredOrder);

  return sortedEmployeeData;
}

export default sortUsersList;
