import * as readline from 'node:readline/promises'
import { stdin, stdout, argv } from 'node:process'
import fetch from 'node-fetch'
import { parseArg } from './parse'

const rl = readline.createInterface({ input: stdin, output: stdout })

const parseResult = parseArg(argv)
if (parseResult.err) {
  rl.write(`${parseResult.toString()}\n`)
  rl.close()
}

