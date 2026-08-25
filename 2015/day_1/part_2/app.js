import { input } from "../puzzleInput.js"

let startingFloor = 0
let characterForBasement = 0

for (const [index, floor] of input.split('').entries()) {
  floor === '(' ? startingFloor++ : startingFloor--

  if (startingFloor === -1) {
    characterForBasement = index + 1
    break
  }

}

console.log(characterForBasement)