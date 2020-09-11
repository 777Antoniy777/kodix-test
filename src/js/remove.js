const table = document.querySelector('.cars__table');

const handleButtonClick = (evt) => {
  const target = evt.target;
  let tableRow;

  if (!target.closest('.cars__table-cell-button')) return false;

  tableRow = target.closest('.cars__table-row--content');
  tableRow.remove();
};

table.addEventListener('click', handleButtonClick);
