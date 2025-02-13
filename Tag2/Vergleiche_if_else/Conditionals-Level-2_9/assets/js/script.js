let einkaufswert = Number(prompt("Einkaufswert: "));
let rabatt = 0;

if (einkaufswert > 100) {
  rabatt = einkaufswert * 0.2;
  einkaufswert = einkaufswert - rabatt;
  console.log("Einkaufswert:" + einkaufswert);
  console.log("Rabatt:" + rabatt);
} else if (einkaufswert > 50 && einkaufswert < 100) {
  rabatt = einkaufswert * 0.1;
  einkaufswert = einkaufswert - rabatt;
  console.log("Einkaufswert:" + einkaufswert);
  console.log("Rabatt:" + rabatt);
} else {
  console.log("Sorry. Gibt es keinen Rabatt :-(");
}
