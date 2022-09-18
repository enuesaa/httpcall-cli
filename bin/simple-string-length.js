#!/usr/bin/env node

import { program } from 'commander'

program
  .name('simple-string-length')
  .argument('<value>', 'value to count length')
  .action((value) => {
    console.log(value.length)
  })

// https://stackoverflow.com/questions/44336656/commander-js-display-help-when-called-with-no-commands
if (process.argv.length < 3) {
  program.help()
}

program.parse()
