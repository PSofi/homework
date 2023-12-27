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
let currency = prompt('Введіть суму у доларах для переведення у євро');
+ currency;
let cent = currency / rate;
alert(cent.toFixed(2));}