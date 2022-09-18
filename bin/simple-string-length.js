#!/usr/bin/env node

import { program } from 'commander'

program
  .name('strlen')
  .argument('<value>', 'value to count length')
  .action((value) => {
    console.log(value.length)
  })

program.parse()
