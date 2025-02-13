

let username = window.prompt("Username:");
let password = window.prompt("Password:");

if (username == "admin" && password == "secure123")
  console.log("Login erfolgreich");
else if (username != "admin" && password == "secure123")
  console.log("Unbekannter User");
else if (username == "admin" && password != "secure123")
  console.log("Falsches Passwort");
