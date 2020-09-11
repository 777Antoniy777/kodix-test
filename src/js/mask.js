import IMask from 'imask';

const inputPrice = document.querySelector('input[id="price"]');
const inputYear = document.querySelector('input[id="year"]');

const maskInputPriceOptions = {
  mask: Number,
  thousandsSeparator: ' ',
};

const maskInputYearOptions = {
  mask: Number,
  min: 1000,
  max: 9999,
};

IMask(inputPrice, maskInputPriceOptions);
IMask(inputYear, maskInputYearOptions);
