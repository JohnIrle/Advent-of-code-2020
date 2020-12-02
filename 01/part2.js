const fs = require("fs");

try {
  const data = fs.readFileSync("input.txt", "UTF-8");

  const lines = data.split(/\r?\n/);

  let numbers = [];

  lines.forEach((line) => numbers.push(parseInt(line)));

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      for (let k = 0; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 2020) {
          console.log(numbers[i] * numbers[j] * numbers[k]);
          return;
        }
      }
    }
  }
} catch (err) {
  console.log(err);
}
