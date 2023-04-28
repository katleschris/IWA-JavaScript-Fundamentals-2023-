const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  const createHtml = (athlete) => {
    // Destructure the athlete object and races array
    const { firstName, surname, id, races } = athlete;
    
    const [latestRace] = races.reverse();
    const { date, time: latestTime } = latestRace;
  
    const fragment = document.createDocumentFragment();
  
    // Create a <h2> element to display the athlete's ID
    const title = document.createElement("h2");
    title.textContent = id;
    fragment.appendChild(title);
  
    const list = document.createElement("dl");

    //day, month, and year from the latest race date
  const day = date.getDate();
  const month = MONTHS[date.getMonth()];
  const year = date.getFullYear();

  // total time for the latest race
  const total = latestTime.reduce((acc, curr) => acc + curr, 0);
  const hours = Math.floor(total / 60);
  const minutes = total % 60;

  // Use template literals to create the HTML for the athlete's information
  list.innerHTML = /* html */ `
    <dt>Athlete</dt>
    <dd>${firstName} ${surname}</dd>

    <dt>Total Races</dt>
    <dd>${races.length}</dd>

    <dt>Event Date (Latest)</dt>
    <dd>${day} ${month} ${year}</dd>

    <dt>Total Time (Latest)</dt>
    <dd>${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}</dd>
  `;

  fragment.appendChild(list);
  //fragment containing the athlete's information
  return fragment;
}

// Get the data for the two athletes and store it in variables
const NM372Data = data.find((athlete) => athlete.id === "NM372");
const SV782Data = data.find((athlete) => athlete.id === "SV782");

const NM372Element = document.querySelector("#NM372");
const SV782Element = document.querySelector("#SV782");

//append the HTML for the two athletes
NM372Element.appendChild(createHtml(NM372Data));
SV782Element.appendChild(createHtml(SV782Data));