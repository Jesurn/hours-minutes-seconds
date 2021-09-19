const hs = document.getElementById("hs");
const ms = document.getElementById("ms");
const ss = document.getElementById("ss");
const clear = document.getElementById("clear");
const hms = document.getElementById("hms");
const inc = document.getElementById("inc");
const calc = document.getElementById("calc");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

let lastRow = 0;

hour.value = 0;
minute.value = 0;
second.value = 0;

clear.addEventListener("click", () => {
    document.querySelectorAll('.hour').forEach((hour) => {
        hour.value = 0;
    });

    document.querySelectorAll('.minute').forEach((minute) => {
        minute.value = 0;
    });

    document.querySelectorAll('.second').forEach((second) => {
        second.value = 0;
    });
});

inc.addEventListener("click", () => {
    const row = document.createElement("div");
    const classType = ["hour", "minute", "second"];
    
    row.classList.add("row");
    hms.appendChild(row);
    lastRow += 1;

    for (let i = 0; i < classType.length; i++) {
        row.innerHTML += `<div class="cell"><input class="${classType[i]}" type="text" value="0"></div>`;
    }
});

dec.addEventListener("click", () => {
    if (lastRow > 0) {
        hms.removeChild(hms.lastChild);
        lastRow -= 1;
    } else {
        console.log("default...")
    }
});

calc.addEventListener("click", () => {
    let tempHour = 0;
    let tempMinute = 0;
    let tempSecond = 0;

    document.querySelectorAll('.hour').forEach((hour) => {
        tempHour += parseInt(hour.value);
    });

    document.querySelectorAll('.minute').forEach((minute) => {
        tempMinute += parseInt(minute.value);
    });

    document.querySelectorAll('.second').forEach((second) => {
        tempSecond += parseInt(second.value);
    });

    ss.innerText = tempSecond % 60;
    tempMinute = tempMinute + Math.floor(tempSecond / 60);
    ms.innerText = tempMinute % 60;
    hs.innerText = tempHour + Math.floor(tempMinute / 60);
});