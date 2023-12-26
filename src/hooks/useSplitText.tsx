interface SplitTextResult {
  splitted: [string, string][];
/*   splitTextAtPunctuation: () => [string, string]; */
}

export default function useSplitText(initialText: string): SplitTextResult {

  const splitTextIntoParagraphs = (text: string) => {
    const paragraphs = text.split('\n\n'); // Разбиваем текст по переводам строки

    const paragraphObjects = paragraphs.map((paragraph, index) => ({
      id: index + 1, // Используем индекс + 1 в качестве идентификатора абзаца
      content: paragraph.trim(), // Удаляем лишние пробелы из начала и конца абзаца
    }));

    return paragraphObjects;
  };


  const splitParagraphs = splitTextIntoParagraphs(initialText);

  const splitTextAtPunctuation = (text: string): [string, string] => {
    const punctuationIndex = text.search(/[|]/);

    if (punctuationIndex !== -1) {
      const firstPart = text.slice(0, punctuationIndex);
      const secondPart = text.slice(punctuationIndex + 1);
      return [firstPart, secondPart];
    } else {
      // Если знаков препинания нет, возвращаем исходный текст и пустую строку
      return ['', text];
    }
  };


  const splitted = splitParagraphs.map((p) => {
    return splitTextAtPunctuation(p.content);
  });

  return {
    splitted,
  };
}
