const form = document.querySelector('.form__wrapper');
const submitButton = form.querySelector('.form__button');
const table = document.querySelector('.cars__table tbody');
const template = document.querySelector('#cars-row').content;
const formState = {
  name: null,
  year: null,
  price: null,
  description: null,
  color: null,
  status: null,
};

const colorValues = {
  white: '#ffffff',
  black: '#000000',
  grey: '#c4c4c4',
  red: '#dd1c10',
  green: '#77cf61',
};

const clearFormState = () => {
  for (let key in formState) formState[key] = null;
};

const clearFormInputs = (inputsWrapper) => {
  inputsWrapper.forEach(elem => {
    const input = elem.children[0];
    const label = elem.children[1];

    input.value = '';
    label.classList.remove('active-input');
  })
};

const clearFormSelect = (select) => {
  select.textContent = 'Статус';
};

const clearFormRadioButtons = (radioButtons) => {
  radioButtons.forEach(elem => {
    elem.checked = false;
  })
};

const clearForm = () => {
  const inputsWrapper = form.querySelectorAll('.form__field-wrapper');
  const radioButtons = form.querySelectorAll('input[type="radio"]');
  const select = form.querySelector('.form__select-title-wrapper p');

  clearFormInputs(inputsWrapper);
  clearFormSelect(select);
  clearFormRadioButtons(radioButtons);
};

const setTemplateValues = (formState) => {
  const clonnedTemplate = template.cloneNode(true);
  const titleWrapper = clonnedTemplate.querySelector('.cars__table-cell--title');
  const title = titleWrapper.querySelector('.cars__table-cell-title');
  const year = clonnedTemplate.querySelector('.cars__table-cell--year');
  const color = clonnedTemplate.querySelector('.cars__table-cell-color');
  const status = clonnedTemplate.querySelector('.cars__table-cell--status');
  const price = clonnedTemplate.querySelector('.cars__table-cell--price');
  const description = document.createElement('p');
  description.classList.add('cars__table-cell-description')

  for (let key in formState) {
    let value = formState[key];

    switch(key) {
      case 'name':
        if (!value) return false;
        title.textContent = value;
        break;
      case 'price':
        if (!value) return false;
        price.textContent = `${value} руб.`;
        break;
      case 'year':
        if (!value) return false;
        year.textContent = value;
        break;
      case 'description':
        description.textContent = value;
        if (value) titleWrapper.append(description);
        break;
      case 'color':
        if (!value) return false;
        for (let key in colorValues) {
          if (key === value) value = colorValues[key];
        }
        
        if (value.startsWith('#fff')) color.style.border = '1px solid #8b8b8b';
        color.style.backgroundColor = value;
        break;
      case 'status':
        if (!value) return false;
        status.textContent = value;
        break;
      default:
        break;
    }
  }

  return clonnedTemplate;
}

const handleSubmitButtonClick = () => {
  const formData = new FormData(form);
  const selectValue = form.querySelector('.form__select-title-wrapper p').textContent;

  for (let entry of formData.entries()) {
    formState[entry[0]] = entry[1];

    if (selectValue === 'Статус') {
      formState.status = null;
    } else {
      formState.status = selectValue;
    }
  }

  const clonnedTemplate = setTemplateValues(formState);
  if (clonnedTemplate) {
    table.append(clonnedTemplate);
  }
};

const handleFormSubmit = (evt) => {
  evt.preventDefault();

  clearFormState();
  clearForm();
};

form.addEventListener('submit', handleFormSubmit);
submitButton.addEventListener('click', handleSubmitButtonClick);
