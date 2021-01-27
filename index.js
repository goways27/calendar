const calendar = document.getElementById("calendar");
const week = document.querySelector(".week");
const days = document.querySelector(".days");

let today = new Date();
let count = 0;

const firstDay = (count) =>
    new Date(today.getFullYear(), today.getMonth() + count, 1);
const lastDay = (count) =>
    new Date(today.getFullYear(), today.getMonth() + count + 1, 0);
const weekName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

week.innerHTML = weekName
    .map((week) => `<div class="weekname"> ${week} </div>`)
    .join("");
1;

function calendarBuilding(firstDate, lastDate) {
    const calendarHeader = calendar.querySelector("h2");

    calendarHeader.innerText = `${lastDate.getFullYear()} 년 ${
        lastDate.getMonth() + 1
    } 월`;

    days.innerHTML = "";
    for (let i = 0; i < firstDate; i++) {
        days.innerHTML += `<div class="daynum empty"></div>`;
    }

    for (let i = 1; i < lastDate.getDate() + 1; i++) {
        days.innerHTML += `<div class="daynum"> ${i} </div>`;
    }
}

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
nextBtn.addEventListener("click", handleNextCalendar);
prevBtn.addEventListener("click", handlePrevCalendar);

function handleNextCalendar() {
    count += 1;
    const firstDate = firstDay(count).getDay();
    const lastDate = lastDay(count);
    calendarBuilding(firstDate, lastDate);
}

function handlePrevCalendar() {
    count -= 1;
    const firstDate = firstDay(count).getDay();
    const lastDate = lastDay(count);
    calendarBuilding(firstDate, lastDate);
}

function init() {
    const firstDate = firstDay(0).getDay();
    const lastDate = lastDay(0);
    calendarBuilding(firstDate, lastDate);
}

init();