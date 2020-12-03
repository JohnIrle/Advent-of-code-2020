import fs from "fs";

const findCorrect = (arr: string[]) => {
  let correct = 0;

  for (let i = 0; i < arr.length; i++) {
    const parts = arr[i].replace(/[^\w\s]/gi, " ").split(" ");

    const [one, two, letter, blank, string] = parts;

    if (
      (string.charAt(parseInt(one) - 1) === letter &&
        string.charAt(parseInt(two) - 1) !== letter) ||
      (string.charAt(parseInt(two) - 1) === letter &&
        string.charAt(parseInt(one) - 1) !== letter)
    ) {
      correct++;
    }
  }
  return correct;
};

try {
  const data = fs.readFileSync(__dirname + "/../../inputs/day2.txt", "utf8");

  const lines = data.split(/\r?\n/);

  console.log(findCorrect(lines));
} catch (err) {
  console.log(err);
}
