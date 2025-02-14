



let username = "Oguz"; // Kann auch undefined oder ein Name sein

let anzeige = (username ?? "Unbekannt") === "Unbekannt" 
              ? "Kein Name angegeben" 
              : `Willkommen, ${username}!`;

console.log(anzeige);