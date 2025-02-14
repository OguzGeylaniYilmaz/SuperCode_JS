
let h1 = document.getElementById("myHeading");

let punktzahl = Number(window.prompt("Punktzahl: "));

let ergebnis = punktzahl >= 50 ? "Bestanden" : "Nicht bestanden";

h1.innerHTML = ergebnis;
