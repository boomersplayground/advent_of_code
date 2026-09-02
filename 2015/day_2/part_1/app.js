import { input } from "../puzzleInput.js"

let totalWrappingPaper = 0

for (const meas of input) {
  const [l, w, h] = meas.split('x')

  const side1 = l * w
  const side2 = w * h
  const side3 = h * l
  const min = Math.min(side1, side2, side3)
  const totalPaper = 2 * side1 + 2 * side2 + 2 * side3 + min

  totalWrappingPaper += totalPaper
}

console.log(totalWrappingPaper)