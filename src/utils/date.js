export const formatDateFromYyyyMmDd = (dateValue, locale = 'en-US') => {
  if (!dateValue) {
    return '';
  }

  const [year, month, day] = dateValue.split('-').map(Number);
  const parsedDate = new Date(year, month - 1, day);

  return parsedDate.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
