const toRub = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0
});


const parseFormattedNumber = (value: string): number => {
  return parseFloat(value.replace(/\s/g, '').replace('₽', ''));
};

const formatNumber = (value: number): string => {
  return Number.isNaN(value) ? '' : toRub.format(value);
};

export  {formatNumber, parseFormattedNumber};
