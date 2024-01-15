{var a = (5);  
var b, c;

b = ((a) * (5));  
b = (c = (b/2));
console.log(b);

var a = 5;
var b = a*5;
var c = b/2;
b = c;
console.log(b);
}

{let Age = prompt ('Скільки вам років?');
+ Age;
alert('Ваш рік народження: ' + (2023 - Age));
}

{let TemperatureC = prompt ('Введіть температуру у Цельсіях:');
+ TemperatureC;
alert('Температура у Фаренгейтах:' + (Math.round(TemperatureC * 1.8 + 32)));
}

{let TemperatureF = prompt ('Введіть температуру у Фаренгейтах:');
+ TemperatureF;
alert('Температура у Цельсіях:' + (Math.round((TemperatureF - 32) / 1.8)));
}

{let a = firstNum;
let b = secondNum;
Math.floor(a / b);
}

{const rate = 0.91;
let currency = +prompt('Введіть суму у доларах для переведення у євро');
let cent = currency / rate;
alert(cent.toFixed(2));
}

{const red = +prompt('Введіть значення для червоного кольору (від 0 до 255):');
const green = +prompt('Введіть значення для зеленого кольору (від 0 до 255):');
const blue = +prompt('Введіть значення для синього кольору (від 0 до 255):');
alert('#' + red.toString(16) + green.toString(16) + blue.toString(16));
}

{const floors = +prompt('Введіть кількість поверхів:');
const flatAmount = +prompt('Введіть кількість квартир на поверсі:');
const flatNum = +prompt('Введіть номер квартири:');
const flatsInOneEnt = floors * flatAmount;
const entNum = Math.ceil(flatNum / flatsInOneEnt);
const floor = Math.ceil((flatNum % flatsInOneEnt) / flatAmount);
alert('Ваш підїзд:' + entNum + ', ваш поверх:' + floor);
}