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
// Only edit below 

const createArray = (length, initialValue = null) => {
  return Array.from({ length }, () => initialValue);
};

const createData = () => {
  const current = new Date();
  current.setDate(1);

  const startDay = current.getDay();
  const daysInMonth = new Date(
    current.getFullYear(),
    current.getMonth() + 1,
    0
  ).getDate();

  const weeks = createArray(5);
  const days = createArray(7);

  let day = 1;
  for (let weekIndex in weeks) {
    const weekData = {
      week: parseInt(weekIndex) + 1,
      days: [],
    };

    for (let dayIndex in days) {
      const dayOfWeek = parseInt(dayIndex) + 1;
      const isValid = day > 0 && day <= daysInMonth;

      const dayData = {
        dayOfWeek,
        value: isValid ? day : "",
        isToday: false,
        isWeekend: dayOfWeek === 1 || dayOfWeek === 7,
        isAlternate: weekData.week % 2 === 0,
      };

      const date = new Date(current.getFullYear(), current.getMonth(), day);
      const today = new Date();

      if (date.toDateString() === today.toDateString()) {
        dayData.isToday = true;
      }

      weekData.days.push(dayData);
      day += 1;
    }

    weeks[weekIndex] = weekData;
  }

  return weeks;
};

const addCell = (existing, classString, value) => {
  return `${existing}
          <td class="${classString}">
            ${value}
          </td>`;
};

const createHtml = (data) => {
  let result = '<table>';

  // Create header row with day names
  let headerRow = '';
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let day of daysOfWeek) {
    headerRow = addCell(headerRow, 'table__cell table__cell_header', day);
  }
  result = `${result}<thead><tr>${headerRow}</tr></thead>`;

  // Create table body with weeks and days
  let bodyRows = '';
  for (let week of data) {
    let inner = '';
    inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`);

    for (let day of week.days) {
      let classString = 'table__cell';

      if (day.isToday) classString += ' table__cell_today';
      if (day.isWeekend) classString += ' table__cell_weekend';
      if (day.isAlternate) classString += ' table__cell_alternate';

      inner = addCell(inner, classString, day.value);
    }

    bodyRows = `${bodyRows}<tr>${inner}</tr>`;
  }
  result = `${result}<tbody>${bodyRows}</tbody></table>`;

  return result;
};

// Create and display the calendar
const data = createData();
const calendarHtml = createHtml(data);
document.getElementById('calendar').innerHTML = calendarHtml;
