{let greeting = prompt("Введіть ваше ім'я:");
alert("Вітаю, " + greeting);
}

{let string = prompt("Введіть рядок:");
let split = string.split(',');
let result = split.join(' ,блін, ');
alert(result);
}

{let str = "cANBerRa";
let result = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
console.log(result);
}

{let str = prompt("Введіть рядок:");
let res = str.split(' ');
alert("Кількість слів:" + res.length);}

{let surname = prompt("Введіть ваше прізвище:");
surname = surname.trim();
let data1 = surname.slice(0, 1).toUpperCase() + surname.slice(1).toLowerCase();
let name = prompt("Введіть ваше ім'я:");
name = name.trim();
let data2 = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
let fathername = prompt("Введіть ваше по-батькові:");
fathername = fathername.trim();
let data3 = fathername.slice(0, 1).toUpperCase() + fathername.slice(1).toLowerCase();
let fullName = data1 + " " + data2 + " " + data3;
alert(fullName);
}

{let str = "Було жарко. Василь пив пиво вприкуску з креветками";
let result = str.split(' ');
result[4] = "чай";
result = result.join(' ');
console.log(result);
}

{let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tag = "<br />";
let tagNum = str.indexOf(tag);
let result = str.slice(0, tagNum) + str.slice(tagNum + tag.length);
console.log(result);
}

{let str = "якийсь текст, в якому є один тег <br /> і всяке інше";
let tag = "<br />";
let tagNum = str.indexOf(tag);
let result = str.slice(0, tagNum) + tag.toUpperCase() + str.slice(tagNum + tag.length);
console.log(result);
}

{let str = prompt("Введіть рядок використовуючи \\n як маркер нового рядка");
let result = str.split('\\n');
alert(result.join('\n'));
}