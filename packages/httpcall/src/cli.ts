import * as readline from 'node:readline/promises'
import { stdin, stdout, argv } from 'node:process'
import { parseArg } from './parse'
import { fetcher } from '@enuesaa/httpcall-utils'

const rl = readline.createInterface({ input: stdin, output: stdout })

const parseResult = parseArg(argv)
if (parseResult.err) {
  rl.write(`${parseResult.toString()}\n`)
  rl.close()
} else {
  const parsedArg = parseResult.unwrap()

  const res = await fetcher({
    method: 'get',
    url: parsedArg.url,
    headers: parsedArg.headers,
    body: null,
  })
  console.log(res)

  // rl.write(data.toString())
  rl.close()
}
