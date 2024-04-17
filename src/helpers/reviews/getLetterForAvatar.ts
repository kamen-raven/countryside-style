function getLetterForAvatar(author: string) {
  // Разбиваем фразу на слова
  const words = author.split(" ");

  // Создаём массив для хранения первых букв
  const initials: string[] = [];

  // Проходим по каждому слову
  words.forEach((word) => {
    // Берём первую букву слова и добавляем её в массив в верхнем регистре
    initials.push(word.charAt(0).toUpperCase());
  });

  // Объединяем все буквы в строку и возвращаем
  return initials.join("");
}

export default getLetterForAvatar;
