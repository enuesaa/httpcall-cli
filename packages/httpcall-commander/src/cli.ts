import { program } from 'commander'

/**
 * @see https://github.com/tj/commander.js/blob/master/examples/defaultCommand.js
 */

program
  .name('httpcall')

program
  .command('post')
  .description('Call http post method.')
  .argument('<url>', 'Url')
  .action((url: string) => {
    console.log(`post called! url is ${url}`)
  })

program
  .command('get')
  .description('Call http get method.')
  .argument('<url>', 'Url')
  .action((url: string) => {
    console.log(`get called! url is ${url}`)
  })

program
  .command('put')
  .description('Call http put method.')
  .argument('<url>', 'Url')
  .action((url: string) => {
    console.log(`put called! url is ${url}`)
  })

program
  .command('delete')
  .description('Call http delete method.')
  .argument('<url>', 'Url')
  .action((url: string) => {
    console.log(`delete called! url is ${url}`)
  })

/**
 * Also, you can pass process.argv like this..
 * program.parse(process.argv);
 */
program.parse();
