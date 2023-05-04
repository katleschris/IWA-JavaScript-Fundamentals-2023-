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
];

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
  const { firstName, surname, id, races } = athlete;
  const [latestRace] = races.slice(-1);
  const { date, time } = latestRace;

  const fragment = document.createDocumentFragment();

  const title = document.createElement("h2");
  title.textContent = `Athlete: ${id}`;
  fragment.appendChild(title);

  const list = document.createElement("dl");

  const latestRaceDate = new Date(date); // Convert date to a Date object
  const day = latestRaceDate.getDate();
  const month = MONTHS[latestRaceDate.getMonth()];
  const year = latestRaceDate.getFullYear();

  const total = time.reduce((acc, curr) => acc + curr, 0);

  const dt1 = document.createElement("dt");
  dt1.textContent = "Fullname";
  list.appendChild(dt1);
  const dd1 = document.createElement("dd");
  dd1.textContent = `${firstName} ${surname}`;
  list.appendChild(dd1);

  const dt2 = document.createElement("dt");
  dt2.textContent = "Number of races";
  list.appendChild(dt2);
  const dd2 = document.createElement("dd");
  dd2.textContent = races.length;
  list.appendChild(dd2);

  const dt3 = document.createElement("dt");
  dt3.textContent = "Date of most recent race";
  list.appendChild(dt3);
  const dd3 = document.createElement("dd");
  dd3.textContent = `${day} ${month} ${year}`;
  list.appendChild(dd3);

  const dt4 = document.createElement("dt");
  dt4.textContent = "Duration of most recent race";
  list.appendChild(dt4);
  const dd4 = document.createElement("dd");
  dd4.textContent = `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  list.appendChild(dd4);

  fragment.appendChild(list);

  const section = document.querySelector(`[data-athlete="${id}"]`);
  section.appendChild(fragment);
};


const renderAthleteData = (athleteId) => {
  const athleteSection = document.querySelector(`[data-athlete="${athleteId}"]`);
  const athleteData = data.response.data[athleteId];
  const html = createHtml(athleteData);
  athleteSection.appendChild(html);
};

renderAthleteData("NM372");
renderAthleteData("SV782");
