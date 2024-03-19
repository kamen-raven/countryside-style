const formatDate = (dateString: string) => {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
  ];

  const [year, monthIndex, day] = dateString.split('-');
  const month = months[parseInt(monthIndex, 10) - 1]; // -1, так как массивы индексируются с нуля

  return `${day} ${month} ${year} года`;
};

export default formatDate;
