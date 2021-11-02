export const parseCurrency = ({ amount, language = 'es-ES' }) =>
  new window.Intl.NumberFormat(language, {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
