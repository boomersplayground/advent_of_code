import { input } from "../puzzleInput.js"

let totalRibbon = 0

for (const meas of input) {
  const [l, w, h] = meas.split('x').map(Number)

  const max = Math.max(l, w, h)
  let smallestSide = 0

  if (l === max) {
    smallestSide = w + w + h + h
  }
  if (h === max) {
    smallestSide = w + w + l + l
  }
  if (w === max) {
    smallestSide = h + h + l + l
  }

  const bow = l * w * h
  const ribbon = smallestSide
  const totalRibbonLength = bow + ribbon

  totalRibbon += totalRibbonLength
}

console.log(totalRibbon)