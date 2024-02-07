/*{
[confirm("Ви любите читати книги?"), confirm("Погода хороша?"), confirm("Ви любите пити пиво?")]
}

{const answers = [];
answers[0] = prompt("Як вас звати?");
answers[1] = prompt("Як ви докотилися до такого життя?");
answers[2] = prompt("Як ваш настрій?");
}

{const Arr = [1, 2, 2, 6, 8, "o"];
const index = prompt("Введіть індекс:");
console.log(Arr [index])
}

{const Arr = [1, 2, 2, 6, 8, "o"];
const index = prompt("Введіть індекс:");
const change = prompt("Введіть на що змінити:");
Arr[index] = change;
}

{const arr = [
    [0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 6, 9, 12, 15],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25]
];
const arr2 = arr.slice(1);
console.log(arr2);
}

{const str = prompt("Введіть рядок:");
const word = prompt("Введіть слово, яке потрібно знайти:");
const arr = str.split(' ');
if (arr.indexOf(word) > -1) {
    alert("Ваше слово " + (arr.indexOf(word)+1) + " у рядку");
}
else{
    alert("Вашого слова немає у рядку!");
}
}

{const arr = [];
arr.push(prompt("Введіть елемент"));
arr.push(prompt("Введіть елемент"));
arr.push(prompt("Введіть елемент"));
arr.push(prompt("Введіть елемент"));
arr.push(prompt("Введіть елемент"));
let el1 = arr.pop();
let el2 = arr.pop();
let el3 = arr.pop();
let el4 = arr.pop();
let el5 = arr.pop();
const arr2 = [];
arr2.push(el1);
arr2.push(el2);
arr2.push(el3);
arr2.push(el4);
arr2.push(el5);
let element1 = arr2.shift();
let element2 = arr2.shift();
let element3 = arr2.shift();
let element4 = arr2.shift();
let element5 = arr2.shift();
arr2.unshift(element1);
arr2.unshift(element2);
arr2.unshift(element3);
arr2.unshift(element4);
arr2.unshift(element5);
}

{const arr = [
    [0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 6, 9, 12, 15],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25]
];
const arr2 = arr.slice();
const arr3 = [[...arr[1]], [...arr[2]], [...arr[3]], [...arr[4]], [...arr[5]]];
}

{const arr = [];
const arr2 = arr;
}

{const arr = [
    [0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 6, 9, 12, 15],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25]
];
const Arr = [...arr[1].slice(1), ...arr[2].slice(1), ...arr[3].slice(1), ...arr[4].slice(1), ...arr[5].slice(1)];
}

{const arr = prompt("Введіть рядок").split('');
console.log(arr);
let [letter1, , , , letter2, , , , letter3] = arr;
alert(letter1 + letter2 + letter3);
}

{const arr = prompt("Введіть рядок").split('');
console.log(arr);
let [, letter1='!', , letter2='!', letter3='!'] = arr;
alert(letter1 + letter2 + letter3);
}

{const arr = [
    [0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 6, 9, 12, 15],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25]
];
const Arr = [...arr[1].slice(1), ...arr[2].slice(1), ...arr[3].slice(1), ...arr[4].slice(1), ...arr[5].slice(1)];
const [...arr4] = Arr;
console.log(arr4);
}

{const names = ["John", "Paul", "George", "Ringo"];
for (const name of names) {
    alert(`Hello, ${name}`);
}
}

{const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";
for (const currency of currencies) {
  str += `<option>${currency}</option>`;
}
str += "</select>";
document.body.innerHTML += str;}

{const names = ["John", "Paul", "George", "Ringo"];
let   str = "<table>";
for (const name of names){
    str += `<th>${name}</th>`;
}
str+= "</table>";
document.body.innerHTML += str;
}

{const names = ["John", "Paul", "George", "Ringo"];
let   str = "<table>";
for (const name of names){
    str += `<tr><td>${name}</td></tr>`;
}
str+= "</table>";
document.body.innerHTML += str;
}

{const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<table>";
for (const currency of currencies) {
  str += "<tr>";
  console.log(currency);
  for (const letter of currency) {
    str += `<td>${letter}</td>`;
    console.log(letter);
  }
  str += "</tr>";
}
str += "</table>";
document.body.innerHTML += str;
}

{const arr = [
    [0, 0, 0, 0, 0, 0],
    [0, 1, 2, 3, 4, 5],
    [0, 2, 4, 6, 8, 10],
    [0, 3, 6, 9, 12, 15],
    [0, 4, 8, 12, 16, 20],
    [0, 5, 10, 15, 20, 25]
];
let str = "<table>";
for (const [rowIndex, row] of arr.entries()) {
str += "<tr>";
  for (const [colIndex, value] of row.entries()) {
    const bgColor = rowIndex % 2 === 0 ? "blue" : "lightblue";
    str += `<td style="background-color: ${bgColor}">${value}</td>`;
  }
  str += "</tr>";
}
str += "</table>";
document.body.innerHTML += str;
}

{const capitalize = str => {
  let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  return result
}
console.log(capitalize("cANBerRa"));

const arr = prompt("Введіть рядок").split(' ');
const capsWords = arr.map(capitalize);
const resStr = capsWords.join(' ');
}

{const arr = prompt("Введіть рядок").split(' ');
const forbiddenWord = "забороненеслово";
const result = arr.filter(word => word !== forbiddenWord);
finalResult = result.join(' ');
}

{const arr = prompt("Введіть рядок").split(' ');
const forbiddenWord = "забороненеслово";
const result = arr.map(word => forbiddenWord.includes(word) ? 'BEEP' : word);
finalResult = result.join(' ');
}

{const currencies = ["USD", "EUR", "GBP", "UAH"];
let str = "<select>";
str += currencies.reduce( (a,b) => a + `<option>${b}</option>`);
str += "</select>";
document.body.innerHTML += str;
}*/

{const line = prompt("Введіть рядок з дужками");
const bracketsStack = [];
let i = 0;
for (const character of line) {
  if (character === '[' || character === '(' || character === '{') {
      bracketsStack.push({ character, index: i + 1 });
  }
  if (character === ']' || character === ')' || character === '}') {  
      if ((bracketsStack === ']' && character === '[') || (bracketsStack === ')' && character === '(') ||  (bracketsStack === '}' && character === '{')) {
        bracketsStack.shift();
        bracketsStack.shift();
      }
  }
  i++;
}
if (bracketsStack.length === 0) {
    console.log("Помилок немає!");
}
}