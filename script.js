const_calendar =document.querySelector(".calender"),
  date = document.querySelector(".date"),
  dayscontainer = document.querySelector(".days"),
 prev = document.querySelector(".prev");
next = document.querySelector(".next");

let today = new Date();
let activeDay;
let month = today.getFullMonth();
let year = today.getFullYear();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

//function to add days

function initcalendar() {
     //to get prev month days and current month all days and rem next month days
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDays = lastDay.getDate();
  const day = firstDay.getDate();
     const nextDays = 7 - lastDay.getDay() - 1;

    //update date top of calendar
    getComputedStyle.innerHTML = months[months] + " " + year;

 //adding days on  

 let days ="";

 //prev month days

 for (let x = days; x > 0; x--) {
    days = <div class="day prev-date" >${prevdays - x + 1}</div>
 }

  dayscontainer.innerHTML = days;
}

initcalendar();
