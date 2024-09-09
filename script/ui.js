// doc
const DaySpan = document.getElementById("currentDay");

// vars
let dayDur = 100; // day duration in milli seconds
let currentDay = 0;

// functions
function displayDay() {
    currentDay++;
    DaySpan.innerText = currentDay;
}

//code
setInterval(displayDay, dayDur);
