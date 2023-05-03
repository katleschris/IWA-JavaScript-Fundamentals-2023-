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

// Wait for the page to load
window.addEventListener('DOMContentLoaded', () => {
  // Get the current date
  const currentDate = new Date();

  // Get the title element and set its text content to the current month and year
  const titleElement = document.querySelector('h1[data-title]');
  titleElement.textContent = currentDate.toLocaleString('default', { month: 'long' }) + ' ' + currentDate.getFullYear();

  // Get the table body element and generate the calendar
  const tableBody = document.querySelector('tbody[data-content]');
  tableBody.innerHTML = generateCalendar(currentDate);

  // Function to generate the calendar HTML for a given month
  function generateCalendar(date) {
    // Get the number of days in the month
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // Set the date to the first day of the month
    date.setDate(1);

    // Get the day of the week of the first day of the month
    const firstDayOfWeek = date.getDay();

    // Create an array to hold the calendar rows
    const rows = [];

    // Loop through each week of the month
    for (let week = 0; week < 6; week++) {
      // Create an array to hold the days of the week for this row
      const days = [];

      // Loop through each day of the week
      for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        // Calculate the day of the month for this cell
        const dayOfMonth = week * 7 + dayOfWeek - firstDayOfWeek + 1;

        // Check if this cell is within the current month
        const isCurrentMonth = dayOfMonth >= 1 && dayOfMonth <= daysInMonth;

        // Create the cell HTML
        const cellHtml = `<td class="table__cell ${!isCurrentMonth ? 'table__cell_inactive' : ''}">${isCurrentMonth ? dayOfMonth : ''}</td>`;

        // Add the cell to the row
        days.push(cellHtml);
      }

      // Add the row to the calendar
      rows.push(`<tr>${days.join('')}</tr>`);
    }

    // Return the generated calendar HTML
    return rows.join('');
  }

});

