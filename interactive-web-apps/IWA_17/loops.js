// scripts.js
// scripts.js

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

const createData = () => {
  const current = new Date();
  current.setDate(1);

  const startDay = current.getDay();
  const daysInMonth = getDaysInMonth(current);

  const weeks = [];
  let days = [];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(current.getFullYear(), current.getMonth(), day);
    const dayOfWeek = date.getDay();

    if (dayOfWeek === 0 && days.length > 0) {
      weeks.push(days);
      days = [];
    }

    days.push({ dayOfWeek, day });
  }

  if (days.length > 0) {
    weeks.push(days);
  }

  return weeks;
};

const addCell = (existing, classString, value) => {
  const cell = document.createElement('td');
  cell.classList.add('table__cell');
  classString.split(' ').forEach((className) => cell.classList.add(className));
  cell.textContent = value ?? '';

  existing.appendChild(cell);
};

const renderCalendar = () => {
  const title = document.querySelector('[data-title]');
  const content = document.querySelector('[data-content]');

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  title.textContent = `${MONTHS[currentMonth]} ${currentYear}`;

  content.innerHTML = '';

  const weeks = createData();
  let isAlternate = false;

  weeks.forEach((days, index) => {
    const row = document.createElement('tr');

    const weekNumber = document.createElement('td');
    weekNumber.classList.add('table__cell', 'table__cell_sidebar');
    weekNumber.textContent = `Week ${index + 1}`;

    if (isAlternate) {
      weekNumber.classList.add('table__cell_alternate');
    }

    row.appendChild(weekNumber);

    days.forEach(({ dayOfWeek, day }) => {
      const cellClassString = ['table__cell'];

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        cellClassString.push('table__cell_weekend');
      }

      if (day === new Date().getDate()) {
        cellClassString.push('table__cell_today');
      }

      if (isAlternate) {
        cellClassString.push('table__cell_alternate');
      }

      const cellValue = day || '';
      addCell(row, cellClassString.join(' '), cellValue);
    });

    content.appendChild(row);
    isAlternate = !isAlternate;
  });
};

window.addEventListener('load', renderCalendar);
