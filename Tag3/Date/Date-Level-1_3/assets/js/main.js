let container = document.getElementById("output");

let date1 = new Date("September 2, 2019 09:00:00");
let date2 = new Date(0);
let date3 = new Date(31556908800);
let date4 = new Date(86400000);

container.innerHTML = ` <p><b>Datum 1:</b> ${date1}</p>
    <p><b>Datum 2:</b> ${date2}</p>
    <p><b>Datum 3:</b> ${date3}</p>
    <p><b>Datum 4:</b> ${date4}</p>`;
