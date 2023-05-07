import * as readline from 'node:readline/promises'
import { stdin, stdout, argv } from 'node:process'
import fetch from 'node-fetch'
import { parseArg } from './parse'
import { program } from 'commander'

program
  .name('httpcall')
  .command('post', 'Call http post method.')
  .argument('<url>', 'Url')
  .action((value) => {
    console.log(value.length)
  })

// https://stackoverflow.com/questions/44336656/commander-js-display-help-when-called-with-no-commands
if (process.argv.length < 3) {
  program.help()
}

program.parse()


// const rl = readline.createInterface({ input: stdin, output: stdout })

// const parseResult = parseArg(argv)
// if (parseResult.err) {
//   rl.write(`${parseResult.toString()}\n`)
//   rl.close()
// } else {
//   const parsedArg = parseResult.unwrap()

//   const res = await fetch(parsedArg.url, {
//     headers: parsedArg.headers,
//   })
//   const data: any = await res.text()
//   rl.write(data.toString())
//   rl.close()
// }
