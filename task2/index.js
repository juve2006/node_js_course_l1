function grid(n) {
  if (n < 0) return null;
  let abc ='abcdefghijklmnopqrstuqwxyz'.split('');

  let grid = [];
  for (let i = 0; i < n; i++){
    grid[i] = []; // створюємо масив масивів
    for (let j = 0; j < n ; j++){
      grid[i].push(abc[(j + i) % 26]); // добавляємо елементи з абс
    }
    grid[i] = grid[i].join(' ');
  }
  return grid.join('\n');
}

console.log (grid(5));
console.log (grid(25));
console.log (grid(-1));