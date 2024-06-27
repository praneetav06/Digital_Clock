const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12){
        // the new hour would be 13 - 12 = 1
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0"  + h : h;
    m = m < 10 ? "0"  + m : m;
    s = s < 10 ? "0"  + s : s;

    hoursElement.innerText = h;
    minutesElement.innerText = m;
    secondsElement.innerText = s;
    ampmElement.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();