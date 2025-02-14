


let date  = new Date();

let day = date.getDate();
let month = date.getMonth() + 1; // Monate sind 0-basiert, daher +1
let year = date.getFullYear();

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let newDate = date.toLocaleDateString();
let time = date.toLocaleTimeString("de-DE");

console.log(date); // Fri Feb 14 2025 14:05:03
console.log(newDate); // 14.02.2025
console.log(time); // 14:05:03