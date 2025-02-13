



let point = Number(prompt("Bitte geben Sie Ihre Punktzahl ein: "));

if (point >= 90 && point <= 100) console.log("Sehr gut");
else if (point >= 75 && point <= 89) console.log("Gut");
else if (point >= 50 && point <= 74) console.log("Befriedigend");
else if (point >= 0 && point <= 49) console.log("Nicht bestanden");
else console.log("Ungültige Punktzahl");
