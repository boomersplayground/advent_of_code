import { input } from '../puzzleInput.js'

// const input = '>'
// const input = '^>v<'
// const input = '^v^v^v^v^v'

const map = {
  '00': 1
}

let posX = 0
let posY = 0

for (const dir of input) {
  if (dir === '>') {
    posX += 1
  }

  if (dir === '<') {
    posX -= 1
  }

  if (dir === '^') {
    posY += 1
  }

  if (dir === 'v') {
    posY -= 1
  }

  const combinedPos = `${posX}${posY}`

  if (map[combinedPos]) {
    map[combinedPos] += 1
  } else {
    map[combinedPos] = 1
  }
}

console.log(Object.keys(map).length)