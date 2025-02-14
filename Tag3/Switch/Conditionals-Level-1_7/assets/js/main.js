let weekdayAsNumber;
let weekdayAsString;

let number = Number(window.prompt("“Please insert a number from 1 to 7"));
weekdayAsNumber = number;

switch (weekdayAsNumber) {
  case 1:
    console.log("Montag");
    break;
  case 2:
    console.log("Dienstag");
    break;
  case 3:
    console.log("Mittwoch");
    break;
  case 4:
    console.log("Donnerstag");
    break;
  case 5:
    console.log("Freitag");
    break;
  case 6:
    console.log("Samstag");
    break;
  case 7:
    console.log("Sontag");
    break;
  default:
    console.log("Weekday must be between 1 and 7");
    break;
}
