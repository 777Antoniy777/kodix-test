const form = document.querySelector('.form');

const handleInputFocusout = (evt) => {
  const target = evt.target;
  let label;
  let value;

  if (!target.closest('input:not([type="radio"])')) return false;

  label = target.nextElementSibling;
  value = target.value;

  if (value) {
    label.classList.add('active-input')
  } else {
    label.classList.remove('active-input')
  }
};

form.addEventListener('focusout', handleInputFocusout);
