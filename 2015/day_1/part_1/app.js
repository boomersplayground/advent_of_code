import { input } from "../puzzleInput.js"

let startingFloor = 0

for (const floor of input) {
  floor === '(' ? startingFloor++ : startingFloor--
}

console.log(startingFloor)