const BASE_URL = 'https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json';
const table = document.querySelector('.cars__table tbody');
const template = document.querySelector('#cars-row').content;
const colorValues = {
  white: '#ffffff',
  black: '#000000',
  grey: '#c4c4c4',
  red: '#dd1c10',
  green: '#77cf61',
};

const statusValues = {
  'in_stock': 'В наличии',
  'pednding': 'Ожидается',
  'out_of_stock': 'Нет в наличии',
};

const dividePrice = (num) => {
  const str = num.toString();
  const splittedStr = str.split('');
  console.log(splittedStr)
  let res = '';

  let index = 0;
  for (let i = splittedStr.length - 1; i >= 0; i--) {
    if (index === 3) {
      index = 0;
      res = `${splittedStr[i]} ${res}`;
    } else {
      res = `${splittedStr[i]}${res}`;
    }

    ++index;
  }

  return res;
};

const setTemplateValues = (data) => {
  data.forEach(elem => {
    let {title: titleVal, price: priceVal, year: yearVal, description: descriptionVal, color: colorVal, status: statusVal} = elem;
    const clonnedTemplate = template.cloneNode(true);
    const titleWrapper = clonnedTemplate.querySelector('.cars__table-cell--title');
    const title = titleWrapper.querySelector('.cars__table-cell-title');
    const year = clonnedTemplate.querySelector('.cars__table-cell--year');
    const color = clonnedTemplate.querySelector('.cars__table-cell-color');
    const status = clonnedTemplate.querySelector('.cars__table-cell--status');
    const price = clonnedTemplate.querySelector('.cars__table-cell--price');
    const description = document.createElement('p');
    description.classList.add('cars__table-cell-description')
    priceVal = dividePrice(priceVal);

    for (let key in colorValues) {
      if (key === colorVal) colorVal = colorValues[key];
    }

    for (let key in statusValues) {
      if (key === statusVal) statusVal = statusValues[key];
    }

    title.textContent = titleVal;
    price.textContent = `${priceVal} руб.`;
    year.textContent = yearVal;
    description.textContent = descriptionVal;
    color.style.backgroundColor = colorVal;
    status.textContent = statusVal;

    if (colorVal.startsWith('#fff')) color.style.border = '1px solid #8b8b8b';
    if (descriptionVal) titleWrapper.append(descriptionVal);

    table.append(clonnedTemplate);
  });
}

fetch(BASE_URL)
  .then(response => response.json())
  .then(result => {
    console.log(result)
    setTemplateValues(result)
  })
  .catch(err => {
    throw new Error(err)
  });
