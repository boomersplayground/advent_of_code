import crypto from 'node:crypto'
import { input } from '../puzzleInput.js'
const md5 = data => crypto.createHash('md5').update(data).digest('hex');
const isStartsWithFiveZeros = data => data.slice(0, 5) === '00000';

let counter = 0;
while (!isStartsWithFiveZeros(md5(`${input}${counter}`))) counter++;

console.log(counter);