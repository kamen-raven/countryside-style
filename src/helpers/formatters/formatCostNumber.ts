const formatNumber = (num: number) => {
  return num.toLocaleString('ru-RU');
};

/* const formatNumber = (value: string) => {
  const numberString = value.replace(/\D/g, ''); // Удаляем все, кроме цифр
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ' '); // Добавляем пробелы каждые три цифры
}; */

export default formatNumber;
