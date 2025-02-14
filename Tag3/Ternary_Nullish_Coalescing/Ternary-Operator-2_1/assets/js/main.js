let container = document.querySelector(".output");

let number = "12";

let result =
  number > 0
    ? "Positive Zahl"
    : number < 0
    ? "Negative Zahl"
    : number == 0
    ? "Die Zahl ist Null"
    : "Bitte geben Sie eine Ganzzahl ein";

    container.textContent = result;