import fs from "fs";

const charCount = (c: string, str: string) => {
  return str && str.replace(new RegExp(`[^${c}]`, "g"), "").length;
};

const findCorrect = (arr: string[]) => {
  let correct = 0;

  for (let i = 0; i < arr.length; i++) {
    const parts = arr[i].replace(/[^\w\s]/gi, " ").split(" ");

    const [one, two, character, blank, string] = parts;
    const count = charCount(character, string);

    if (count >= parseInt(one) && count <= parseInt(two)) {
      correct += 1;
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
