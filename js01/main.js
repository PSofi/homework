let firstSem = prompt ('Введіть оцінку за перший семестр');
let secondSem = prompt ('Введіть оцінку за другий семестр');
firstSem = parseFloat(firstSem);
secondSem = parseFloat(secondSem);
console.log('Семестрова оцінка:' + ((firstSem + secondSem) / 2));