const date = document.querySelector("#date");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

const allday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const fulldate = new Date();

date.innerHTML = (fulldate.getDate() < 10 ? "0" : "") + fulldate.getDate();
day.innerHTML = allday[fulldate.getDay()];
month.innerHTML = allmonth[fulldate.getMonth()];
year.innerHTML = fulldate.getFullYear();