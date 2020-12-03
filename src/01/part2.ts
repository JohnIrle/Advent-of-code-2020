import fs from "fs";

try {
  const data = fs.readFileSync(__dirname + "/../../inputs/day1.txt", "utf8");

  const lines = data.split(/\r?\n/);

  let numbers: number[] = [];

  lines.forEach((line) => numbers.push(parseInt(line)));

  for (let i = 0; i < numbers.length - 2; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === 2020) {
          console.log(
            `${numbers[i]} + ${numbers[j]} + ${numbers[k]} =`,
            numbers[i] + numbers[j] + numbers[k]
          );
          console.log(numbers[i] * numbers[j] * numbers[k]);
        }
      }
    }
  }
} catch (err) {
  console.log(err);
}
