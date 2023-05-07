import * as readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

const rl = readline.createInterface({ input: stdin, output: stdout })
const answer = await rl.question('What do you think of Node.js? ')
console.log(`Thank you for your valuable feedback: ${answer}`)
rl.close();
