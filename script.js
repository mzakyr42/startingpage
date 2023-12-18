const dateElement = document.querySelector('.date');
const timeElement = document.querySelector('.time');

function updateDateTime() {
  const now = new Date();

  const dateOption = { year: "numeric", month: "short", day: "numeric" };
  const formatedDate = now.toLocaleDateString(undefined, dateOption);

  const timeOption = { hour: '2-digit', minute: '2-digit', hourCycle: 'h24' };
  const formatedTime = now.toLocaleTimeString(undefined, timeOption);

  dateElement.textContent = `${formatedDate}`;
  timeElement.textContent = `${formatedTime}`;

  setTimeout(updateDateTime, 500);
}

updateDateTime();
