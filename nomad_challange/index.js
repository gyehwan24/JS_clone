const time = document.querySelector("#time");

function getDays() {
  const date = new Date();
  const dday = new Date(2022, 11, 25, 0, 0, 0);

  const gap = dday.getTime() - date.getTime();
  const dday_day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const dday_hour = Math.floor(gap / (1000 * 60 * 60)) % 24;
  const dday_minute = Math.floor(gap / (1000 * 60)) % 60;
  const dday_second = Math.floor(gap / 1000) % 60;
  time.innerText = `${dday_day}d ${dday_hour}h ${dday_minute}m ${dday_second}s`;
}
getDays();
setInterval(getDays, 1000);
