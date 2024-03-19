
const formatIframeSrc = (link: string) => {
    // Используем регулярное выражение для поиска значения атрибута src
  const srcValueMatch = link.match(/src="([^"]*)"/);
  // Получаем значение атрибута src из совпадения
  const srcValue = srcValueMatch && srcValueMatch[1];

  if (srcValue) {
    return srcValue;
  } else {
    return '';
  }
};

export default formatIframeSrc;
