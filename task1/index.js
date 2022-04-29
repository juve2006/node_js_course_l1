function calculate(string) {
  const operators = { // задаємо кожному оператору відповідну функцію (поміщаємо всі знаки в обєкті)
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "//": (x, y) => Math.floor(x / y),
  };
  let str = string.split(" "); // розбиваємо строку по пробілу на 3 частини => перший операнд, оператор, другий операнд

  let x = str[0].length; // перший операнд
  let y = str[2].length; // другий операнд

  let func = operators[str[1]];

  let result = func(x,y);

  return '.'.repeat(result);
}



console.log (calculate("..... + ...............")); // "...................."
console.log (calculate("..... - ..."));          // ".."
console.log (calculate("..... - ."));            // "...."
console.log (calculate("..... * ..."));            // "..............."
console.log (calculate("..... * .."));              // ".........."
console.log (calculate("..... // .."));             // ".."
console.log (calculate("..... // ."));              // "....."
console.log (calculate(". // .."));                 // ""
console.log (calculate(".. - .."));                // ""
