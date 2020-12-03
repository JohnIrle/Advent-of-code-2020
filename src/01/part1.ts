import fs from "fs";

try {
  const data = fs.readFileSync(__dirname + "/../../inputs/day1.txt", "utf8");

  const lines = data.split(/\r?\n/);

  let numbers: number[] = [];

  lines.forEach((line: string) => numbers.push(parseInt(line)));

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === 2020) {
        console.log(numbers[i] * numbers[j]);
      }
    }
  }
} catch (err) {
  console.log(err);
}
