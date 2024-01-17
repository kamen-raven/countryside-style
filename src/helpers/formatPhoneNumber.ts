const formatPhoneNumber = (phoneNumber: string) => {
  const cleanedNumber = phoneNumber.replace(/\D/g, ''); // Удаление всех нецифровых символов
  const match = cleanedNumber.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
  }

  // Возвращаем исходный номер, если формат не соответствует ожидаемому
  return phoneNumber;
};

export default formatPhoneNumber;
