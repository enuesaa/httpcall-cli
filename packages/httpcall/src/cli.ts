import * as readline from 'node:readline/promises'
import { stdin, stdout, argv, exit } from 'node:process'
import { parseArg } from './parse'
import { fetcher } from '@enuesaa/httpcall-utils'

const rl = readline.createInterface({ input: stdin, output: stdout })

const [parsedArg, errorMessage] = parseArg(argv)
if (parsedArg === null) {
  rl.write(`${errorMessage}\n`)
  rl.close()
  exit(1)
}

const res = await fetcher({
  method: 'get',
  url: parsedArg.url,
  headers: parsedArg.headers,
  body: null,
})
console.log(res)
