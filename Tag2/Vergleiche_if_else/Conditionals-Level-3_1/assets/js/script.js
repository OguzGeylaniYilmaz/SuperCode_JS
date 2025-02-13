let budget = Number(prompt("Budget:"));
let lieblingsKlima = prompt("Lieblingsklima:");

let frage = window.prompt("Abenteuer oder Entspannung");

if (budget < 1200)
  console.log(
    "Bleib lieber in Deutschland und besuche die Berge oder die Ostsee."
  );
else if (budget >= 1200) {
  if (lieblingsKlima == "warm" && frage == "Abenteuer") {
    console.log("Reise nach Thailand für ein Dschungelabenteuer!");
  } else if (lieblingsKlima == "warm" && frage == "Entspannung") {
    console.log("Reise nach Bali für einen Strandurlaub!");
  } else if (lieblingsKlima == "kalt" && frage == "Abendteuer") {
    console.log("Reise nach Bali für einen Strandurlaub!");
  } else if (lieblingsKlima == "kalt" && frage == "Entspannung") {
    console.log("Island: Heiße Quellen und wunderschöne Landschaften!");
  } else {
    console.log("Spanien oder Portugal sind großartige Reiseziele für dich!");
  }
}
