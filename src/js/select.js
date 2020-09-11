const body = document.querySelector('body');
const selectWrapper = body.querySelector('.form__select-wrapper');
const selectTitleWrapper = selectWrapper.querySelector('.form__select-title-wrapper');
const selectOptionsWrapper = selectWrapper.querySelector('.form__select-options-wrapper');
const selectTitleValue = selectTitleWrapper.children;

const handleSelectClick = (evt) => {
  const target = evt.target;
  const isActiveSelect = selectOptionsWrapper.classList.contains('active-select');
  let optionValue;

  if (target.closest('.form__select-title-wrapper')) {
    selectOptionsWrapper.classList.toggle('active-select');
  } else if (isActiveSelect) {
    selectOptionsWrapper.classList.remove('active-select');
  }

  if (target.closest('.form__select-options-wrapper')) {
    if (target.closest('label')) {
      optionValue = target.textContent;
      selectTitleValue[0].textContent = optionValue;
    }
  }
};

body.addEventListener('click', handleSelectClick);
