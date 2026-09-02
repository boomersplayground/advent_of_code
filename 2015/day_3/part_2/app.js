import { input } from '../puzzleInput.js'

// const input = '^v'
// const input = '^>v<'
// const input = '^v^v^v^v^v'

const map = {
  '00': 2
}

const santa = { x: 0, y: 0 }
const robot = { x: 0, y: 0 }

const visited = new Set()
visited.add("0, 0")

for (const [index, dir] of input.split('').entries()) {
  const currentMover = index % 2 === 0 ? santa : robot

  if (dir === '>') {
    currentMover.x += 1
  }

  if (dir === '<') {
    currentMover.x -= 1
  }

  if (dir === '^') {
    currentMover.y += 1
  }

  if (dir === 'v') {
    currentMover.y -= 1
  }

  visited.add(`${currentMover.x},${currentMover.y}`)
}

console.log(visited.size)
// // print "hello" if roles ? (admin)
// // admin == true && print "hello"