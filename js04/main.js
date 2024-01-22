let task = prompt("Вкажіть завдання, яке хочете виконати?");
if(task === "Number: odd") {let num = +prompt("Введіть число:");
if (!isNaN(num)){
    if (num%2 > 0){
        alert("Ваше число не парне");
    }
    else{
        alert("Ваше число парне");
    }
}
else{
    alert("Ви ввели не число!");
}
}

if(task === "String: lexics") {let text = prompt("Введіть текст:");
if ((text.indexOf("some bad word") > 0)) {
    console.log("Текст містить некоректні слова");
} else {
    console.log("Текст є прийнятним");
}
}

if(task === "Boolean") {let color = confirm('Ваш улюблений колір чорний?');
let ok = confirm('Хочете натиснути ОК?');
}

if(task === "Boolean: if") {let sex = confirm('Ви чоловічої статі?');
if (sex){
    alert("ви чоловік!");
}
else {
    alert("ви жінка!");
}
}

if(task === "Comparison: sizes") {let size = +prompt('Введіть розмір (40-48)');
if (size === 40){
    alert('Ваш ромір XS!');
}
if (size === 42){
    alert('Ваш ромір S!');
}
if (size === 44){
    alert('Ваш ромір M!');
}
if (size === 46){
    alert('Ваш ромір L!');
}
if (size === 48){
    alert('Ваш ромір XL!');
}
}

if(task === "Ternary") {confirm('Ви чоловічої статі?') ? alert("Ви чоловік") : alert("Ви жінка")}

if(task === "Prompt: or") {prompt("Введіть ваш вік:") || alert("Помилка");}

if(task === "Confirm: or this days") {confirm('шопінг?') || alert("ти - бяка");}

if(task === "Confirm: if this days") {if(!confirm('шопінг?')) {
    alert("ти - бяка")
}
}

if(task === "Default: or") {let surname = prompt("Введіть прізвище:") || "Прізвище";
let name = prompt("Введіть ім'я:") || "Ім'я";
let fathername = prompt("Введіть по-батькові:") || "По-батькові";
}

if(task === "Default: if") {let surname = prompt("Введіть прізвище:");
if (!surname){
    surname = "Прізвище";
}
let name = prompt("Введіть ім'я:");
if (!name){
    name = "Ім'я";
}
let fathername = prompt("Введіть по-батькові:")
if (!fathername){
    fathername = "По-батькові";
}
}

if(task === "Login and password") {const rightlogin = "admin";
const rightpassword = "qwerty";
const login = prompt("Введіть логін:");
const password = prompt("Введіть пароль:");
if(login === rightlogin) {
    if(password === rightpassword) {
        alert("Вітаю!");
    }
    else{
        alert("Невірний пароль");
    }
}
else{
    alert("Невірний логін");
}
}

if(task === "Currency exchange") {let currency = prompt("Введіть валюту:").toUpperCase();
let buyORsell = confirm("Бажаєте купити?");
let rate;
if (currency === "USD") {
  rate = buyORsell ? 38.3 : 38.19;
}
if (currency === "EUR") {
  rate = buyORsell ? 41.85 : 41.63;
}
let amount = +prompt("Введіть суму на обмін:");
let result = buyORsell ? amount / rate : amount * rate;
alert(result.toFixed(2));
}

if(task === "Scissors") {let userV = prompt("Введіть камінь, ножиці або папір");
let programV = Math.random();
if(programV < 0.4) {
    programV = "камінь";
}
if(0.41 < programV < 0.7) {
    programV = "ножиці";
}
if(programV > 0.71) {
    programV = "папір";
}
alert(programV);
if(userV === programV) {
    alert("Нічия!");
}
if(userV === "ножиці" && programV === "камінь") {
    alert("Ви програли");
}
if(userV === "ножиці" && programV === "папір") {
    alert("Ви перемогли");
}
if(userV === "камінь" && programV === "ножиці") {
    alert("Ви перемогли");
}
if(userV === "камінь" && programV === "папір") {
    alert("Ви програли");
}
if(userV === "папір" && programV === "камінь") {
    alert("Ви перемогли");
}
if(userV === "папір" && programV === "ножиці") {
    alert("Ви програли");
}
}